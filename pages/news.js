import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageContainer2 from "../components/PageContainer2";
import Region2 from "../components/Region2";
import ArrowButton from "../components/ArrowButton";

import {
	baseGrid,
	PageSplash,
	PageHeading,
	PageTOCListItem,
	PageTOCLink,
	PageIntroduction,
	SectionHeader,
	PageSection,
	PageSectionContent,
	WidePageSectionContent,
	FullBleedImage,
	Markdown,
	Asterisk,
} from "../components/global.js";

import { getStrapiMedia } from "../lib/media";
import { fetchAPI } from "../lib/api";

function NewsPage({ newsPage, newsCards }) {
	let accentColor = "--yellow";

	let sortedNewsCards = newsCards.data
		.sort((a, b) => {
			let aTime = new Date(a.attributes.NewsDate).getTime();
			let bTime = new Date(b.attributes.NewsDate).getTime();
			return aTime - bTime;
		})
		.reverse();

	let regions = [
		<Header backgroundColor="--off-white" key="header" />,
		<PageSplash backgroundColor={accentColor} key="splash">
			<PageHeading>
				{newsPage.data.attributes.PageSplash.PageHeader}
			</PageHeading>
		</PageSplash>,
		<PageIntroduction
			backgroundColor="--off-white"
			markdown
			key="introduction"
		>
			{newsPage.data.attributes.PageSplash.PageIntro}
		</PageIntroduction>,
		...sortedNewsCards.map(
			(
				{
					attributes: {
						NewsDate,
						NewsType,
						NewsTitle,
						NewsExcerpt,
						NewsRelatedLinks,
					},
				},
				i
			) => (
				<NewsItem
					key={`news-item-${i}`}
					date={NewsDate}
					type={NewsType}
					title={NewsTitle}
					excerpt={NewsExcerpt}
					links={NewsRelatedLinks}
				/>
			)
		),
		<Footer
			backgroundColor="--off-white"
			accentColor={accentColor}
			key="footer"
		/>,
	];

	return <PageContainer2>{regions}</PageContainer2>;
}

let NewsItemContainer = styled.div`
	grid-column: 1 / 10;
	${baseGrid}
	padding: calc(1 * 1.3rem) 0;
`;

function NewsItem({ date, type, title, excerpt, links }) {
	return (
		<Region2 backgroundColor="--off-white" $grid={true}>
			<NewsItemContainer>
				<NewsDate>{date}</NewsDate>
				<NewsType>{type}</NewsType>
				<NewsTitle>{title}</NewsTitle>
				<NewsContent>
					<NewsExcerpt markdown>{excerpt}</NewsExcerpt>
					<NewsRelatedLinks>
						{links.map((l, i) => (
							<a key={`news-link-${i}`} href={l.Link}>
								<NewsLi>
									<Asterisk type="Default" />
									{l.LinkText}
								</NewsLi>
							</a>
						))}
					</NewsRelatedLinks>
				</NewsContent>
			</NewsItemContainer>
		</Region2>
	);
}

let NewsDateDiv = styled.h3`
	grid-column: 1 / 4;
	grid-row: 1 / 2;
	align-self: end;
	font-weight: 300;
`;

function NewsDate(props) {
	const date = new Date(props.children);
	const options = { year: "numeric", month: "long", day: "numeric" };
	const dateString = date.toLocaleDateString(undefined, options);

	return <NewsDateDiv>{dateString}</NewsDateDiv>;
}

let NewsType = styled.p`
	grid-column: 1 / 4;
	grid-row: 2 / 3;
	align-self: start;
	font-weight: 300;
	opacity: 0.75;
`;

let NewsTitle = styled.h2`
	grid-column: 4 / -1;
	grid-row: 1 / 2;
	align-self: end;
	font-size: calc(1.3rem * 1.2);
	line-height: calc(1.3rem * 1.2);
	font-weight: 300;
`;

let NewsContent = styled.div`
	grid-column: 4 / -1;
	grid-row: 2 / 3;
	align-self: start;
	font-weight: 300;
`;

let NewsExcerpt = styled(Markdown)`
	font-weight: 300;
	opacity: 0.75;
`;

let NewsRelatedLinks = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: calc(1.3rem / 4) 0;
`;

let NewsLi = styled.li`
	padding-left: 1.3rem;
	position: relative;
`;

function parseDate(dateString) {
	let parts = dateString.split("-");
	let dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
	let day = parts[2];
	let month = dateObj.toLocaleString("default", { month: "long" });
	let year = parts[0];

	return [day, month, year].join(" ");
}

export async function getStaticProps(context) {
	let newsPage = await fetchAPI("/news-page?populate=*");
	// TODO: Ideally would "get all" rather than "get 100"
	let newsCards = await fetchAPI(
		"/news-cards?populate=*&pagination[limit]=100"
	);
	return {
		props: {
			newsPage: newsPage,
			newsCards: newsCards,
		}, // will be passed to the page component as props
	};
}

export default NewsPage;
