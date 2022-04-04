// import styled from "styled-components";

// import SEO from "../components/SEO";
import { fetchAPI } from "../lib/api";
// import { mediaQueries } from "../site-data";

import Header from "../components/Header";
import Footer from "../components/Footer";
// import NewsLetterSignUp from "../components/NewsLetterSignUp";
import PageContainer2 from "../components/PageContainer2";
import Region2 from "../components/Region2";
import PageImage from "../components/PageImage";

import {
  // Div,
  slugify,
  findLargestFormat,
  getBgFromLight,
} from "../components/global";

import {
  PageTableOfContents,
  PageSplash,
  PageIntroduction,
  PageSectionContent,
  PageHeading,
} from "../components/Page.js";

function WherePage({
  wherePageMeta: {
    PageSplash: { PageHeader, PageIntro },
    // Meta,
  },
  wherePageContent,
}) {
  let accentColor = "--yellow";

  let regions = [
    <Header
      backgroundColor="--off-white"
      key="header"
      activeScribbleColor={accentColor}
    />,
    <PageSplash backgroundColor={accentColor} key="splash">
      <PageHeading>{PageHeader}</PageHeading>
      <PageTableOfContents sections={wherePageContent} />
    </PageSplash>,
    <PageIntroduction backgroundColor="--off-white" key="introduction" markdown>
      {PageIntro}
    </PageIntroduction>,
    ...wherePageContent.map((e, i) =>
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
              e.PageImage.data.attributes.formats[
                findLargestFormat(e.PageImage.data.attributes.formats, "large")
              ].width
            }
            height={
              e.PageImage.data.attributes.formats[
                findLargestFormat(e.PageImage.data.attributes.formats, "large")
              ].height
            }
            caption={e.PageImage.data.attributes.caption}
          />
        </Region2>
      ) : (
        <Region2
          backgroundColor={getBgFromLight(e.isLightSection)}
          key={e.SectionHeader ? slugify(e.SectionHeader) : `section-${i}`}
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
      {/*<SEO meta={Meta} />*/}
      <PageContainer2>{regions}</PageContainer2>
    </>
  );
}

// export async function getStaticProps() {
//   return {
//     props: await fetchAPI("/where?populate=*&[PageSections][populate]=PageImage"),
//   };
// }

export async function getStaticProps() {
  let wherePageMeta = await fetchAPI("/where?populate=*");
  let wherePageContent = await fetchAPI(
    "/where?populate[PageMixedContent][populate]=*"
  );

  return {
    props: {
      wherePageMeta: wherePageMeta.data.attributes,
      wherePageContent: wherePageContent.data.attributes.PageMixedContent,
    }, // will be passed to the page component as props
  };
}

export default WherePage;
