import styled from 'styled-components';

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
        {JSON.stringify(jobPage)}
		<Header />
{/* 		<PageSplash bgColor='purple' color='off-black'> */}
{/* 			<PageHeader>Jobs</PageHeader> */}
{/* 			<PageTableOfContents> */}
{/* 				{jobPage.data.attributes.PageSections.map(n => <PageTOCListItem><PageTOCLink href={"#"+n.SectionHeader.replace(/\s+/g, '-').toLowerCase()}>{n.SectionHeader}</PageTOCLink></PageTOCListItem>)} */}
{/* 			</PageTableOfContents> */}
{/* 		</PageSplash> */}
{/* 		<PageIntro> */}
{/* 			<p> */}
{/* 				Come invent the future of learning and give youth a say. */}
{/* 			</p> */}
{/* 		</PageIntro> */}
{/*  */}
{/* 		<PageSection isLightSection={true} css={baseGrid}> */}
{/* 			<SectionHeader isLeftHeader={true}>Open Positions</SectionHeader> */}
{/* 			<PageSectionContent> */}
{/* 				<p> */}
{/* 					We&apos;re always looking for great people.  If you care about our mission and want to learn more about how you could get involved, but none of our open roles speak to you, please <a href="">get in touch</a>. */}
{/* 				</p> */}
{/* 			</PageSectionContent> */}
{/* 		</PageSection> */}
{/*  */}
{/* 		<PageSection isLightSection={true} css={baseGrid}> */}
{/* 			<JobCard css={baseGrid}> */}
{/* 				<SectionHeader isLeftHeader={true}>Financial Researcher</SectionHeader> */}
{/* 				<PageSectionContent> */}
{/* 					<p> */}
{/* 						Seeking a creative financial expert to chart a path to reinvention in public education, authoring a non-partisan catalog documenting, understanding, and developing novel options for financing secondary and postsecondary education, from first principles. */}
{/* 					</p> */}
{/* 					<a href=""><div>Apply</div></a> */}
{/* 				</PageSectionContent> */}
{/* 			</JobCard> */}
{/*  */}
{/* 			<JobCard css={baseGrid}> */}
{/* 				<SectionHeader isLeftHeader={true}>Legal Researcher</SectionHeader> */}
{/* 				<PageSectionContent> */}
{/* 					<p> */}
{/* 						Seeking a creative legal expert to chart a path to reinvention in public education, authoring a non-partisan catalog documenting, understanding, and developing novel options for legal activism as a tool to dramatically expand the range, diversity, and equitable access of new secondary and postsecondary educational options for Americans. */}
{/* 					</p> */}
{/* 					<a href=""><div>Apply</div></a> */}
{/* 				</PageSectionContent> */}
{/* 			</JobCard> */}
{/* 		</PageSection> */}

		<Footer />
	</PageContainer>
    );
}

let JobCard = styled.div`
	grid-column: 1 / -1;
`;

export async function getStaticProps(context) {
  let jobPage = await fetchAPI('/job?populate=*');
  let jobCards = await fetchAPI('/job-cards?populate=*');
  return {
    props: {
      jobPage:jobPage,
      jobCards:jobCards
    }  // will be passed to the page component as props
  }
}

export default JobsPage;