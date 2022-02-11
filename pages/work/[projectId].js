import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { parse } from "node-html-parser";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageContainer2 from "../../components/PageContainer2";
import Region2 from "../../components/Region2";

import {
  baseGrid,
  PageContainer,
  Div,
  Asterisk,
  getMediaURL,
} from "../../components/global.js";

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router";

function ProjectDetailPage({ projectData }) {
  const router = useRouter();
  const { projectId } = router.query;
  let accentColor = "--off-black";

  return (
    <PageContainer2>
      <Header backgroundColor="--off-white" />
      <ProjectSplash backgroundColor="--off-white">
        <ProjectTitle
          title={projectData.ProjectTitle}
          years={{ start: projectData.YearStart, end: projectData.YearEnd }}
        />
        <ProjectFeatureImage>
          <ProjectImage
            src={projectData.ProjectFeatureImageInfo.url}
            alt={projectData.ProjectFeatureImageInfo.alternativeText}
          />
        </ProjectFeatureImage>
        <ProjectInfo>
          <ProjectSubtitle markdown>
            {projectData.ProjectSubtitle}
          </ProjectSubtitle>
          <ProjectDescription markdown>
            {projectData.ProjectDescription}
          </ProjectDescription>
          <ProjectInfoList>
            {projectData.ProjectInfoList.map((n, i) => (
              <a key={i} href={n.Link}>
                <ProjectLi>
                  <Asterisk key={i} type="Default" />
                  {n.LinkText}
                </ProjectLi>
              </a>
            ))}
          </ProjectInfoList>
        </ProjectInfo>
      </ProjectSplash>
      <PageGallery
        backgroundColor="--off-white"
        numCols={projectData.ProjectGalleryItem.length > 2 ? 3 : 2}
      >
        {projectData.ProjectGalleryItem.map((i) =>
          i.MediaEmbed == null ? (
            <ProjectMediaDiv key={i.id}>
              {isVideo(i.MediaUpload.data.attributes.ext.slice(1)) ? (
                <video controls loop>
                  <source src={i.MediaUpload.data.attributes.url}></source>
                </video>
              ) : (
                <ProjectImage src={getMediaURL(i.MediaUpload, "medium")} />
              )}
            </ProjectMediaDiv>
          ) : (
            <ProjectIframeDiv
              key={i.id}
              aspectRatio={getAspectRatio(i.MediaEmbed.Link)}
            >
              <GalleryIframe
                src={getSrc(i.MediaEmbed.Link)}
                alt={i.MediaEmbed.LinkText}
              ></GalleryIframe>
            </ProjectIframeDiv>
          )
        )}
      </PageGallery>
      <Footer backgroundColor="--off-white" accentColor={accentColor} />
    </PageContainer2>
  );
}

let ProjectSplashDiv = styled.div`
  grid-column: 1 / -1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title title"
    "info image";
  column-gap: var(--gap);
`;

function ProjectSplash({ backgroundColor, ...rest }) {
  return (
    <Region2 backgroundColor={backgroundColor}>
      <ProjectSplashDiv {...rest} />
    </Region2>
  );
}

let ProjectTitleHeading = styled.h2`
  grid-area: title;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  font-size: calc(1.3rem * 5);
  line-height: calc(1.3rem * 5);
  font-weight: 300;
  display: inline-block;
  padding-bottom: calc(1 * 1.3rem);
`;

let TenureTag = styled.span`
  font-size: calc(1.3rem * 2);
  line-height: calc(1.3rem * 2);
  padding-bottom: calc(var(--gap) / 4);
  font-weight: 500;
  opacity: 0.625;
`;

let ProjectYearsHeading = styled.span`
  font-size: calc(3 * 1.3rem);
  line-height: calc(3 * 1.3rem);
  vertical-align: baseline;
  opacity: 0.25;
`;

function ProjectTitle(props) {
  return (
    <ProjectTitleHeading>
      {props.title}{" "}
      <ProjectYearsHeading>
        (
        {props.years.start == props.years.end
          ? props.years.start
          : `${props.years.start}–${props.years.end}`}
        )
      </ProjectYearsHeading>
    </ProjectTitleHeading>
  );
}

