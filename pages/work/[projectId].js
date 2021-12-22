import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { baseGrid, PageContainer } from "../../components/global.js";

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";
import { useRouter } from 'next/router';

function ProjectDetailPage({ projectCards }) {
  const router = useRouter();
  const { projectId } = router.query;
  let projectCard = getProjectCardById(projectId,projectCards);
  
  return (
    <PageContainer css={baseGrid}>
      <Header />
      <ProjectSplash>
        <ProjectTitle>
          {projectCard.attributes.ProjectTitle}
        </ProjectTitle>
        <ProjectFeatureImage>
          <ProjectImage
            src={
              projectCard.attributes.ProjectFeatureImage.data
                .attributes.formats == null
                ? projectCard.attributes.ProjectFeatureImage
                    .data.attributes.url
                : projectCard.attributes.ProjectFeatureImage
                    .data.attributes.formats[findLargestFormat(projectCard.attributes.ProjectFeatureImage
                    .data.attributes.formats,"large")].url
            }
            alt={
              projectCard.attributes.ProjectFeatureImage.data
                .attributes.alternativeText
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

            {projectCard.attributes.ProjectInfoList.map(
              (n) => (
                <a key={n.id} href={n.Link}>
                  <li>{n.LinkText}</li>
                </a>
              )
            )}
          </ProjectInfoList>
        </ProjectInfo>
      </ProjectSplash>

      <PageGallery>
        {projectCard.attributes.ProjectGallery.data == null ? "" :
          projectCard.attributes.ProjectGallery.data.map(i => (
            <ProjectImageDiv key={i.id}>
              {JSON.stringify()}
              <ProjectImage
                src={
                  i.attributes.formats == null
                    ? i.attributes.url
                    : i.attributes.formats[findLargestFormat(i.attributes.formats,"medium")].url
                }
              />
            </ProjectImageDiv>
          )
        )}
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
  height:100%;
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

let ProjectImageDiv = styled.li`
  overflow: hidden;

  /*Masonry*/
  break-inside: avoid;
`;

function findLargestFormat(formatDict,maxSize="large") {
    let formats=["large","medium","small","thumbnail"];
    formats = formats.slice(formats.indexOf(maxSize),formats.length);
    for (let size in formats) {
        if (formatDict.hasOwnProperty(formats[size])) {
            return formats[size]
        }
    }
}

function getProjectCardById(projectId,projectCards) {
  for (let card in projectCards.data) {
    if (projectCards.data[card].attributes.ProjectId == projectId) {
      return projectCards.data[card]
    }
  }
}

function assemblePaths(paths) {
  let pathsList = [];
  for (let p in paths) {
    pathsList.push({params:{projectId:paths[p]}})
  }
  return pathsList
}

export async function getStaticPaths() {
  let projectCards = await fetchAPI("/project-cards?populate=*");
  let projectIds = projectCards.data.map(i => i.attributes.ProjectId);
  return {
    paths: assemblePaths(projectIds),
    fallback: false
  }
}

export async function getStaticProps(context) {
  let projectCards = await fetchAPI("/project-cards?populate=*");
  return {
    props: {
      projectCards: projectCards
    }, // will be passed to the page component as props
  };
}

export default ProjectDetailPage;
