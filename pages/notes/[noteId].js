import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageContainer2 from "../../components/PageContainer2";
import Region2 from "../../components/Region2";
import PageImage from "../../components/PageImage";

import {
  PageTableOfContents,
  PageSplash,
  PageIntroduction,
  PageSectionContent,
  PageHeading,
} from "../../components/Page.js";

import {
  slugify,
  findLargestFormat,
  getLightFromBg,
} from "../../components/global";

import { fetchAPI } from "../../lib/api";
import { useRouter } from "next/router";

function NotePage(props) {
  const router = useRouter();
  let { noteId } = router.query;
  let { 
      PageSplash: { PageHeader, PageIntro },
      PageMixedContent,
      Meta,
  } = getNoteById(noteId, props.notes).attributes;
  let accentColor = "--red";
  let note = getNoteById(noteId, props.notes);

  let regions = [
    <Header
      backgroundColor="--off-white"
      key="header"
      activeScribbleColor={accentColor}
    />,
    <PageSplash backgroundColor={accentColor} key="splash">
      <PageHeading>{PageHeader}</PageHeading>
      <PageTableOfContents sections={PageMixedContent} />
    </PageSplash>,
    <PageIntroduction backgroundColor="--off-white" key="introduction">
      {PageIntro}
    </PageIntroduction>,
    ...PageMixedContent.map((e, i) =>
      e.PageImage ? (
        <Region2
          backgroundColor="--off-white"
          key={
            e.PageImage.data.attributes.caption
              ? slugify(e.PageImage.data.attributes.caption)
              : `image-${i}`
          }
        >
          <PageImage
            fullBleed={e.IsFullBleed}
            src={
              e.PageImage.data.attributes.formats == null
                ? url
                : e.PageImage.data.attributes.formats[
                    findLargestFormat(
                      e.PageImage.data.attributes.formats,
                      "large"
                    )
                  ].url
            }
            alt={e.PageImage.data.attributes.alternativeText}
            width={
              e.PageImage.data.attributes.formats == null
                        ? ""
                        : e.PageImage.data.attributes.formats[
                  findLargestFormat(
                    e.PageImage.data.attributes.formats,
                    "large"
                  )
                ].width
            }
            height={
              e.PageImage.data.attributes.formats == null
                        ? ""
                        : e.PageImage.data.attributes.formats[
                  findLargestFormat(
                    e.PageImage.data.attributes.formats,
                    "large"
                  )
                ].height
            }
            caption={e.PageImage.data.attributes.caption}
          />
        </Region2>
      ) : (
        <Region2
          backgroundColor={getLightFromBg(e.isLightSection)}
          key={
            e.SectionHeader
              ? slugify(e.SectionHeader)
              : `section-${i}`
          }
          header={e.SectionHeader ? e.SectionHeader : null}
          left={e.isLeftHeader ? e.isLeftHeader : null}
        >
          <PageSectionContent markdown>
            {e.PageSectionContent}
          </PageSectionContent>
        </Region2>
      )
    ),
    <Footer
      backgroundColor="--off-black"
      accentColor={accentColor}
      key="footer"
    />,
  ];
  return (
    <>
      <SEO meta={Meta} />
      <PageContainer2>{regions}</PageContainer2>
    </>
  );
}

// export async function getStaticProps() {
//   let notePageMeta = await fetchAPI("/notes?populate=*");
//   let PageMixedContent = await fetchAPI(
//     "/notes?populate[PageMixedContent][populate]=*"
//   );
//   return {
//     props: {
//       notePageMeta: notePageMeta.data.attributes,
//       PageMixedContent: PageMixedContent.data.attributes.PageMixedContent,
//     }, // will be passed to the page component as props
//   };
// }

// export default NotePage;


function getNoteById(noteId, notes) {
  for (let note in notes.data) {
    if (notes.data[note].attributes.NoteId == noteId) {
      return notes.data[note];
    }
  }
}

function assemblePaths(paths) {
  let pathsList = [];
  for (let p in paths) {
    pathsList.push({ params: { noteId: paths[p] } });
  }
  return pathsList;
}

export async function getStaticPaths() {
  let notes = await fetchAPI("/notes");
  let noteIds = notes.data.map((i) => i.attributes.NoteId);
  return {
    paths: assemblePaths(noteIds),
    fallback: false,
  };
}

export async function getStaticProps({ params: { noteId } }) {
  let notes = await fetchAPI(
    `/notes?[populate]=*`
  );

  return {
    props: {
      notes: notes,
    }, // will be passed to the page component as props
  };
}

export default NotePage;