let ProjectInfo = styled.div`
  grid-area: info;

  display: flex;
  flex-direction: column;
`;

let ProjectSubtitle = styled(Div)`
  font-size: calc(1.3rem * 2);
  line-height: calc(1.3rem * 2);
  font-weight: 300;
`;

let ProjectDescription = styled(Div)`
  font-size: calc(1.3rem * 1.2);
  line-height: calc(1.3rem * 1.2);
  font-weight: 300;
  padding-top: 1.3rem;
`;

let ProjectInfoList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-top: 1.3rem;
`;

let ProjectLi = styled.li`
  padding-left: calc(1 * 1.3rem);
  position: relative;
`;

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

let PageGalleryDiv = styled.div`
  grid-column: 1 / -1;

  /*Masonry*/
  list-style-type: none;
  column-count: ${(props) => (props.numCols ? props.numCols : 3)};
  column-gap: var(--gap);
`;

function PageGallery({ backgroundColor, ...rest }) {
  return (
    <Region2 backgroundColor={backgroundColor}>
      <PageGalleryDiv {...rest} />
    </Region2>
  );
}

let ProjectMediaDiv = styled.li`
  overflow: hidden;

  /*Masonry*/
  break-inside: avoid;
`;

let ProjectIframeDiv = styled(ProjectMediaDiv)`
  /* iframe responsive full-width, via "https://www.w3schools.com/howto/howto_css_responsive_iframes.asp" */
  position: relative;
  width: 100%;
  padding-top: ${(props) => `${props.aspectRatio}%`};
  margin-bottom: var(--gap);
  overflow: hidden;
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
  return parse(htmlString).childNodes[0];
}

function getAspectRatio(htmlString) {
  let element = htmlToElement(htmlString);
  let width = parseInt(element.getAttribute("width"));
  let height = parseInt(element.getAttribute("height"));
  return ((height / width) * 100).toString();
}

function getSrc(htmlString) {
  let element = htmlToElement(htmlString);
  return element.getAttribute("src");
}

function isVideo(fileExt) {
  let vidExts = ["mov", "mp4", "flv", "mkv", "webm"];
  // join with uppercase
  if (vidExts.includes(fileExt)) {
    return true;
  } else {
    return false;
  }
}

function getProjectCardById(projectId, projectCards) {
  let project = projectCards.data.find(
    ({ attributes: { ProjectId } }) => ProjectId == projectId
  ).attributes;

  project.ProjectFeatureImageInfo = {
    url: getMediaURL(project.ProjectFeatureImage, "large"),
    alternativeText:
      project.ProjectFeatureImage.data.attributes.alternativeText,
  };

  // TODO: We don't need project.ProjectFeatureImage, and could (maybe should) delete it at this point.  This would require a deep clone of the project object.

  return project;
}

export async function getStaticPaths() {
  let projectCards = await fetchAPI("/project-cards");
  let projectIds = projectCards.data.map((i) => i.attributes.ProjectId);
  return {
    paths: projectIds.map((i) => ({
      params: {
        projectId: i,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { projectId } }) {
  // Sample Call: api.powderhouse.org/api/project-cards?filters[ProjectId][$eq]=spaghetti&pagination[limit]=1&populate[ProjectGalleryItem][populate]=*&populate[ProjectFeatureImage][populate]=*&populate[ProjectInfoList][populate]=*

  let apiCall = [
    "/project-cards",
    [
      `filters[ProjectId][$eq]=${projectId}`,
      "pagination[limit]=1", // We are only constructing one per page
      // Fields to deeplt populate
      ...["ProjectGalleryItem", "ProjectFeatureImage", "ProjectInfoList"].map(
        (f) => `populate[${f}][populate]=*`
      ),
    ].join("&"),
  ].join("?");

  let projectData = (await fetchAPI(apiCall)).data[0].attributes;

  projectData.ProjectFeatureImageInfo = {
    url: getMediaURL(projectData.ProjectFeatureImage),
    alternativeText:
      projectData.ProjectFeatureImage.data.attributes.alternativeText,
  };

  return {
    props: {
      projectData: projectData,
    }, // will be passed to the page component as props
  };
}

export default ProjectDetailPage;
