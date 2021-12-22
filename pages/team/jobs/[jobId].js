import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

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
} from "../../../components/global.js";

import { getStrapiMedia } from "../../../lib/media";
import { fetchAPI } from "../../../lib/api";
import { useRouter } from "next/router";

function JobDetailPage({ jobCards }) {
  const router = useRouter();
  const { jobId } = router.query;
  let jobCard = getJobCardById(jobId, jobCards);

  return (
    <PageContainer css={baseGrid}>
      <Header />
      <PageSplash bgColor="red" color="off-white">
        <PageHeader>{jobCard.attributes.JobTitle}</PageHeader>
        <PageTableOfContents>
          {jobCard.attributes.PageSections.map((n) => (
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
      <PageIntro>{jobCard.attributes.JobSubtitle}</PageIntro>

      {jobCard.attributes.PageSections.map((n) => (
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

function getJobCardById(jobId, jobCards) {
  for (let card in jobCards.data) {
    if (jobCards.data[card].attributes.JobId == jobId) {
      return jobCards.data[card];
    }
  }
}

function assemblePaths(paths) {
  let pathsList = [];
  for (let p in paths) {
    pathsList.push({ params: { jobId: paths[p] } });
  }
  return pathsList;
}

export async function getStaticPaths() {
  let jobCards = await fetchAPI("/job-cards?populate=*");
  let jobIds = jobCards.data.map((i) => i.attributes.JobId);
  return {
    paths: assemblePaths(jobIds),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let jobCards = await fetchAPI("/job-cards?populate=*");
  return {
    props: {
      jobCards: jobCards,
    }, // will be passed to the page component as props
  };
}

export default JobDetailPage;
