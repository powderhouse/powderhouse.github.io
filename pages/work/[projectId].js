import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { parse } from "node-html-parser";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageContainer2 from "../../components/PageContainer2";
import Region2 from "../../components/Region2";
import PageImage from "../../components/PageImage";

import { mediaQueries } from "../../site-data";

import Head from "next/head";

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
    <>
      <Head>
        <title>
          {projectData.ProjectTitle} ({projectData.YearStart}–
          {projectData.YearEnd} — Powderhouse
        </title>
      </Head>
      <PageContainer2>
        <Header
          backgroundColor="--off-white"
          activeScribbleColor={accentColor}
        />
        <ProjectContent backgroundColor="--off-white">
          <ProjectTitle
            title={projectData.ProjectTitle}
            years={{ start: projectData.YearStart, end: projectData.YearEnd }}
          />
          <ProjectSubtitle markdown>
            {projectData.ProjectSubtitle}
          </ProjectSubtitle>
          <FeatureImageContainer>
            <ProjectFeatureImage
              fullBleed={true}
              src={projectData.ProjectFeatureImageInfo.url}
              alt={projectData.ProjectFeatureImageInfo.alternativeText}
            />
          </FeatureImageContainer>
          <ProjectDescription markdown>
            {projectData.ProjectDescription}
          </ProjectDescription>
          {projectData.ProjectInfoList.length > 0 
            ? <ProjectSubtitle>Related Materials</ProjectSubtitle>
            : ""}
          <ProjectInfoList>
            {projectData.ProjectInfoList.map((n, i) => (
              <ProjectLi>
                <a key={i} href={n.Link}>
                  <Asterisk key={i} $type="Default" />
                  {n.LinkText}
                </a>
              </ProjectLi>
            ))}
          </ProjectInfoList>
        </ProjectContent>
        <ProjectGallery
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
                  <ProjectImage
                    src={getMediaURL(i.MediaUpload, "medium")}
                    alt={i.MediaUpload.data.attributes.alternativeText}
                  />
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
        </ProjectGallery>
        <Footer backgroundColor="--off-white" accentColor={accentColor} />
      </PageContainer2>
    </>
  );
}

let ProjectContentDiv = styled.div`
  grid-column: 1 / -1;

  ${baseGrid};
`;

function ProjectContent({ backgroundColor, ...rest }) {
  return (
    <Region2 backgroundColor={backgroundColor}>
      <ProjectContentDiv {...rest} />
    </Region2>
  );
}

let ProjectTitleDiv = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

let ProjectTitleContainer = styled.h2`
  line-height: 0em;
  font-weight: 300;
  // padding-bottom: var(--body-font-size);

  @media ${mediaQueries.uptoTablet} {
     /*TODO: Check if this can be avoided re: choosing a new type hierarchy*/
     font-size: calc(1.3rem * 3);
     line-height: calc(1.3rem * 3);
     padding-bottom: calc(1.3rem / 2);
  }

  @media ${mediaQueries.uptoMobile} {
  }
`;

let ProjectTitleHeading = styled.span`
  font-size: var(--small-splash-font-size);
  line-height: var(--small-splash-line-height);
`;

let ProjectYearsHeading = styled.span`
  font-size: calc(0.625 * var(--small-splash-font-size));
  line-height: calc(var(--small-splash-line-height));
  display: inline-block;
  white-space: nowrap;
  font-weight: 300;
  opacity: 0.25;

  @media ${mediaQueries.uptoTablet} {
     /*TODO: Check if this can be avoided re: choosing a new type hierarchy*/
     font-size: calc(1 * 1.3rem);
     line-height: calc(1 * 1.3rem);
  }
`;

function ProjectTitle(props) {
  return (
    <ProjectTitleDiv>
      <ProjectTitleContainer>
        <ProjectTitleHeading>{props.title} </ProjectTitleHeading>
        <ProjectYearsHeading>
          {props.years.start == props.years.end
            ? props.years.start
            : `${props.years.start}–${props.years.end}`}
        </ProjectYearsHeading>
      </ProjectTitleContainer>
    </ProjectTitleDiv>
  );
}

let ProjectSubtitle = styled(Div)`
  grid-column: 4 / -4;

  font-size: calc(1.25 * var(--medium-heading-font-size));
  line-height: calc(1.25 * var(--medium-heading-line-height));
  font-weight: 300;

  @media ${mediaQueries.uptoTablet} {
    grid-column: 2 / -2;
  }

  @media ${mediaQueries.uptoMobile} {
    /*TODO: See if we need this still*/
    font-size: calc(1.3rem * 1.5);
    line-height: calc(1.3rem * 1.5);
    grid-column: 1 / -1;
  }
`;

let ProjectDescription = styled(Div)`
  grid-column: 4 / -4;

  font-size: calc(var(--small-heading-font-size));
  line-height: calc(var(--small-heading-line-height));
  font-weight: 300;
  // padding-top: var(--body-line-height);


  @media ${mediaQueries.uptoMobile} {
    /*TODO: See if we need this still*/
    /*font-size: calc(1.3rem * 1);*/
    /*line-height: calc(1.3rem * 1);*/
  }
`;

let ProjectInfoList = styled.ul`
  grid-column: 4 / -4;

  list-style-type: none;
  margin: 0;
  padding: 0;
  padding-bottom: var(--body-line-height);
  font-weight: 300;
`;

let ProjectLi = styled.li`
  // TODO: rationalize this
  padding-left: calc(var(--body-line-height));
  position: relative;
`;

let FeatureImageContainer = styled.div`
  grid-column: 4 / -4;
`;

let ProjectFeatureImage = styled(PageImage)`
  grid-column: 4 / -4;
  height: 450px;

  @media ${mediaQueries.uptoMobile} {
    height: 300px;
  }
`;

let ProjectImage = styled.img`
  height: 100%;
  object-fit: cover;

  /*Masonry*/
  display: block;
  width: 100%;
  margin-bottom: var(--gap);
`;

let ProjectGalleryDiv = styled.div`
  grid-column: 1 / -1;

  /*Masonry*/
  list-style-type: none;
  column-count: ${(props) => (props.numCols ? props.numCols : 3)};
  column-gap: var(--gap);

  @media ${mediaQueries.uptoTablet} {
    column-count: 2;
  }
  @media ${mediaQueries.uptoMobile} {
    column-count: 1;
  }
`;

function ProjectGallery({ backgroundColor, ...rest }) {
  return (
    <Region2 backgroundColor={backgroundColor}>
      <ProjectGalleryDiv {...rest} />
    </Region2>
  );
}

let ProjectMediaDiv = styled.div`
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

function getAttrFromHTML(attr, htmlString) {
  let element = parse(htmlString).querySelector(`[${attr}]`);
  return element.getAttribute(attr);
}

function getAspectRatio(htmlString) {
  let width = parseInt(getAttrFromHTML("width", htmlString));
  let height = parseInt(getAttrFromHTML("height", htmlString));
  return ((height / width) * 100).toString();
}

function getSrc(htmlString) {
  return getAttrFromHTML("src", htmlString);
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
