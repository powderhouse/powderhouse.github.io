// import { useEffect, useState } from "react";
import SEO from "../../../components/SEO";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Region2 from "../../../components/Region2";
import PageContainer2 from "../../../components/PageContainer2";

import {
  PageTableOfContents,
  PageSplash,
  PageIntroduction,
  PageSectionContent,
  PageHeading,
} from "../../../components/Page.js";

import { fetchAPI } from "../../../lib/api";
import { useRouter } from "next/router";

function JobDetailPage({ jobCards }) {
  let accentColor = "--red";
  const router = useRouter();
  let { jobId } = router.query;

  // function getJobId() {
  //   let href = window.location.href;

  //   // These lines get the full path
  //   // let re = /https*:\/\/[^\/]*(\/.+)/;
  //   // return href.match(re)[1];

  //   // These get just the jobId
  //   let parts = href.split("/");
  //   return parts[parts.length - 1];
  // }

  // const [jobId, setJobId] = useState(null);

  // useEffect(() => {
  //     setJobId(window.location.href);
  // }, [])

  let jobCard = getJobCardById(jobId, jobCards);

  let regions = [
    <Header
      backgroundColor="--off-white"
      activeScribbleColor={accentColor}
      key="header"
    />,
    <PageSplash backgroundColor={accentColor} key="splash">
      <PageHeading>{jobCard.attributes.JobTitle}</PageHeading>
      <PageTableOfContents sections={jobCard.attributes.PageSections} />
    </PageSplash>,
    <PageIntroduction backgroundColor="--off-white" key="introduction">
      {jobCard.attributes.JobSubtitle}
    </PageIntroduction>,
    ...jobCard.attributes.PageSections.map((n, i) => {
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
      backgroundColor="--off-black"
      accentColor={accentColor}
      key="footer"
    />,
  ];
  return (
    <>
      <SEO meta={jobCard.attributes.Meta} />
      <PageContainer2>{regions}</PageContainer2>
    </>
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
