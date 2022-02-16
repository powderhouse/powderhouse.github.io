import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Region2 from "../../../components/Region2";
import PageTableOfContents from "../../../components/PageTableOfContents";
import PageContainer2 from "../../../components/PageContainer2";
import { asteriskSVG } from "../../../site-data.js";

import {
  baseGrid,
  Spacer,
  PageSplash,
  PageHeading,
  PageTOCListItem,
  PageTOCLink,
  Asterisk,
  PageIntroduction,
  SectionHeader,
  PageSection,
  PageSectionContent,
  WidePageSectionContent,
  FullBleedImage,
  Highlight,
  slugify,
} from "../../../components/global.js";

import { getStrapiMedia } from "../../../lib/media";
import { fetchAPI } from "../../../lib/api";
import { useRouter } from "next/router";

function JobDetailPage({ jobCards }) {
  let accentColor = "--red";
  const router = useRouter();
  const { jobId } = router.query;
  let jobCard = getJobCardById(jobId, jobCards);

  let regions = [
    <Header backgroundColor="--off-white" key="header" />,
    <PageSplash backgroundColor={accentColor} key="splash">
      <PageHeading>{jobCard.attributes.JobTitle}</PageHeading>
      <PageTableOfContents sections={jobCard.attributes.PageSections} />
    </PageSplash>,
    <PageIntroduction backgroundColor="--off-white" key="introduction">
      {jobCard.attributes.JobSubtitle}
    </PageIntroduction>,
    ...jobCard.attributes.PageSections.map((n, i) => {
      let slug = slugify(n.SectionHeader);
      return (
        <Region2 
          backgroundColor="--off-white" 
          key={`job-${i}`}
          header={n.SectionHeader ? n.SectionHeader : null}
          left={n.isLeftHeader ? n.isLeftHeader : null}
        >
          <PageSectionContent markdown>
            {n.PageSectionContent}
          </PageSectionContent>
        </Region2>
      );
    }),
    <Footer
      backgroundColor="--off-white"
      accentColor={accentColor}
      key="footer"
    />,
  ];
  return <PageContainer2>{regions}</PageContainer2>;
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
  let jobCards = await fetchAPI("/job-cards");
  let jobIds = jobCards.data.map((i) => i.attributes.JobId);
  return {
    paths: assemblePaths(jobIds),
    fallback: false,
  };
}

export async function getStaticProps({ params: { jobId } }) {
  let jobCards = await fetchAPI(
    `/job-cards?filters[JobId][$eq]=${jobId}&pagination[limit]=1&populate=*`
  );
  return {
    props: {
      jobCards: jobCards,
    }, // will be passed to the page component as props
  };
}

export default JobDetailPage;
