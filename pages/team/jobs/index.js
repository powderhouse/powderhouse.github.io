import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ArrowButton from "../../../components/ArrowButton";
import { asteriskImgURL } from '../../../site-data.js';

import {
	baseGrid,
	PageContainer,
	Spacer,
	PageSplash,
	PageHeader,
	PageTableOfContents,
	PageTOCListItem,
	PageTOCLink,
  	Asterisk,
	PageIntro,
	SectionHeader,
	PageSection,
	PageSectionContent,
	WidePageSectionContent,
	FullBleedImage,
	randomRotate,
} from "../../../components/global.js";

import { getStrapiMedia } from "../../../lib/media";
import { fetchAPI } from "../../../lib/api";

function JobsPage({ jobPage, jobCards }) {
	function getJobIdByTitle(title, jobCards) {
		return jobCards[title][0].attributes.JobId;
	}

	return (
		<PageContainer css={baseGrid}>
			<Header />
			<PageSplash bgColor="purple" color="off-black">
				<PageHeader>Jobs</PageHeader>
				<PageTableOfContents>
					{jobPage.data.attributes.PageSections.map((n) => (
						<PageTOCListItem key={n.id}>
							<PageTOCLink
								href={"#" + n.SectionHeader.replace(/\s+/g, "-").toLowerCase()}
							>
								<Asterisk style={{transform:randomRotate()}}><img className="asterisk" src={asteriskImgURL} /></Asterisk>
								<div>{n.SectionHeader}</div>
							</PageTOCLink>
							<Spacer />
						</PageTOCListItem>
					))}
				</PageTableOfContents>
			</PageSplash>
			<PageIntro>
				{jobPage.data.attributes.PageSplash.PageIntro}
			</PageIntro>

			{jobPage.data.attributes.PageSections.map((n) =>
				jobCards.hasOwnProperty(n.SectionHeader) ? (
					<PageSection
						key={n.id}
						isLightSection={true}
						css={baseGrid}
					>
						<SectionHeader
							id={n.SectionHeader.replace(
								/\s+/g,
								"-"
							).toLowerCase()}
							isLeftHeader={true}
						>
							{n.SectionHeader}
						</SectionHeader>
						<PageSectionContent>
							{n.PageSectionContent}
							{/* TK buttonTextLength should alternate/choose randomly from shortText, medText, and longText */}
							<ArrowButton text="Apply" link={"/team/jobs/" + getJobIdByTitle(n.SectionHeader,jobCards)} buttonWidth="long" buttonThickness="thick" buttonTextLength="medText"></ArrowButton>
						</PageSectionContent>
					</PageSection>
				) : (
					<PageSection isLightSection={true} css={baseGrid}>
						<SectionHeader
							key={n.id}
							id={n.SectionHeader.replace(
								/\s+/g,
								"-"
							).toLowerCase()}
							isLeftHeader={true}
						>
							{n.SectionHeader}
						</SectionHeader>
						<PageSectionContent>
							<ReactMarkdown rehypePlugins={[rehypeRaw]}>
								{n.PageSectionContent}
							</ReactMarkdown>
						</PageSectionContent>
					</PageSection>
				)
			)}

			<Footer />
		</PageContainer>
	);
}

let JobCard = styled.div`
	grid-column: 1 / -1;
`;

function sortJobCards(jobCards) {
	let jobDict = {};
	let uniqueJobs = [
		...new Set(jobCards.data.map((n) => n.attributes.JobTitle)),
	];
	for (let i in uniqueJobs) {
		jobDict[uniqueJobs[i]] = [];
	}
	for (let j of jobCards.data) {
		jobDict[j.attributes.JobTitle].push(j);
	}
	return jobDict;
}

export async function getStaticProps(context) {
	let jobPage = await fetchAPI("/jobs?populate=*");
	let jobCards = await fetchAPI("/job-cards?populate=*");
	return {
		props: {
			jobPage: jobPage,
			jobCards: sortJobCards(jobCards),
		}, // will be passed to the page component as props
	};
}

export default JobsPage;
