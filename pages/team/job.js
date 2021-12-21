import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
  Highlight,
} from "../../components/global.js";

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

function JobDetailPage({ jobCards, jobNum }) {
  return (
    <PageContainer css={baseGrid}>
      <Header />
      <PageSplash bgColor="red" color="off-white">
        <PageHeader>{jobCards.data[jobNum].attributes.JobTitle}</PageHeader>
        <PageTableOfContents>
          {jobCards.data[jobNum].attributes.PageSections.map((n) => (
            <PageTOCListItem key={n.id}>
              <PageTOCLink
                href={"#" + n.SectionHeader.replace(/\s+/g, "-").toLowerCase()}
              >
                {n.SectionHeader}
              </PageTOCLink>
            </PageTOCListItem>
          ))}
        </PageTableOfContents>
      </PageSplash>
      <PageIntro>{jobCards.data[jobNum].attributes.JobSubtitle}</PageIntro>

      {jobCards.data[jobNum].attributes.PageSections.map((n) => (
        <PageSection key={n.id} isLightSection={true} css={baseGrid}>
          <SectionHeader
            id={n.SectionHeader.replace(/\s+/g, "-").toLowerCase()}
            isLeftHeader={true}
          >
            {n.SectionHeader}
          </SectionHeader>
          <PageSectionContent>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {n.PageSectionContent}
            </ReactMarkdown>
          </PageSectionContent>
        </PageSection>
      ))}

      <Footer />
    </PageContainer>
  );
}

let jobNum = 0;

export async function getStaticProps(context) {
  let jobCards = await fetchAPI("/job-cards?populate=*");
  return {
    props: {
      jobCards: jobCards,
      jobNum: jobNum,
    }, // will be passed to the page component as props
  };
}

export default JobDetailPage;
