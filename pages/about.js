import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GridOverlay from '../components/GridOverlay';

import {
	baseGrid,
	PageContainer,
	PageSplash,
	PageHeader,
	PageTableOfContents,
	PageTOCListItem,
	PageTOCLink,
	PageIntro,
	SectionHeader,
	PageSection,
	PageSectionContent,
	FullBleedImage,
	FullBodyImage,
} from '../components/global';

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

function AboutPage({data}) {
	return (
	<PageContainer css={baseGrid}>
		<Header />
		<PageSplash bgColor='yellow' color='off-black'>
			<PageHeader>
				{data.attributes.PageSplash.PageHeader}
			</PageHeader>
			<PageTableOfContents>
				{data.attributes.PageSections.map(n => <PageTOCListItem><PageTOCLink href={"#"+n.SectionHeader.replace(/\s+/g, '-').toLowerCase()}>{n.SectionHeader}</PageTOCLink></PageTOCListItem>)}
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>
			{data.attributes.PageSplash.PageIntro}
		</PageIntro>

		{
			data.attributes.PageSections.map(
				n => (	<PageSection id={n.SectionHeader.replace(/\s+/g, '-').toLowerCase()} css={baseGrid} isLightSection={n.isLightSection}>
							<SectionHeader isLeftHeader={n.isLeftHeader}>
								{n.SectionHeader}
							</SectionHeader>
							<PageSectionContent>
	        			<ReactMarkdown rehypePlugins={[rehypeRaw]}>
									{n.PageSectionContent}
								</ReactMarkdown>
							</PageSectionContent>
						</PageSection>
					)
				)
		}

		<Footer />
	</PageContainer>
  );
}

export async function getStaticProps(context) {
  return {
    props: await fetchAPI('/about?populate=*') // will be passed to the page component as props
  }
}

export default AboutPage;