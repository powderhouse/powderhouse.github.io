import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageContainer2 from "../../components/PageContainer2";
import Region2 from "../../components/Region2";
import ArrowButton from "../../components/ArrowButton";
import SEO from "../../components/SEO";
import {
  PageTableOfContents,
  PageSplash,
  PageIntroduction,
  PageSectionContent,
  PageHeading,
} from "../../components/Page.js";

import { getBgFromLight, Div } from "../../components/global.js";

import { fetchAPI } from "../../lib/api";

function ProgramsPage({ programsPage, programCards }) {
  function getProgramIdByTitle(title, programCards) {
    return programCards[title][0].attributes.ProgramId;
  }

  let accentColor = "--blue";

  let regions = [
    <Header
      backgroundColor="--off-white"
      key="header"
      activeScribbleColor={accentColor}
    />,
    <PageSplash backgroundColor={accentColor} key="splash">
      <PageHeading>Programs</PageHeading>
      <PageTableOfContents
        sections={programsPage.data.attributes.PageSection}
      />
    </PageSplash>,
    <PageIntroduction backgroundColor="--off-white" key="introduction">
      {programsPage.data.attributes.PageSplash.PageIntro}
    </PageIntroduction>,
    ...programsPage.data.attributes.PageSection.map((n, i) => {
      return (
        <Region2
          backgroundColor={getBgFromLight(n.isLightSection)}
          key={`section-${i}`}
          header={n.SectionHeader ? n.SectionHeader : null}
          left={n.isLeftHeader ? n.isLeftHeader : null}
        >
          <PageSectionContent $grid={true}>
            <div style={{ gridColumn: "1 / -1" }}>
              {/*TODO: Why is this wrapper div needed v. putting
              gridColumn inline with the Div?*/}
              <Div markdown>{n.PageSectionContent}</Div>
            </div>
            {programCards.hasOwnProperty(n.SectionHeader)}
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
      {/*TODO: Should destructure and reformat this to avoid data/attributes*/}
      {/*<SEO meta={programsPage.data.attributes.meta} />*/}
      <PageContainer2>{regions}</PageContainer2>
    </>
  );
}

function sortProgramCards(programCards) {
  let programDict = {};
  let uniquePrograms = [
    ...new Set(programCards.data.map((n) => n.attributes.ProgramTitle)),
  ];
  for (let i in uniquePrograms) {
    programDict[uniquePrograms[i]] = [];
  }
  for (let j of programCards.data) {
    programDict[j.attributes.ProgramTitle].push(j);
  }
  return programDict;
}

export async function getStaticProps() {
  let programsPage = await fetchAPI("/programs?populate=*");
  let programCards = await fetchAPI("/program-cards?populate=*");
  return {
    props: {
      programsPage: programsPage,
      programCards: programCards // sortJobCards(programCards),
    }, // will be passed to the page component as props
  };
}

export default ProgramsPage;
