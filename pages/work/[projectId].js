import styled from "styled-components";
import { parse } from "node-html-parser";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Asterisk from "../../components/Asterisk";
import PageContainer2 from "../../components/PageContainer2";
import Region2 from "../../components/Region2";
import PageImage from "../../components/PageImage";

import { mediaQueries } from "../../site-data";
import SEO from "../../components/SEO";

import { baseGrid, getMediaURL, Div, complementaryColor } from "../../components/global.js";

import { fetchAPI } from "../../lib/api";

function ProjectDetailPage({ projectData }) {
  let accentColor = "--off-black";
  return (
    <>
      <SEO meta={projectData.meta} />
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
          {projectData.ProjectInfoList.length > 0 ? (
            <ProjectRelatedResources>
              <ProjectSubtitle>Related Materials</ProjectSubtitle>
              <ProjectInfoList>
                {projectData.ProjectInfoList.map((n, i) => (
                  <ProjectLi key={i}>
                    <a href={n.Link}>
                      <Asterisk $type="Default" />
                      <Div markdown>{n.LinkText}</Div>
                    </a>
                  </ProjectLi>
                ))}
              </ProjectInfoList>
            </ProjectRelatedResources>
          ) : (
            ""
          )}
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
                  title={i.MediaEmbed.LinkText}
                ></GalleryIframe>
              </ProjectIframeDiv>
            )
          )}
        </ProjectGallery>
        <Footer backgroundColor="--off-black" accentColor={complementaryColor(accentColor)} />
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
`;

let ProjectTitleContainer = styled.h2`
  line-height: 0em;
  font-weight: 300;
`;

let ProjectTitleHeading = styled.span`
  display: inline;
  font-weight: 300;
  padding-right: 0.25em; // TODO: Check if this in fact looks right
  font-size: calc(var(--splash-font-size) * 0.625);
  line-height: calc(var(--splash-line-height) * 1.125);

  @media ${mediaQueries.uptoTablet} {
    font-size: calc(var(--splash-font-size) * 0.5);
    line-height: calc(var(--splash-line-height) * 1.125);
  }

  @media ${mediaQueries.uptoMobile} {
    font-size: calc(var(--splash-font-size) * 0.33);
    line-height: calc(var(--splash-line-height) * 1.125);
  }
`;

let ProjectYearsHeading = styled.span`
  font-size: calc(0.5 * 0.625 * var(--splash-font-size));
  line-height: calc(var(--splash-line-height) * 1.5);
  white-space: nowrap;
  font-weight: 300;
  opacity: 0.25;
  display: inline;

  @media ${mediaQueries.uptoTablet} {
    font-size: calc(0.5 * 0.625 * var(--splash-font-size));
  }

  @media ${mediaQueries.uptoTablet} {
    font-size: calc(0.75 * 0.5 * 0.625 * var(--splash-font-size));
  }
`;

function ProjectTitle(props) {
  return (
    <ProjectTitleDiv>
      <ProjectTitleContainer>
        <ProjectTitleHeading>
          {props.title}
        </ProjectTitleHeading>
        <wbr/>
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
  grid-column: 4 / -4; // TK 3 / -3 for wider option

  font-size: var(--xlarge-font-size);
  line-height: var(--xlarge-line-height);
  font-weight: 300;

  @media ${mediaQueries.uptoTablet} {
    grid-column: 2 / -2;
    font-size: var(--large-font-size);
    line-height: var(--large-line-height);
  }

  @media ${mediaQueries.uptoMobile} {
    grid-column: 1 / -1;
    font-size: var(--medium-font-size);
    line-height: var(--medium-line-height);
  }
`;

let ProjectDescription = styled(Div)`
  grid-column: 4 / -4; // TK 3 / -3 for wider option

  font-size: calc(var(--medium-font-size));
  line-height: calc(var(--medium-line-height));
  font-weight: 300;

  @media ${mediaQueries.uptoTablet} {
    grid-column: 2 / -2;
    font-size: calc(var(--base-font-size));
    line-height: calc(var(--base-line-height));
  }

  @media ${mediaQueries.uptoMobile} {
    grid-column: 1 / -1;
  }
`;

let ProjectRelatedResources = styled.div`
  grid-column: 4 / -4; // TK 3 / -3 for wider option

  @media ${mediaQueries.uptoTablet} {
    grid-column: 2 / -2;
  }

  @media ${mediaQueries.uptoMobile} {
    grid-column: 1 / -1;
  }
`;

let ProjectInfoList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  // TODO: Search for vertical-rhythm/4— We probably don't want bumps that small
  padding-top: calc(var(--vertical-rhythm) / 4);
  font-weight: 300;
`;

let ProjectLi = styled.li`
  padding-left: 1em; // AsteriskContainer is 0.5em (diff of left placement and padding)
  position: relative;
`;

let FeatureImageContainer = styled.div`
  grid-column: 4 / -4; // TK 3 / -3 for wider option

  @media ${mediaQueries.uptoTablet} {
    grid-column: 2 / -2;
  }

  @media ${mediaQueries.uptoMobile} {
    grid-column: 1 / -1;
  }

  & figure {
    padding: 0;
  }
`;

let ProjectFeatureImage = styled(PageImage)`
  grid-column: 4 / -4; // TK 3 / -3 for wider option
  height: 450px;

  @media ${mediaQueries.uptoTablet} {
    grid-column: 2 / -2;
  }

  @media ${mediaQueries.uptoMobile} {
    grid-column: 1 / -1;
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
  padding-bottom: calc(1.5 * var(--vertical-rhythm));

  // Implements Masonry layout
  list-style-type: none;
  column-count: ${(props) => (props.numCols ? props.numCols : 3)};
  column-gap: var(--gap);

  @media ${mediaQueries.uptoTablet} {
    column-count: 2;
  }
  @media ${mediaQueries.uptoMobile} {
    column-count: 1;
  }

  & video {
    padding-bottom: var(--gap);
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
  // iframe responsive full-width, via https://css-tricks.com/responsive-iframes/
  position: relative;
  width: 100%;
  padding-top: ${(props) => `${props.aspectRatio}%`};
  margin-bottom: var(--gap);
  overflow: hidden;
`;

let GalleryIframe = styled.iframe`
  // iframe responsive full-width, via https://css-tricks.com/responsive-iframes/
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

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
  return vidExts.includes(fileExt.toLowerCase());
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
      // Fields to deeply populate
      ...[
        "ProjectGalleryItem",
        "ProjectFeatureImage",
        "ProjectInfoList",
        "meta",
      ].map((f) => `populate[${f}][populate]=*`),
    ].join("&"),
  ].join("?");

  let projectData = (await fetchAPI(apiCall)).data[0].attributes;

  projectData.ProjectFeatureImageInfo = {
    url: getMediaURL(projectData.ProjectFeatureImage),
    alternativeText:
      projectData.ProjectFeatureImage.data.attributes.alternativeText,
  };
  projectData.meta[0].title = `${projectData.ProjectTitle} (${projectData.YearStart}–${projectData.YearEnd} — Powderhouse`;

  return {
    props: {
      projectData: projectData,
    }, // will be passed to the page component as props
  };
}

export default ProjectDetailPage;
