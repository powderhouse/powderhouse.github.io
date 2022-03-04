import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PageContainer2 from "../../../components/PageContainer2";
import Region2 from "../../../components/Region2";
import PageTableOfContents from "../../../components/PageTableOfContents";
import ArrowButton from "../../../components/ArrowButton";
import Head from "next/head";

import {
	PageSplash,
	PageHeading,
	PageIntroduction,
	PageSectionContent,
	getBgFromLight,
	Div,
} from "../../../components/global.js";

import { fetchAPI } from "../../../lib/api";

function JobsPage({ jobPage, jobCards }) {
	function getJobIdByTitle(title, jobCards) {
		return jobCards[title][0].attributes.JobId;
	}

	let accentColor = "--purple";

	let regions = [
		<Header
			backgroundColor="--off-white"
			key="header"
			activeScribbleColor={accentColor}
		/>,
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
							{/*TODO: Why is this wrapper div needed v. putting
							gridColumn inline with the Div?*/}
							<Div markdown>{n.PageSectionContent}</Div>
						</div>
						{jobCards.hasOwnProperty(n.SectionHeader) ? (
							<ArrowButton
								text="Read more"
								link={
									"/team/jobs/" +
									getJobIdByTitle(n.SectionHeader, jobCards)
								}
								buttonWidth="long"
								buttonThickness="thick"
								buttonTextLength="longText"
								style={{ gridColumn: "1 / span 3" }}
								// width="262.5%" // TODO: Fix this hack
							></ArrowButton>
						) : (
							""
						)}
					</PageSectionContent>
				</Region2>
			);
		}),
		<Footer
			backgroundColor="--off-black"
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

export async function getStaticProps() {
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
