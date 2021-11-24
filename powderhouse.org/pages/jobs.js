import styled from 'styled-components';

import Header from '../components/Header'
import Footer from '../components/Footer'
import GridOverlay from '../components/GridOverlay'

import { baseGrid } from '../components/global.js'

function JobsPage() {
    return (
        <PageContainer css={baseGrid}>
		<Header />
		<PageSplash>
			<h1>Jobs</h1>
			<PageTableOfContents>
				<li>Open Positions</li>
				<li>Legal Researcher</li>
				<li>Financial Researcher</li>
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>
			<p>
				Come invent the future of learning and give youth a say.
			</p>
		</PageIntro>

		<PageSection css={baseGrid}>
			<LeftHeader>Open Positions</LeftHeader>
			<PageSectionContent>
				<p>
					We're always looking for great people.  If you care about our mission and want to learn more about how you could get involved, but none of our open roles speak to you, please get in touch [link TK].
				</p>
			</PageSectionContent>
		</PageSection>

		<PageSection css={baseGrid}>
			<LeftHeader>Financial Researcher</LeftHeader>
			<PageSectionContent>
				<p>
					Seeking a creative financial expert to chart a path to reinvention in public education, authoring a non-partisan catalog documenting, understanding, and developing novel options for financing secondary and postsecondary education, from first principles.
				</p>
				<a href=""><div>Apply</div></a>
			</PageSectionContent>
		</PageSection>

		<PageSection css={baseGrid}>
			<LeftHeader>Legal Researcher</LeftHeader>
			<PageSectionContent>
				<p>
					Seeking a creative legal expert to chart a path to reinvention in public education, authoring a non-partisan catalog documenting, understanding, and developing novel options for legal activism as a tool to dramatically expand the range, diversity, and equitable access of new secondary and postsecondary educational options for Americans.
				</p>
				<a href=""><div>Apply</div></a>
			</PageSectionContent>
		</PageSection>

		<Footer />
	</PageContainer>
    );
}

// This section is copied from /about. Do not change, should be pulled into components.

let PageContainer = styled.div ``;

let PageSplash = styled.div `
	grid-column: 1 / -1;
	min-height: 20rem;
	border: 1px dotted black;
`

let PageTableOfContents = styled.ol ``

let PageIntro = styled.div `
	grid-column: 1 / span 9;
	border: 1px dotted black;
	font-size: 2rem;
`

let LeftHeader = styled.div `
	grid-column: 1 / span 3;
	border: 1px dotted black;
`

let CenterHeader = styled.h2 ``

let PageSection = styled.section `
	grid-column: 1 / -1;
`

let DarkPageSection = styled(PageSection)
`
	color: white;
	background: black;
`

let PageSectionContent = styled.div `
	grid-column: 4 / 10;
`

/////////////////////////////

export default JobsPage;