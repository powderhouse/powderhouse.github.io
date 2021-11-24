import styled from 'styled-components';

import Header from '../components/Header'
import Footer from '../components/Footer'
import GridOverlay from '../components/GridOverlay'

import { baseGrid } from '../components/global.js'

function AboutPage() {
	return (
	<PageContainer css={baseGrid}>
		<Header />
		<PageSplash>
			<h1>News</h1>
			<PageTableOfContents>
				<li>2020?</li>
				<li>2015?</li>
				<li>2010?</li>
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>

		</PageIntro>

		<PageSection css={baseGrid}>
			<LeftHeader>
				<NewsDate>October 25, 2021</NewsDate>
				<NewsType>Announcement</NewsType>
			</LeftHeader>
			<PageSectionContent>
				<NewsTitle>Launching the Kindling Fellowship</NewsTitle>
				<NewsExcerpt></NewsExcerpt>
				<NewsRelatedLinks>
					<li>Read More</li>
				</NewsRelatedLinks>
			</PageSectionContent>
		</PageSection>

		<PageSection css={baseGrid}>
			<LeftHeader>
				<NewsDate>August 12, 2018</NewsDate>
				<NewsType>Annoucement</NewsType>
			</LeftHeader>
			<PageSectionContent>
				<NewsTitle>Updated Logo and Website</NewsTitle>
				<NewsExcerpt>We're excited to announce our new logo and website designed by Partner & Partners.</NewsExcerpt>
				<NewsRelatedLinks>
					<li>Read More</li>
				</NewsRelatedLinks>
			</PageSectionContent>
		</PageSection>

		<PageSection css={baseGrid}>
			<LeftHeader>
				<NewsDate>March 1, 2012</NewsDate>
				<NewsType>Publication</NewsType>
			</LeftHeader>
			<PageSectionContent>
				<NewsTitle>The Dignity of Labor</NewsTitle>
				<NewsExcerpt>Release of a new investigation about the value of labor and learning.</NewsExcerpt>
				<NewsRelatedLinks></NewsRelatedLinks>
			</PageSectionContent>
		</PageSection>

		<Footer />
	</PageContainer>
  );
}

// This section is copied from /about. Do not change, should be pulled into components.

let PageContainer = styled.div``;

let PageSplash = styled.div`
	grid-column: 1 / -1;
	min-height: 20rem;
	border: 1px dotted black;
`

let PageTableOfContents = styled.ol``

let PageIntro = styled.div`
	grid-column: 1 / span 9;
	border: 1px dotted black;
	font-size: 2rem;
`

let LeftHeader = styled.div`
	grid-column: 1 / span 3;
	border: 1px dotted black;
`;

let CenterHeader = styled.h2`

`;

let PageSection = styled.section`
	grid-column: 1 / -1;
`

let DarkPageSection = styled(PageSection)`
	color: white;
	background: black;
`

let PageSectionContent = styled.div`
	grid-column: 4 / 10;
`

let FullBleedImage = styled.img`` // TK

/////////////////////////////

// This is new component design/structure.

let NewsDate = styled.h2``

let NewsType = styled.h3``

let NewsTitle = styled.h2``

let NewsExcerpt = styled.p``

let NewsRelatedLinks = styled.ul``

export default AboutPage;