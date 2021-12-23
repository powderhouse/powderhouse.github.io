import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { parse } from 'node-html-parser';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { baseGrid, PageContainer } from "../../components/global.js";

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router";

function ProjectDetailPage({ projectCards, projectGalleries }) {
  const router = useRouter();
  const { projectId } = router.query;
  let projectCard = getProjectCardById(projectId, projectCards);
  let projectGallery = getProjectGalleryById(projectId, projectGalleries);

  return (
    <PageContainer css={baseGrid}>
      <Header />
      <ProjectSplash>
        <ProjectTitle>{projectCard.attributes.ProjectTitle}</ProjectTitle>
        <ProjectFeatureImage>
          <ProjectImage
            src={
              projectCard.attributes.ProjectFeatureImage.data.attributes
                .formats == null
                ? projectCard.attributes.ProjectFeatureImage.data.attributes.url
                : projectCard.attributes.ProjectFeatureImage.data.attributes
                    .formats[
                    findLargestFormat(
                      projectCard.attributes.ProjectFeatureImage.data.attributes
                        .formats,
                      "large"
                    )
                  ].url
            }
            alt={
              projectCard.attributes.ProjectFeatureImage.data.attributes
                .alternativeText
            }
          />
        </ProjectFeatureImage>
        <ProjectInfo>
          <ProjectSubtitle>
            {projectCard.attributes.ProjectSubtitle}
          </ProjectSubtitle>
          <ProjectDescription>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {projectCard.attributes.ProjectDescription}
            </ReactMarkdown>
          </ProjectDescription>
          <ProjectInfoList>
            <li>
              {projectCard.attributes.YearStart}-
              {projectCard.attributes.YearEnd}
            </li>

            {projectCard.attributes.ProjectInfoList.map((n) => (
              <a key={n.id} href={n.Link}>
                <li>{n.LinkText}</li>
              </a>
            ))}
          </ProjectInfoList>
        </ProjectInfo>
      </ProjectSplash>
        {/* {JSON.stringify(projectGallery)} */}
      <PageGallery>
        
        {projectGallery.attributes.ProjectGalleryItem.map((i) =>
          i.MediaEmbed == null ? (
            <ProjectMediaDiv key={i.id}>

              {
                isVideo(i.MediaUpload.data.attributes.ext.slice(1)) 
                ? <video controls loop>
                    <source src={i.MediaUpload.data.attributes.url}></source>
                  </video>
                : (
                  <ProjectImage
                      src={
                        i.MediaUpload.data.attributes.formats == null
                          ? i.MediaUpload.data.attributes.url
                          : i.MediaUpload.data.attributes.formats[
                              findLargestFormat(
                                i.MediaUpload.data.attributes.formats,
                                "medium"
                              )
                            ].url
                      }
                    />
                  )
              }   
            </ProjectMediaDiv>
          ) : (
            <ProjectIframeDiv key={i.id} style={{paddingTop:getAspectRatio(i.MediaEmbed.Link)}}>
              <GalleryIframe src={"https://player.vimeo.com/video/9419036?h=79c4affaa6"} alt={i.MediaEmbed.LinkText} ></GalleryIframe>
            </ProjectIframeDiv>
          )
        )}

        {/* Code from old PageGallery content-model display */}
        {/* <ProjectImageDiv><ProjectImage src={i.MediaUpload.data.attributes.formats == null ? i.MediaUpload.data.attributes.url : i.MediaUpload.data.attributes.formats.findLargestFormat(i.MediaUpload.data.attributes.formats,"medium").url} alt={i.MediaUpload.data.attributes.alternativeText} /></ProjectImageDiv> */}
        {/* {JSON.stringify([i.MediaEmbed.Link,i.MediaEmbed.LinkText])} */}

        {/* {projectCard.attributes.ProjectGallery.data == null ? "" : */}
        {/*   projectCard.attributes.ProjectGallery.data.map(i => ( */}
        {/*     <ProjectImageDiv key={i.id}> */}
        {/*       {JSON.stringify()} */}
        {/*       <ProjectImage */}
        {/*         src={ */}
        {/*           i.attributes.formats == null */}
        {/*             ? i.attributes.url */}
        {/*             : i.attributes.formats[findLargestFormat(i.attributes.formats,"medium")].url */}
        {/*         } */}
        {/*       /> */}
        {/*     </ProjectImageDiv> */}
        {/*   ) */}
        {/* )} */}
      </PageGallery>

      <Footer />
    </PageContainer>
  );
}

