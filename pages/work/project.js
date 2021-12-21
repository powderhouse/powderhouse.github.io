import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { 
  baseGrid,
  PageContainer 
} from '../../components/global.js';

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

function ProjectDetailPage({projectCards,projectNum}) {
  return (
      <PageContainer css={baseGrid}>
        <Header />
        <ProjectSplash>
          <ProjectTitle>{projectCards.data[projectNum].attributes.ProjectTitle}</ProjectTitle>
          <ProjectFeatureImage>
            <ProjectImage src={projectCards.data[projectNum].attributes.ProjectFeatureImage.data.attributes.formats == null ? projectCards.data[projectNum].attributes.ProjectFeatureImage.data.attributes.url : projectCards.data[projectNum].attributes.ProjectFeatureImage.data.attributes.formats.medium.url } alt={projectCards.data[projectNum].attributes.ProjectFeatureImage.data.attributes.alternativeText} />
          </ProjectFeatureImage>
          <ProjectInfo>
            <ProjectSubtitle>
              {projectCards.data[projectNum].attributes.ProjectSubtitle}
            </ProjectSubtitle>
            <ProjectDescription>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {projectCards.data[projectNum].attributes.ProjectDescription}
              </ReactMarkdown>
            </ProjectDescription>
            <ProjectInfoList>
              <li>{projectCards.data[projectNum].attributes.YearStart}-{projectCards.data[projectNum].attributes.YearEnd}</li>

              {projectCards.data[projectNum].attributes.ProjectInfoList.map(n =>
                <a href={n.Link}><li>{n.LinkText}</li></a>
              )}
            </ProjectInfoList>
          </ProjectInfo>
        </ProjectSplash>

        <PageGallery>
          {projectCards.data[projectNum].attributes.ProjectGallery.data.map(i =>
            <ProjectImageDiv>
              {JSON.stringify()}
              <ProjectImage src={i.attributes.formats==null ? i.attributes.url : i.attributes.formats.small.url} />
            </ProjectImageDiv>
          )}
        </PageGallery>

        <Footer/>
      </PageContainer>
  );
}

let ProjectSplash = styled.div`
  grid-column: 1 / -1;

  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-areas: 
    'title title'
    'info image';
  gap:var(--gap);

  min-height:640px;
  padding:var(--gap);
`;

let ProjectTitle = styled.h2`
  grid-area:title;

  display:flex;
  flex-direction:column;
  justify-content:flex-end;

  font-size:87px; /*TK Explicit?*/
`;

let ProjectInfo = styled.div`
  grid-area: info;

  display:flex;
  flex-direction:column;
  justify-content:space-around;
`;

let ProjectSubtitle = styled.p`
  font-size:38px; /*TK Explicit?*/
`;

let ProjectDescription = styled.p``;

let ProjectInfoList = styled.ul``;

let ProjectFeatureImage = styled.div`
  grid-area: image;

  height:450px;
  overflow:hidden;
`;

let ProjectImage = styled.img`
  object-fit:cover;

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
  overflow:hidden;

  /*Masonry*/
  break-inside: avoid;
`;

let projectNum = 2;

export async function getStaticProps(context) {
  let projectCards = await fetchAPI('/project-cards?populate=*');
  return {
    props: {
      projectCards:projectCards,
      projectNum:projectNum
    }  // will be passed to the page component as props
  }
}

export default ProjectDetailPage;
