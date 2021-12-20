import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GridOverlay from '../../components/GridOverlay';

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
} from '../../components/global.js';

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

function JobsPage({jobPage,jobCards}) {
    return (
        <PageContainer css={baseGrid}>
		<Header />

		<PageSplash bgColor='purple' color='off-black'>
			<PageHeader>Jobs</PageHeader>
			<PageTableOfContents>
				{jobPage.data.attributes.PageSections.map(n => <PageTOCListItem><PageTOCLink href={"#"+n.SectionHeader.replace(/\s+/g, '-').toLowerCase()}>{n.SectionHeader}</PageTOCLink></PageTOCListItem>)}
			</PageTableOfContents>
		</PageSplash>
		<PageIntro>
			{jobPage.data.attributes.PageSplash.PageIntro}
		</PageIntro>

		{jobPage.data.attributes.PageSections.map(n =>

			jobList.includes(n.SectionHeader) && jobCards.hasOwnProperty(n.SectionHeader) ?

				(<PageSection isLightSection={true} css={baseGrid}>
					<SectionHeader id={n.SectionHeader.replace(/\s+/g, '-').toLowerCase()} isLeftHeader={true}>{n.SectionHeader}</SectionHeader>
					<PageSectionContent>
						{n.PageSectionContent}
						<a href={jobCards[n.SectionHeader][0].attributes["Link"]}>Apply</a>
					</PageSectionContent>
				</PageSection>) : 

				(<PageSection isLightSection={true} css={baseGrid}>
					<SectionHeader id={n.SectionHeader.replace(/\s+/g, '-').toLowerCase()} isLeftHeader={true}>{n.SectionHeader}</SectionHeader>
					<PageSectionContent>
		        		<ReactMarkdown rehypePlugins={[rehypeRaw]}>
							{n.PageSectionContent}
						</ReactMarkdown>
					</PageSectionContent>
				</PageSection>)

		)}

		<Footer />
	</PageContainer>
    );
}

let JobCard = styled.div`
	grid-column: 1 / -1;
`;

let jobList = ["Legal Researcher","Financial Researcher"]

function sortJobCards(jobCards) {
	let jobDict = {};
	let uniqueJobs = [...new Set(jobCards.data.map(n => n.attributes.JobTitle))];
	for (let i in uniqueJobs) { jobDict[uniqueJobs[i]] = [] };
	for (let j of jobCards.data) {
		jobDict[j.attributes.JobTitle].push(j);
	}
	return jobDict
}

export async function getStaticProps(context) {
  let jobPage = await fetchAPI('/jobs?populate=*');
  let jobCards = await fetchAPI('/job-cards?populate=*');
  return {
    props: {
      jobPage:jobPage,
      jobCards:sortJobCards(jobCards)
    }  // will be passed to the page component as props
  }
}

export default JobsPage;