let ProjectSplash = styled.div`
  grid-column: 1 / -1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "info image";
  gap: var(--gap);

  min-height: 640px;
  padding: var(--gap);
`;

let ProjectTitle = styled.h2`
  grid-area: title;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  font-size: 87px; /*TK Explicit?*/
`;

let ProjectInfo = styled.div`
  grid-area: info;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

let ProjectSubtitle = styled.div`
  font-size: 38px; /*TK Explicit?*/
`;

let ProjectDescription = styled.div``;

let ProjectInfoList = styled.ul``;

let ProjectFeatureImage = styled.div`
  grid-area: image;

  height: 450px;
  overflow: hidden;
`;

let ProjectImage = styled.img`
  height: 100%;
  object-fit: cover;

  /*Masonry*/
  display: block;
  width: 100%;
  margin-bottom: var(--gap);
`;

let PageGallery = styled.div`
  grid-column: 1 / -1;

  /*Masonry*/
  list-style-type: none;
  column-count: 3;
  column-gap: var(--gap);
  padding: var(--gap);
`;

let ProjectMediaDiv = styled.li`
  overflow: hidden;

  /*Masonry*/
  break-inside: avoid;
`;

let ProjectIframeDiv = styled(ProjectMediaDiv)`
  /* iframe responsive full-width, via "https://www.w3schools.com/howto/howto_css_responsive_iframes.asp" */
  position: relative;
  width: 100%;
  padding-top: 75%;  // 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) 
  margin-bottom: var(--gap);
  overflow:hidden;
`;

let GalleryIframe = styled.iframe`
  /* iframe responsive full-width, via "https://www.w3schools.com/howto/howto_css_responsive_iframes.asp" */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

// let getMethods = (obj) => Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function')

function htmlToElement(htmlString) {
    return parse(htmlString).childNodes[0]
}

function getAspectRatio(htmlString) {
  let element = htmlToElement(htmlString);
  let width = parseInt(element.getAttribute("width"));
  let height = parseInt(element.getAttribute("height"));
  return (height/width*100).toString()
}

function getSrc(htmlString) {
  let element = htmlToElement(htmlString);
  // console.log("############################"+element);
  return element.getAttribute("src")
  // return "returningggg!"
}

function isVideo(fileExt) {
  let vidExts = ["mov","mp4","flv","mkv","webm"];
  // join with uppercase
  if (vidExts.includes(fileExt)) {
    return true
  } else {
    return false
  }
}

function findLargestFormat(formatDict, maxSize = "large") {
  let formats = ["large", "medium", "small", "thumbnail"];
  formats = formats.slice(formats.indexOf(maxSize), formats.length);
  for (let size in formats) {
    if (formatDict.hasOwnProperty(formats[size])) {
      return formats[size];
    }
  }
}

function getProjectCardById(projectId, projectCards) {
  for (let c in projectCards.data) {
    if (projectCards.data[c].attributes.ProjectId == projectId) {
      return projectCards.data[c];
    }
  }
}

function getProjectGalleryById(projectId, projectGalleries) {
  for (let g in projectGalleries.data) {
    if (projectGalleries.data[g].attributes.ProjectId == projectId) {
      return projectGalleries.data[g];
    }
  }
}

function assemblePaths(paths) {
  let pathsList = [];
  for (let p in paths) {
    pathsList.push({ params: { projectId: paths[p] } });
  }
  return pathsList;
}

export async function getStaticPaths() {
  let projectCards = await fetchAPI("/project-cards?populate=*");
  let projectIds = projectCards.data.map((i) => i.attributes.ProjectId);
  return {
    paths: assemblePaths(projectIds),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let projectCards = await fetchAPI("/project-cards?populate=*");
  let projectGalleries = await fetchAPI(
    "/project-cards?populate[ProjectGalleryItem][populate]=*"
  );
  return {
    props: {
      projectCards: projectCards,
      projectGalleries: projectGalleries,
    }, // will be passed to the page component as props
  };
}

export default ProjectDetailPage;
