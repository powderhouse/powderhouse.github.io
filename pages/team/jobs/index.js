import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageContainer2 from "../../../components/PageContainer2";
import Region2 from "../../../components/Region2";
import PageTableOfContents from "../../../components/PageTableOfContents";
import ArrowButton from "../../../components/ArrowButton";
import Head from "next/head";

import {
	baseGrid,
	Spacer,
	PageSplash,
	PageHeading,
	Asterisk,
	PageIntroduction,
	SectionHeader,
	PageSection,
	PageSectionContent,
	WidePageSectionContent,
	FullBleedImage,
	randomRotate,
	getBgFromLight,
	Div,
	slugify,
} from "../../../components/global.js";

import { getStrapiMedia } from "../../../lib/media";
import { fetchAPI } from "../../../lib/api";

function JobsPage({ jobPage, jobCards }) {
	function getJobIdByTitle(title, jobCards) {
		return jobCards[title][0].attributes.JobId;
	}

	let accentColor = "--purple";

	let regions = [
		<Header backgroundColor="--off-white" key="header" activeScribbleColor={accentColor} />,
		<PageSplash backgroundColor={accentColor} key="splash">
			<PageHeading>Jobs</PageHeading>
			<PageTableOfContents
				sections={jobPage.data.attributes.PageSections}
			/>
		</PageSplash>,
		<PageIntroduction backgroundColor="--off-white" key="introduction">
			{jobPage.data.attributes.PageSplash.PageIntro}
		</PageIntroduction>,
		...jobPage.data.attributes.PageSections.map((n, i) => {
			return (
				<Region2
					backgroundColor={getBgFromLight(n.isLightSection)}
					key={`section-${i}`}
					header={n.SectionHeader ? n.SectionHeader : null}
					left={n.isLeftHeader ? n.isLeftHeader : null}
				>
					<PageSectionContent $grid={true}>
						<div style={{ gridColumn: "1 / -1" }}>
							<Div markdown>{n.PageSectionContent}</Div>
						</div>
						{jobCards.hasOwnProperty(n.SectionHeader) ? (
							<ArrowButton
								text="Apply"
								link={
									"/team/jobs/" +
									getJobIdByTitle(n.SectionHeader, jobCards)
								}
								buttonWidth="long"
								buttonThickness="thick"
								buttonTextLength="medText"
							></ArrowButton>
						) : (
							""
						)}
					</PageSectionContent>
				</Region2>
			);
		}),
		<Footer
			backgroundColor="--off-white"
			accentColor={accentColor}
			key="footer"
		/>,
	];

	return (
		<>
			<Head>
				<title>Jobs with Powderhouse</title>
			</Head>
			<PageContainer2>{regions}</PageContainer2>
		</>
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
