import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PersonCard from "../../components/PersonCard";
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
	return (
		<PageContainer splashColor="--purple">
			<Header />
			<PageSplash bgColor="purple" color="off-black">
				<PageHeading>{PageHeader}</PageHeading>
				<PageTableOfContents sections={PageSections} />
			</PageSplash>
			<PageIntroduction>
				<ReactMarkdown rehypePlugins={[rehypeRaw]}>
					{PageIntro}
				</ReactMarkdown>
			</PageIntroduction>

			{PageSections.map((n) =>
				cardSections.includes(n.SectionHeader) &&
				teamCards.hasOwnProperty(n.SectionHeader) ? (
					<PageSection isLightSection={true} css={baseGrid}>
						{teamCards.hasOwnProperty(n.SectionHeader) ? (
							<SectionHeader
								id={n.SectionHeader.replace(
									/\s+/g,
									"-"
								).toLowerCase()}
								isLeftHeader={true}
							>
								{n.SectionHeader}
							</SectionHeader>
						) : (
							""
						)}
						<WidePageSectionContent>
							{teamCards[n.SectionHeader].map((j) => (
								<PersonCard key={j.id}>
									{n.SectionHeader == "Staff" ? (
										<PersonHeadshotDiv>
											<PersonHeadshot
												src={
													j.attributes.Headshot.data
														.attributes.formats ==
													null
														? j.attributes.Headshot
																.data.attributes
																.url
														: j.attributes.Headshot
																.data.attributes
																.formats
																.thumbnail.url
												}
												alt={
													j.attributes.Headshot.data
														.attributes
														.alternativeText
												}
											/>
										</PersonHeadshotDiv>
									) : (
										""
									)}

									<PersonName>{j.attributes.Name}</PersonName>
									<PersonYears>
										{j.attributes.YearStart} —{" "}
										{j.attributes.YearEnd}
									</PersonYears>

									{n.SectionHeader == "Staff" ? (
										<PersonTitle>
											{j.attributes.Title}
										</PersonTitle>
									) : (
										""
									)}

									{n.SectionHeader == "Advisors" ? (
										<PersonBio>
											<ReactMarkdown
												rehypePlugins={[rehypeRaw]}
											>
												{j.attributes.Bio}
											</ReactMarkdown>
										</PersonBio>
									) : (
										""
									)}
									<PersonLinks>
										{j.attributes.LinkList.map((l) => (
											<a key={l.id} href={l.Link}>
												<li>{l.LinkText}</li>
											</a>
										))}
									</PersonLinks>
								</PersonCard>
							))}
						</WidePageSectionContent>
					</PageSection>
				) : cardSections.includes(n.SectionHeader) ? (
					""
				) : (
					<PageSection isLightSection={true} css={baseGrid}>
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
							<ReactMarkdown rehypePlugins={[rehypeRaw]}>
								{n.PageSectionContent}
							</ReactMarkdown>
							{n.SectionHeader == "Jobs" ? (
								/* TK Better way with relative URLS? */
								<ArrowButton
									text="Jobs"
									link="/team/jobs"
									buttonWidth="long"
									buttonThickness="thick"
									buttonTextLength="medText"
								></ArrowButton>
							) : (
								""
							)}
						</PageSectionContent>
					</PageSection>
				)
			)}

			<Footer />
		</PageContainer>
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

export default TeamPage;
