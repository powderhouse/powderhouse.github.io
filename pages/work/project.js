import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { 
  baseGrid,
  PageContainer 
} from '../../components/global.js';

function ProjectDetailPage() {
  return (
      <PageContainer css={baseGrid}>
        <Header />

        <ProjectSplash>
          <ProjectTitle>Spaghetti Dinners</ProjectTitle>
          <ProjectFeatureImage></ProjectFeatureImage>
          <ProjectInfo>
            <ProjectSubtitle>
              A monthly dinner and performance series exploring cross-disciplinary themes.
            </ProjectSubtitle>
            <ProjectDescription>
              Inspired by the spaghetti dinners of Great Small Works, this dinner theater series brought people together around food, music, and performance around a monthly theme. Blurring the line between art and academia, sprout spaghetti dinners asked academics to approach their lectures as performance and puppeteers to present their theater as pedagogy.
            </ProjectDescription>
            <ProjectInfoList>
              <li>2009-2016</li>
              <li>sprout spaghetti dinners on tumblr</li>
            </ProjectInfoList>
          </ProjectInfo>
        </ProjectSplash>

        <PageGallery>
          <ProjectImage></ProjectImage>
          <ProjectImage></ProjectImage>
          <ProjectImage></ProjectImage>
          <ProjectImage></ProjectImage>
          <ProjectImage></ProjectImage>
          <ProjectImage></ProjectImage>
          <ProjectImage></ProjectImage>
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
  /*background-color:var(--red);*/ /*TK Try with color?*/
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

  background-image:url(https://assets.teenvogue.com/photos/5d13bc09bdcb55000998698d/4:3/w_2000,h_1500,c_limit/00-promo-emma-goldman.jpg);
  background-size:cover;
  min-height:450px;
`;

let PageGallery = styled.div`
  grid-column: 1 / -1;

  display:grid;
  grid-template-columns:1fr 1fr;
  gap: var(--gap);
  padding:var(--gap);
`;

let ProjectImage = styled.div`
  background-image:url(https://assets.teenvogue.com/photos/5d13bc09bdcb55000998698d/4:3/w_2000,h_1500,c_limit/00-promo-emma-goldman.jpg);
  background-size:cover;

  &:nth-child(3n+1) {
    grid-column: 1 / -1;
    height:550px;
  }
  &:nth-child(3n+2) {
    grid-column: 1 / 2;
    height:400px;
  }
  &:nth-child(3n+3) {
    grid-column: 2 / 3;
    height:400px;
  }
`;

export default ProjectDetailPage;
