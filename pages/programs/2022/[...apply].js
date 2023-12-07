// import styled from "styled-components";
// // import SEO from "../../../components/SEO";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import Region2 from "../../../components/Region2";
// import PageContainer2 from "../../../components/PageContainer2";
// import ArrowButton from "../../../components/ArrowButton";

// import {
//   PageTableOfContents,
//   PageSplash,
//   PageIntroduction,
//   PageSectionContent,
//   PageHeading,
// } from "../../../components/Page.js";

// import { fetchAPI } from "../../../lib/api";

// function ProgramApplicationPage({ programTitle, programApplication }) {
//   let accentColor = "--purple";
//   // let programCard = props.programCard.data[0].attributes;

//   let regions = [
//     <Header
//       backgroundColor="--off-white"
//       activeScribbleColor={accentColor}
//       key="header"
//     />,
//     <PageSplash backgroundColor={accentColor} key="splash">
//       <PageHeading>{programTitle}</PageHeading>
//       <PageTableOfContents sections={programApplication.PageSections} />
//     </PageSplash>,
//     <PageIntroduction backgroundColor="--off-white" key="introduction" markdown>
//       {programApplication.ApplicationIntro}
//     </PageIntroduction>,
//     ...programApplication.PageSections.map((n, i) => {
//       return (
//         <Region2
//           backgroundColor="--off-white"
//           key={`program-${i}`}
//           header={n.SectionHeader ? n.SectionHeader : null}
//           left={n.isLeftHeader ? n.isLeftHeader : null}
//         >
//           <PageSectionContent markdown>
//             {n.PageSectionContent}
//           </PageSectionContent>
//           {n.SectionHeader == "Apply" ? (
//             <PageSectionContent>
//               <ApplyForm>
//                 {programApplication.ApplicationQuestions.map((e) => (
//                   <>
//                     <ApplyPrompt>{e.Prompt}</ApplyPrompt>
//                     {e.PromptDescription ? (
//                       <ApplyDescription>{e.PromptDescription}</ApplyDescription>
//                     ) : (
//                       ""
//                     )}
//                     {e.isLongAnswer ? (
//                       <ApplyLongInput type="text" />
//                     ) : (
//                       <ApplyInput type="text" />
//                     )}
//                   </>
//                 ))}
//                 <ApplyButton
//                   buttonWidth="long"
//                   buttonThickness="thick"
//                   buttonTextLength="shortText"
//                   color="--off-black"
//                   text="Apply"
//                   className="arrowButton"
//                   // width="100%"
//                   preserveAspectRatio="none"
//                   link="#tk" // TODO: Is this in fact what we want here?
//                 />
//               </ApplyForm>
//             </PageSectionContent>
//           ) : (
//             ""
//           )}
//         </Region2>
//       );
//     }),
//     <Footer
//       backgroundColor="--off-black"
//       accentColor={accentColor}
//       key="footer"
//     />,
//   ];
//   return (
//     <>
//       {/*<SEO meta={programApplication.Meta} />*/}
//       <PageContainer2>{regions}</PageContainer2>
//     </>
//   );
// }

// let ApplyForm = styled.form`
//   padding-top: calc(var(--vertical-rhythm) / 2);
//   & * {
//     display: block;
//   }
//   & textarea,
//   input {
//     width: 100%;
//     max-width: 100%;
//     margin-top: calc(var(--vertical-rhythm) / 4);
//     margin-bottom: var(--vertical-rhythm);
//     border-radius: 0;
//     background: rgba(255, 255, 255, 0.5);
//     border-style: solid;
//     border-width: 1px;
//     padding: calc(var(--base-line-height) / 2);

//     &::placeholder {
//       opacity: 0.6;
//       color: var(--off-black);
//     }
//   }
// `;
// let ApplyPrompt = styled.label``;
// let ApplyDescription = styled.small``;
// let ApplyInput = styled.input`
//   height: calc(1.5 * var(--vertical-rhythm));
// `;
// let ApplyLongInput = styled.textarea`
//   height: calc(5 * var(--vertical-rhythm));
// `;
// let ApplyButton = styled(ArrowButton)`
//   grid-column: 1 / span 3;

//   position: relative;
//   margin: 0;
//   padding: 0;
//   background: none;
//   border: none;
//   cursor: pointer;

//   & .buttonText {
//     transform: translateY(
//       -160%
//     ); // TK I don't know why this text isn't in the right place without this text...
//   }
// `;

// export async function getStaticPaths() {
//   let programCards = await fetchAPI("/program-cards");
//   let programIds = programCards.data.map(
//     (i) => i.attributes.ProgramId.split("-")[0]
//   );
//   let pathParams = [];
//   for (let i in programIds) {
//     pathParams.push({ params: { apply: [programIds[i], "apply"] } });
//   }

//   return {
//     paths: pathParams,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   let programId = context.params.apply[0];
//   let programCard = await fetchAPI(
//     `/program-cards?filters[ProgramId][$eq]=${programId}-2022&populate[ProgramApplication][populate]=*`
//   );
//   return {
//     props: {
//       programTitle: programCard.data[0].attributes.ProgramTitle,
//       programApplication: programCard.data[0].attributes.ProgramApplication,
//     }, // will be passed to the page component as props
//   };
// }

// export default ProgramApplicationPage;
