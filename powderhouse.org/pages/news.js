import styled from 'styled-components';

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
	WidePageSectionContent,
	FullBleedImage, 
} from '../components/global.js';

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

function NewsPage({data}) {
	return (
	<PageContainer css={baseGrid}>
		<Header />
		<PageSplash bgColor='yellow' color='off-black'>
			<PageHeader>News</PageHeader>
			<PageTableOfContents>
				<PageTOCListItem>
					<PageTOCLink href='#'>2020</PageTOCLink>
				</PageTOCListItem>
				<PageTOCListItem>
					<PageTOCLink href='#'>2015</PageTOCLink>
				</PageTOCListItem>
				<PageTOCListItem>
					<PageTOCLink href='#'>2010</PageTOCLink>
				</PageTOCListItem>
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>
			
		</PageIntro>

		{/* { */}
		{/* 	data.attributes.PageSection.map( */}
		{/* 		n => (	<PageSection key={n.id} css={baseGrid} isLightSection={n.isLightSection}> */}
		{/* 					<SectionHeader isLeftHeader={n.isLeftHeader}> */}
		{/* 						{n.SectionHeader} */}
		{/* 					</SectionHeader> */}
		{/* 					<PageSectionContent> */}
	 {/*        					<ReactMarkdown rehypePlugins={[rehypeRaw]}> */}
		{/* 							{n.PageSectionContent} */}
		{/* 						</ReactMarkdown> */}
		{/* 					</PageSectionContent> */}
		{/* 				</PageSection> */}
		{/* 			) */}
		{/* 		) */}
		{/* } */}

		<PageSection isLightSection={true} css={baseGrid}>
			<NewsCard css={baseGrid}>
				<NewsHeader isLeftHeader={true}>
					<NewsDate>October 25, 2021</NewsDate>
					<NewsType>Announcement</NewsType>
				</NewsHeader>
				<NewsContent>
					<NewsTitle>Launching the Kindling Fellowship</NewsTitle>
					<NewsExcerpt></NewsExcerpt>
					<NewsRelatedLinks>
						<li>Read More</li>
					</NewsRelatedLinks>
				</NewsContent>
			</NewsCard>
			<NewsCard css={baseGrid}>
				<NewsHeader isLeftHeader={true}>
					<NewsDate>October 25, 2021</NewsDate>
					<NewsType>Announcement</NewsType>
				</NewsHeader>
				<NewsContent>
					<NewsTitle>Launching the Kindling Fellowship</NewsTitle>
					<NewsExcerpt></NewsExcerpt>
					<NewsRelatedLinks>
						<li>Read More</li>
					</NewsRelatedLinks>
				</NewsContent>
			</NewsCard>
			<NewsCard css={baseGrid}>
				<NewsHeader isLeftHeader={true}>
					<NewsDate>October 25, 2021</NewsDate>
					<NewsType>Announcement</NewsType>
				</NewsHeader>
				<NewsContent>
					<NewsTitle>Launching the Kindling Fellowship</NewsTitle>
					<NewsExcerpt></NewsExcerpt>
					<NewsRelatedLinks>
						<li>Read More</li>
					</NewsRelatedLinks>
				</NewsContent>
			</NewsCard>
		</PageSection>

		<Footer />
	</PageContainer>
  );
}

let NewsCard = styled.div`
	grid-column:1 / -1;
`;

let NewsHeader = styled(SectionHeader)``;

let NewsContent = styled(PageSectionContent)``;

let NewsDate = styled.h3``;

let NewsType = styled.p``;

let NewsTitle = styled.h2`
	font-size:31px; /*TK Explicit?*/
`;

let NewsExcerpt = styled.p``;

let NewsRelatedLinks = styled.ul``;

export async function getStaticProps(context) {
  return {
    props: await fetchAPI('/news?populate=*') // will be passed to the page component as props
  }
}

export default NewsPage;