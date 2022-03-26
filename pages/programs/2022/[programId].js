import styled from "styled-components";
import SEO from "../../../components/SEO";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Region2 from "../../../components/Region2";
import PageContainer2 from "../../../components/PageContainer2";
import ArrowButton from "../../../components/ArrowButton";

import {
  PageTableOfContents,
  PageSplash,
  PageIntroduction,
  PageSectionContent,
  PageHeading,
} from "../../../components/Page.js";
import { Div } from "../../../components/global";

import { fetchAPI } from "../../../lib/api";
import { useRouter } from "next/router";

function ProgramDetailPage({ programCards, faqs }) {
  let accentColor = "--red";
  const router = useRouter();
  let { programId } = router.query;
  programId += "-2022";
  let programCard = getProgramCardById(programId, programCards);
  let programFAQs = sortFAQsByProgram(programId, faqs);

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
            { n.SectionHeader == "Apply" 
              ? <>
                <Div markdown>{n.PageSectionContent}</Div>
                <ArrowButton
                    text="Apply"
                    link={"/programs/" + programCard.attributes.ProgramId + "/apply"}
                    buttonWidth="long"
                    buttonThickness="thick"
                    buttonTextLength="longText"
                    style={{ gridColumn: "1 / span 3" }}
                    // width="262.5%" // TODO: Fix this hack
                  ></ArrowButton>
                </>
              : n.SectionHeader == "FAQ" 
                ? <>
                    <Div markdown>{programCard.attributes.FAQIntro}</Div>
                    {
                      programFAQs.map(faq => 
                        <details id={faq.Slug} className="faq">
                          <summary>{faq.Question}</summary>
                          <Div markdown>{faq.Answer}</Div>
                        </details>
                      )
                    } 
                  </>
                : <Div markdown>{n.PageSectionContent}</Div>
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

function sortFAQsByProgram(programId, faqs) {
  let relevantFAQs = [];
  for (let i in faqs.data) {
    let faq = faqs.data[i];
    for (let j in faq.attributes.Answer) {
      let whichPrograms = faq.attributes.Answer[j].AnswerForWhichPrograms;
      for (let k in whichPrograms) {
        let thisQuestionsProgram = whichPrograms[k].ProgramType.toLowerCase();
        let currentProgram = programId.split("-").join("").toLowerCase();
        if (thisQuestionsProgram == currentProgram) {            
          relevantFAQs.push({
            Question:faq.attributes.Question, 
            Answer:faq.attributes.Answer[j].Answer, 
            Slug: faq.attributes.Question.toLowerCase().replace(/[^a-z ]/g, "").split(" ").join("-")});
        }
      }   
    }
  }
  return relevantFAQs;
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
  let programIds = programCards.data.map((i) => i.attributes.ProgramId.split("-")[0]);

  return {
    paths: assemblePaths(programIds),
    fallback: false,
  };
}

export async function getStaticProps({ params: { programId } }) {
  let programCards = await fetchAPI(
    `/program-cards?filters[ProgramId][$eq]=${programId}-2022&pagination[limit]=1&populate=*`
  );
  let faqs = await fetchAPI(
    `/program-faqs?populate[Answer][populate][0]=AnswerForWhichPrograms`
  );

  return {
    props: {
      programCards: programCards,
      faqs: faqs,
    }, // will be passed to the page component as props
  };
}

export default ProgramDetailPage;
