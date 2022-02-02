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
} from "../../components/global.js";

import { getStrapiMedia } from "../../lib/media";
import { fetchAPI } from "../../lib/api";

let cardSections = ["Staff", "Advisors", "Alumni"];

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
	let { Staff: staff, Advisors: advisors, Alumni: alumni } = teamCards;

	alumni = alumni
		.sort((a, b) => {
			// Sort first by starting year, then ending year, then alphabetical by first name
			if (a.attributes.YearStart < b.attributes.YearStart) {
				return -1;
			} else if (a.attributes.YearStart > b.attributes.YearStart) {
				return 1;
			} else {
				if (a.attributes.YearEnd < b.attributes.YearEnd) {
					return -1;
				} else if (a.attributes.YearEnd > b.attributes.YearEnd) {
					return 1;
				} else {
					// via https://stackoverflow.com/a/60922998
					return a.attributes.Name.localeCompare(
						b.attributes.Name,
						"en",
						{
							sensitivity: "base",
						}
					);
				}
			}
		})
		.reverse();

	let staffSection = PageSections.find((s) => s.SectionHeader == "Staff");
	let staffCards = (
		<Region2 backgroundColor={getBgFromLight(staffSection.isLightSection)}>
			<SectionHeader left={staffSection.isLeftHeader}>
				{staffSection.SectionHeader}
			</SectionHeader>
			<PageSectionContent wide={true} grid={true}>
				{staff.map((s, i) => (
					<PersonCard
						type={s.attributes.Role}
						key={i}
						headshot={s.attributes.Headshot}
						name={s.attributes.Name}
						title={s.attributes.Title}
						tenure={{
							start: s.attributes.YearStart,
							end: s.attributes.YearEnd,
						}}
						links={s.attributes.LinkList}
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
						type={a.attributes.Role}
						name={a.attributes.Name}
						bio={a.attributes.Bio}
						links={a.attributes.LinkList}
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
						type={a.attributes.Role}
						key={i}
						name={a.attributes.Name}
						tenure={{
							start: a.attributes.YearStart,
							end: a.attributes.YearEnd,
						}}
						links={a.attributes.LinkList}
					/>
				))}
			</PageSectionContent>
		</Region2>
	);

	let jobs = PageSections.find((s) => s.SectionHeader == "Jobs");

	let regions = [
		<Header backgroundColor="--off-white" />,
		<PageSplash backgroundColor="--purple">
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
				</Div>
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
			</PageSectionContent>
		</Region2>,
		<Footer backgroundColor="--off-white" />,
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

export default TeamPage;
