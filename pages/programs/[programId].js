// import { useEffect, useState } from "react";
import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Region2 from "../../components/Region2";
import PageContainer2 from "../../components/PageContainer2";
import ArrowButton from "../../components/ArrowButton";

import {
  PageTableOfContents,
  PageSplash,
  PageIntroduction,
  PageSectionContent,
  PageHeading,
} from "../../components/Page.js";
import { Div } from "../../components/global";

import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router";

function ProgramDetailPage({ programCards }) {
  let accentColor = "--red";
  const router = useRouter();
  let { programId } = router.query;

  let programCard = getProgramCardById(programId, programCards);
  console.log(programCard.attributes.Meta)

  let regions = [
    <Header
      backgroundColor="--off-white"
      activeScribbleColor={accentColor}
      key="header"
    />,
    <PageSplash backgroundColor={accentColor} key="splash">
      <PageHeading>{programCard.attributes.ProgramTitle}</PageHeading>
      <PageTableOfContents sections={programCard.attributes.PageSections} />
    </PageSplash>,
    <PageIntroduction backgroundColor="--off-white" key="introduction">
      {programCard.attributes.ProgramOverview.OverviewIntro}
    </PageIntroduction>,
    ...programCard.attributes.PageSections.map((n, i) => {
      return (
        <Region2
          backgroundColor="--off-white"
          key={`program-${i}`}
          header={n.SectionHeader ? n.SectionHeader : null}
          left={n.isLeftHeader ? n.isLeftHeader : null}
        >
          <PageSectionContent>
            <Div markdown>{n.PageSectionContent}</Div>
            { n.SectionHeader == "Apply" 
              ? <ArrowButton
                    text="Apply"
                    link={"/programs/" + programCard.attributes.ProgramId + "/apply"}
                    buttonWidth="long"
                    buttonThickness="thick"
                    buttonTextLength="longText"
                    style={{ gridColumn: "1 / span 3" }}
                    // width="262.5%" // TODO: Fix this hack
                  ></ArrowButton>
              : ""
            }
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
      <SEO meta={programCard.attributes.Meta} />
      <PageContainer2>{regions}</PageContainer2>
    </>
  );
}

function getProgramCardById(programId, programCards) {
  for (let card in programCards.data) {
    if (programCards.data[card].attributes.ProgramId == programId) {
      return programCards.data[card];
    }
  }
}

function assemblePaths(paths) {
  let pathsList = [];
  for (let p in paths) {
    pathsList.push({ params: { programId: paths[p] } });
  }
  return pathsList;
}

export async function getStaticPaths() {
  let programCards = await fetchAPI("/program-cards");
  let programIds = programCards.data.map((i) => i.attributes.ProgramId);

  return {
    paths: assemblePaths(programIds),
    fallback: false,
  };
}

export async function getStaticProps({ params: { programId } }) {
  let programCards = await fetchAPI(
    `/program-cards?filters[ProgramId][$eq]=${programId}&pagination[limit]=1&populate=*`
  );
  return {
    props: {
      programCards: programCards,
    }, // will be passed to the page component as props
  };
}

export default ProgramDetailPage;
