import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import GridOverlay from '../components/GridOverlay';

import { 
	gap,
	baseGrid,
	PageContainer,
	PageSplash,
	PageHeader,
	PageTableOfContents,
	PageIntro,
	LeftHeader,
	CenterHeader,
	PageSection,
	DarkPageSection,
	PageSectionContent,
	WidePageSectionContent,
	FullBleedImage, 
} from '../components/global.js';

function AboutPage() {
	return (
	<PageContainer css={baseGrid}>
		<Header />
		<PageSplash bgColor='yellow' color='off-black'>
			<PageHeader>News</PageHeader>
			<PageTableOfContents>
				<li>2020?</li>
				<li>2015?</li>
				<li>2010?</li>
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>
			Here are some select news stories, announcement, and other updates about our work!
		</PageIntro>

		<PageSection css={baseGrid}>
			<NewsCard css={baseGrid}>
				<NewsHeader>
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
				<NewsHeader>
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
				<NewsHeader>
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

let NewsHeader = styled(LeftHeader)``;

let NewsContent = styled(PageSectionContent)``;

let NewsDate = styled.h2``;

let NewsType = styled.h3``;

let NewsTitle = styled.h2``;

let NewsExcerpt = styled.p``;

let NewsRelatedLinks = styled.ul``;

export default AboutPage;