import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageContainer2 from "../../components/PageContainer2";
import Region2 from "../../components/Region2";
// import ArrowButton from "../../components/ArrowButton";
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
        sections={programsPage.data.attributes.PageSections}
      />
    </PageSplash>,
    <PageIntroduction backgroundColor="--off-white" key="introduction" markdown>
      {programsPage.data.attributes.PageSplash.PageIntro}
    </PageIntroduction>,
    ...programsPage.data.attributes.PageSections.map((n, i) => {
      let program = programCards[n.SectionHeader];
      return (
        <Region2
          backgroundColor={getBgFromLight(n.isLightSection)}
          key={`section-${i}`}
          header={n.SectionHeader ? n.SectionHeader : null}
          left={n.isLeftHeader ? n.isLeftHeader : null}
        >
          <PageSectionContent $grid={true}>
            {programCards.hasOwnProperty(n.SectionHeader) ? (
              <div style={{ gridColumn: "1 / -1" }}>
                <Div markdown>{program[0].ProgramOverview.OverviewIntro}</Div>
                <dl>
                  <dt>What?</dt>
                  <dd>{program[0].ProgramOverview.OverviewWhat}</dd>
                  <dt>How?</dt>
                  <dd>{program[0].ProgramOverview.OverviewHow}</dd>
                  <dt>How Much?</dt>
                  <dd>{program[0].ProgramOverview.OverviewHowMuch}</dd>
                  <dt>Who?</dt>
                  <dd>{program[0].ProgramOverview.OverviewWho}</dd>
                  <dt>When?</dt>
                  <dd>{program[0].ProgramOverview.OverviewWhen}</dd>
                  <dt>Where?</dt>
                  <dd>{program[0].ProgramOverview.OverviewWhere}</dd>
                </dl>
                <OverviewNavList>
                  {program[0].ProgramOverview.OverviewNav.map((l, i) => (
                    <OverviewNavLi key={i}>
                      {
                        l.LinkText=="Apply"
                          ? <a href={program[0].ProgramApplicationLink}>{l.LinkText}</a>
                          : <a href={l.Link}>{l.LinkText}</a>
                      }
                    </OverviewNavLi>
                  ))}
                </OverviewNavList>
              </div>
            ) : (
              <div style={{ gridColumn: "1 / -1" }}>
                {/*TODO: Why is this wrapper div needed v. putting
                gridColumn inline with the Div?*/}
                <Div markdown>{n.PageSectionContent}</Div>
              </div>
            )}
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
      <SEO meta={programsPage.data.attributes.Meta} />
      <PageContainer2>{regions}</PageContainer2>
    </>
  );
}

let OverviewNavList = styled.ul`
  grid-column: 1 / -1;
  padding-left: 0 !important;
`;

let OverviewNavLi = styled.li`
  display: inline;
  padding-right: var(--gap);
`;

function sortProgramCards(programCards) {
  let programDict = {};
  let uniquePrograms = [
    ...new Set(programCards.data.map((n) => n.attributes.ProgramTitle)),
  ];
  for (let i in uniquePrograms) {
    programDict[uniquePrograms[i]] = [];
  }
  for (let j of programCards.data) {
    programDict[j.attributes.ProgramTitle].push({
      ProgramOverview: j.attributes.ProgramOverview,
      ProgramId: j.attributes.ProgramId,
      ProgramApplicationLink: j.attributes.ProgramApplicationLink,
    })
  }
  return programDict;
}

export async function getStaticProps() {
  let programsPage = await fetchAPI("/programs?populate=*");
  let programCards = await fetchAPI(
    "/program-cards?populate[ProgramOverview][populate][0]=OverviewNav"
  );
  return {
    props: {
      programsPage: programsPage,
      programCards: sortProgramCards(programCards), // sortJobCards(programCards),
    }, // will be passed to the page component as props
  };
}

export default ProgramsPage;
