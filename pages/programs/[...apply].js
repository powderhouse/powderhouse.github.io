import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Region2 from "../../components/Region2";
import PageContainer2 from "../../components/PageContainer2";

import {
  PageTableOfContents,
  PageSplash,
  PageIntroduction,
  PageSectionContent,
  PageHeading,
} from "../../components/Page.js";

import { fetchAPI } from "../../lib/api";

function ProgramApplicationPage(props) {
  let accentColor = "--purple";
  let programCard = props.programCard.data[0].attributes;

  let regions = [
    <Header
      backgroundColor="--off-white"
      activeScribbleColor={accentColor}
      key="header"
    />,
    <PageSplash backgroundColor={accentColor} key="splash">
      <PageHeading>{programCard.ProgramTitle}</PageHeading>
      <PageTableOfContents sections={programCard.PageSections} />
    </PageSplash>,
    <PageIntroduction backgroundColor="--off-white" key="introduction">
      {programCard.ProgramOverview.OverviewIntro}
    </PageIntroduction>,
    ...programCard.PageSections.map((n, i) => {
      return (
        <Region2
          backgroundColor="--off-white"
          key={`program-${i}`}
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
      <SEO meta={programCard.Meta} />
      <PageContainer2>{regions}</PageContainer2>
    </>
  );
}

export async function getStaticPaths() {
  let programCards = await fetchAPI("/program-cards");
  let programIds = programCards.data.map((i) => i.attributes.ProgramId);
  let pathParams = [];
  for (let i in programIds) {
    pathParams.push({ params: {apply: [ programIds[i], "apply"] } } );
  }

  return {
    paths: pathParams,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let programId = context.params.apply[0];
  let programCard = await fetchAPI(
    `/program-cards?filters[ProgramId][$eq]=${programId}&pagination[limit]=1&populate=*`
  );
  return {
    props: {
      programCard: programCard,
    }, // will be passed to the page component as props
  };
}

export default ProgramApplicationPage;