import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PersonCard from "../../components/PersonCard";
import PageContainer2 from "../../components/PageContainer2";
import Region2 from "../../components/Region2";
import PageTableOfContents from "../../components/PageTableOfContents";
import ArrowButton from "../../components/ArrowButton";
import { asteriskSVG } from "../../site-data.js";

import {
	baseGrid,
	PageContainer,
	RegionContainer,
	Spacer,
	PageSplash,
	PageHeading,
	PageIntroduction,
	Asterisk,
	SectionHeader,
	PageSection,
	PageSectionContent,
	WidePageSectionContent,
	FullBleedImage,
	Highlight,
	randomRotate,
	ShiftBy,
} from "../../components/global.js";

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

function TeamPage({
	teamPage: {
		data: {
			attributes: {
				PageSplash: { PageHeader, PageIntro },
				PageSections,
			},
		},
	},
	teamCards,
}) {
	let regions = [
		<Region2 backgroundColor="--off-white">
			<Header />
		</Region2>,
		<Region2 backgroundColor="--purple">
			<PageSplash>
				<PageHeading>{PageHeader}</PageHeading>
				<PageTableOfContents sections={PageSections} />
			</PageSplash>
		</Region2>,
		<Region2 backgroundColor="--off-white">
			<PageIntroduction>
				<ShiftBy x={0} y={(17 * 1.3) / 2 - 1}>
					{PageIntro}
				</ShiftBy>
			</PageIntroduction>
		</Region2>,
		...getCoreFromPageSections(PageSections, teamCards),
		<Region2 backgroundColor="--off-white">
			<Footer />
		</Region2>,
	];

	return <PageContainer2>{regions}</PageContainer2>;
}

let PersonHeadshotDiv = styled.div`
	height: 150px;
	width: 150px;
	overflow: hidden;
`;

let PersonHeadshot = styled.img`
	height: 100%;
	width: 100%;
	object-fit: contain;
`;

let PersonName = styled.h3``;

let PersonYears = styled.div``;

let PersonTitle = styled.p``;

let PersonLinks = styled.ul``;

let PersonBio = styled.p``;

let cardSections = ["Staff", "Advisors", "Alumni"];

function sortTeamCards(teamCards) {
	let roleDict = {};
	let uniqueRoles = [
		...new Set(teamCards.data.map((n) => n.attributes.Role)),
	];
	for (let i in uniqueRoles) {
		roleDict[uniqueRoles[i]] = [];
	}
	for (let j of teamCards.data) {
		roleDict[j.attributes.Role].push(j);
	}
	return roleDict;
}

export async function getStaticProps(context) {
	let teamPage = await fetchAPI("/team?populate=*");
	let teamCards = await fetchAPI("/team-cards?populate=*");
	return {
		props: {
			teamPage: teamPage,
			teamCards: sortTeamCards(teamCards),
		}, // will be passed to the page component as props
	};
}

let getPersonLinksFromTeamCard = function (j) {
	return (
		<PersonLinks>
			{j.attributes.LinkList.map((l) => (
				<a key={l.id} href={l.Link}>
					<li>{l.LinkText}</li>
				</a>
			))}
		</PersonLinks>
	);
};

let getPersonNameFromTeamCard = function (j) {
	return <PersonName>{j.attributes.Name}</PersonName>;
};

let getPersonYearsFromTeamCard = function (j) {
	return (
		<PersonYears>
			{j.attributes.YearStart} — {j.attributes.YearEnd}
		</PersonYears>
	);
};

let getHeadshotForStaff = function (j) {
	return (
		<PersonHeadshotDiv>
			<PersonHeadshot
				src={
					j.attributes.Headshot.data.attributes.formats == null
						? j.attributes.Headshot.data.attributes.url
						: j.attributes.Headshot.data.attributes.formats
								.thumbnail.url
				}
				alt={j.attributes.Headshot.data.attributes.alternativeText}
			/>
		</PersonHeadshotDiv>
	);
};

let getPersonBioForAdvisors = function (j) {
	return (
		<PersonBio>
			<ReactMarkdown rehypePlugins={[rehypeRaw]}>
				{j.attributes.Bio}
			</ReactMarkdown>
		</PersonBio>
	);
};

let getPersonTitleForStaff = function (j) {
	return <PersonTitle>{j.attributes.Title}</PersonTitle>;
};

let getPersonCard = function (n, j) {
	return (
		<PersonCard key={j.id}>
			{n.SectionHeader == "Staff" ? getHeadshotForStaff(j) : ""}
			{getPersonNameFromTeamCard(j)}
			{getPersonYearsFromTeamCard(j)}
			{n.SectionHeader == "Staff" ? getPersonTitleForStaff(j) : ""}
			{n.SectionHeader == "Advisors" ? getPersonBioForAdvisors(j) : ""}
			{getPersonLinksFromTeamCard(j)}
		</PersonCard>
	);
};

let getJobsArrow = function () {
	return (
		<ArrowButton
			text="Jobs"
			link="/team/jobs"
			buttonWidth="long"
			buttonThickness="thick"
			buttonTextLength="medText"
		></ArrowButton>
	);
};

let getTeamCardsFromN = function (n, teamCards) {
	return (
		<Region2 backgroundColor="--off-white">
			{getTeamCardsHeader(n, teamCards)}
			<WidePageSectionContent>
				{teamCards[n.SectionHeader].map((j) => getPersonCard(n, j))}
			</WidePageSectionContent>
		</Region2>
	);
};

let getJobsSection = function (n) {
	return (
		<Region2 backgroundColor="--off-white">
			<SectionHeader
				id={n.SectionHeader.replace(/\s+/g, "-").toLowerCase()}
				isLeftHeader={true}
			>
				{n.SectionHeader}
			</SectionHeader>
			<PageSectionContent>
				<ReactMarkdown rehypePlugins={[rehypeRaw]}>
					{n.PageSectionContent}
				</ReactMarkdown>
				{/*TK Better way with relative URLS?*/}
				{n.SectionHeader == "Jobs" ? getJobsArrow() : ""}
			</PageSectionContent>
		</Region2>
	);
};

let getTeamCardsHeader = function (n, teamCards) {
	return teamCards.hasOwnProperty(n.SectionHeader) ? (
		<SectionHeader
			id={n.SectionHeader.replace(/\s+/g, "-").toLowerCase()}
			isLeftHeader={true}
		>
			{n.SectionHeader}
		</SectionHeader>
	) : (
		""
	);
};

let getCoreFromPageSections = function (ps, teamCards) {
	return ps.map((n) =>
		cardSections.includes(n.SectionHeader) &&
		teamCards.hasOwnProperty(n.SectionHeader)
			? getTeamCardsFromN(n, teamCards)
			: cardSections.includes(n.SectionHeader)
			? ""
			: getJobsSection(n)
	);
};

export default TeamPage;
