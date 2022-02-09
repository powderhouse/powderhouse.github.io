import styled from "styled-components";
import React from "react";
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
	getBgFromLight,
	Div,
	tenureSort,
} from "../../components/global.js";

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

let cardSections = ["Staff", "Advisors", "Alumni"];

function TeamPage2({
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
	let accentColor = "--purple";

	let { Staff: staff, Advisors: advisors, Alumni: alumni } = teamCards;
	// TK Is this (below) an OK way to "destructure" (but not actually) this data structure?
	[staff, advisors, alumni] = [staff, advisors, alumni].map((people) =>
		people.map((person) => person.attributes)
	);

	alumni = alumni
		.sort(tenureSort("YearStart", "YearEnd", "Name", "descending"))
		.reverse();

	let staffSection = PageSections.find((s) => s.SectionHeader == "Staff");
	let staffCards = (
		<Region2 backgroundColor={getBgFromLight(staffSection.isLightSection)}>
			<SectionHeader left={staffSection.isLeftHeader}>
				{staffSection.SectionHeader}
			</SectionHeader>
			<PageSectionContent wide={"true"} grid={true}>
				{staff.map((s, i) => (
					<PersonCard
						type={s.Role}
						key={i}
						headshot={s.Headshot}
						name={s.Name}
						title={s.Title}
						tenure={{
							start: s.YearStart,
							end: s.YearEnd,
						}}
						links={s.LinkList}
					/>
				))}
			</PageSectionContent>
		</Region2>
	);

	let advisorSection = PageSections.filter(
		(s) => s.SectionHeader == "Advisors"
	)[0];
	let advisorCards = (
		<Region2
			backgroundColor={getBgFromLight(advisorSection.isLightSection)}
		>
			<SectionHeader left={advisorSection.isLeftHeader}>
				{advisorSection.SectionHeader}
			</SectionHeader>
			<PageSectionContent wide={true} grid={true}>
				{advisors.map((a, i) => (
					<PersonCard
						key={i}
						type={a.Role}
						name={a.Name}
						bio={a.Bio}
						links={a.LinkList}
					/>
				))}
			</PageSectionContent>
		</Region2>
	);

	let alumniSection = PageSections.filter(
		(s) => s.SectionHeader == "Alumni"
	)[0];
	let alumniCards = (
		<Region2 backgroundColor={getBgFromLight(alumniSection.isLightSection)}>
			<SectionHeader left={alumniSection.isLeftHeader}>
				{alumniSection.SectionHeader}
			</SectionHeader>
			<PageSectionContent wide={true} grid={true}>
				{alumni.map((a, i) => (
					<PersonCard
						type={a.Role}
						key={i}
						name={a.Name}
						tenure={{
							start: a.YearStart,
							end: a.YearEnd,
						}}
						links={a.LinkList}
					/>
				))}
			</PageSectionContent>
		</Region2>
	);

	let jobs = PageSections.find((s) => s.SectionHeader == "Jobs");

	let regions = [
		<Header backgroundColor="--off-white" />,
		<PageSplash backgroundColor={accentColor}>
			<PageHeading>{PageHeader}</PageHeading>
			<PageTableOfContents sections={PageSections} />
		</PageSplash>,
		<PageIntroduction backgroundColor="--off-white">
			<ShiftBy x={0} y={(17 * 1.3) / 2 - 1}>
				{PageIntro}
			</ShiftBy>
		</PageIntroduction>,
		staffCards,
		advisorCards,
		alumniCards,
		<Region2 backgroundColor={getBgFromLight(jobs.isLightSection)}>
			<SectionHeader left={jobs.isLeftHeader}>
				{jobs.SectionHeader}
			</SectionHeader>
			<PageSectionContent wide={true} grid={true}>
				<Div markdown style={{ backgroundColor: "lightblue" }}>
					{jobs.PageSectionContent}

					<ArrowButton
						text="Jobs"
						link="/team/jobs"
						buttonWidth="long"
						buttonThickness="thick"
						buttonTextLength="medText"
						style={{
							top: "calc(-15px * ((17 * 1.3) / 2))",
						}}
					></ArrowButton>
				</Div>
			</PageSectionContent>
		</Region2>,
		<Footer backgroundColor="--off-white" accentColor={accentColor} />,
	];

	return (
		<PageContainer2>
			{regions.map((r, i) => React.cloneElement(r, { key: i }))}
		</PageContainer2>
	);
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

export default TeamPage2;
