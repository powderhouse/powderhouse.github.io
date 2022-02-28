import styled from "styled-components";
import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PersonCard from "../../components/PersonCard";
import PageContainer2 from "../../components/PageContainer2";
import Region2 from "../../components/Region2";
import PageTableOfContents from "../../components/PageTableOfContents";
import ArrowButton from "../../components/ArrowButton";

import { mediaQueries } from "../../site-data";

import Head from "next/head";

import {
	PageSplash,
	PageHeading,
	PageIntroduction,
	Asterisk,
	SectionHeader,
	PageSectionContent,
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
	[staff, advisors, alumni] = [
		staff ? staff : [],
		advisors ? advisors : [],
		alumni ? alumni : [],
	].map((people) => people.map((person) => person.attributes));

	alumni = alumni.sort(tenureSort()).reverse();
	staff = staff.sort(tenureSort()).reverse();
	advisors = advisors.sort(tenureSort()).reverse();

	let staffSection = PageSections.find((s) => s.SectionHeader == "Staff");
	let staffCards =
		staff.length == 0 ? (
			<></>
		) : (
			<Region2
				backgroundColor={getBgFromLight(staffSection.isLightSection)}
				header={staffSection.SectionHeader}
				left={staffSection.isLeftHeader}
				key="staff"
			>
				<StaffAlumSectionContent $wide={true} $grid={true}>
					{staff.map((s, i) => (
						<PersonCard
							type={s.Role}
							key={`staff${i}`}
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
				</StaffAlumSectionContent>
			</Region2>
		);

	let advisorSection = PageSections.filter(
		(s) => s.SectionHeader == "Advisors"
	)[0];
	let advisorCards =
		advisors.length == 0 ? (
			<></>
		) : (
			<Region2
				backgroundColor={getBgFromLight(advisorSection.isLightSection)}
				header={advisorSection.SectionHeader}
				left={advisorSection.isLeftHeader}
				key="advisors"
			>
				<AdvisorSectionContent $wide={true} $grid={true}>
					{advisors.map((a, i) => (
						<PersonCard
							key={i}
							type={a.Role}
							name={a.Name}
							bio={a.Bio}
							links={a.LinkList}
						/>
					))}
				</AdvisorSectionContent>
			</Region2>
		);

	let alumniSection = PageSections.filter(
		(s) => s.SectionHeader == "Alumni"
	)[0];
	let alumniCards =
		alumni.length == 0 ? (
			<></>
		) : (
			<Region2
				backgroundColor={getBgFromLight(alumniSection.isLightSection)}
				header={alumniSection.SectionHeader}
				left={alumniSection.isLeftHeader}
				key="alumni"
			>
				<StaffAlumSectionContent $wide={true} $grid={true}>
					{alumni.map((a, i) => (
						<PersonCard
							type={a.Role}
							key={`alumni-${i}`}
							name={a.Name}
							tenure={{
								start: a.YearStart,
								end: a.YearEnd,
							}}
							links={a.LinkList}
						/>
					))}
				</StaffAlumSectionContent>
			</Region2>
		);

	let jobs = PageSections.find((s) => s.SectionHeader == "Jobs");

	let regions = [
		<Header
			backgroundColor="--off-white"
			key="header"
			activeScribbleColor={accentColor}
		/>,
		<PageSplash backgroundColor={accentColor} key="splash">
			<PageHeading>{PageHeader}</PageHeading>
			<PageTableOfContents
				sections={PageSections.filter(
					(s) => s.SectionHeader != "Advisors" // TODO: Make this less explicit
				)}
			/>
		</PageSplash>,
		<PageIntroduction backgroundColor="--off-white" key="introduction">
			<ShiftBy x={0} y={(17 * 1.3) / 2 - 1}>
				{PageIntro}
			</ShiftBy>
		</PageIntroduction>,
		staffCards,
		// advisorCards, // Leaving this in adds confusing space to the RegionContainer; TODO: Make PageContainer robust to being passed fragments?
		alumniCards,
		<Region2
			backgroundColor={getBgFromLight(jobs.isLightSection)}
			header={jobs.SectionHeader}
			left={jobs.isLeftHeader}
			key="jobs"
		>
			<JobsContent $wide={true} $grid={true}>
				<Div markdown>
					{jobs.PageSectionContent}
					<JobsButton
						text="Jobs"
						link="/team/jobs"
						buttonWidth="long"
						buttonThickness="thick"
						buttonTextLength="medText"
					/>
				</Div>
			</JobsContent>
		</Region2>,
		<Footer
			backgroundColor="--off-black"
			accentColor={accentColor}
			key="footer"
		/>,
	];

	return (
		<>
			<Head>
				<title>{`Powderhouse's Team`}</title>
			</Head>
			<PageContainer2>
				{regions.map((r, i) => React.cloneElement(r, { key: i }))}
			</PageContainer2>
		</>
	);
}

let JobsContent = styled(PageSectionContent)`
	grid-template-columns: repeat(9, 1fr);
	grid-template-areas: "footnoted-text footnotes" "jobs-button footnotes";
	@media ${mediaQueries.uptoTablet} {
		display: flex;
		flex-direction: column;
	}
}
`;

let JobsButton = styled(ArrowButton)`
	grid-area: jobs-button;
	grid-column: 1 / span 6;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	position: relative;
	top: -2.5px; // Optical alignment with footnote on desktop
	margin-top: calc(-1 * var(--verical-rhythm) / 2);

	@media ${mediaQueries.uptoTablet} {
		top: 0;
		margin-top:0;
	}
`;

let StaffAlumSectionContent = styled(PageSectionContent)`
	@media ${mediaQueries.uptoTablet} {
		grid-template-columns: repeat(2, 1fr);
	}
`;

let AdvisorSectionContent = styled(PageSectionContent)`
	@media ${mediaQueries.uptoMobile} {
		grid-template-columns: repeat(1, 1fr);
	}
`;

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
