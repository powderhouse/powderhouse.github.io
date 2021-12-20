import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { 
  baseGrid,
  PageContainer,
  PageSplash,
  PageHeader,
  PageTableOfContents,
  PageTOCListItem,
  PageTOCLink,
  PageIntro,
  SectionHeader,
  PageSection,
  PageSectionContent,
  WidePageSectionContent,
  FullBleedImage,
  Highlight
} from '../../components/global.js';

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

function JobDetailPage({jobCards}) {
  return (
    <PageContainer css={baseGrid}>
        {/* {JSON.stringify(jobCards.data[0])} */}
        <Header />
        <PageSplash bgColor='red' color='off-white'>
          <PageHeader>{jobCards.data[0].attributes.JobTitle}</PageHeader>
          <PageTableOfContents>
            {jobCards.data[0].attributes.PageSection.map(n => <PageTOCListItem><PageTOCLink href={"#"+n.SectionHeader.replace(/\s+/g, '-').toLowerCase()}>{n.SectionHeader}</PageTOCLink></PageTOCListItem>)}
          </PageTableOfContents>
        </PageSplash>
        <PageIntro>
            {jobCards.data[0].attributes.JobSubtitle}
        </PageIntro>

        {jobCards.data[0].attributes.PageSection.map(n => 
          <PageSection isLightSection={true} css={baseGrid}>
            <SectionHeader id={n.SectionHeader.replace(/\s+/g, '-').toLowerCase()} isLeftHeader={true}>{n.SectionHeader}</SectionHeader>
            <PageSectionContent>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {n.PageSectionContent}
              </ReactMarkdown>
            </PageSectionContent>
          </PageSection>
        )}

        <Footer />
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

export async function getStaticProps(context) {
  let jobCards = await fetchAPI('/job-cards?populate=*');
  return {
    props: {
      jobCards:jobCards
    }  // will be passed to the page component as props
  }
}

export default JobDetailPage;