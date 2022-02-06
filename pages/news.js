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
	let regions = [
		<Header backgroundColor="--off-white" />,
		<PageSplash backgroundColor={accentColor} >
			<PageHeading>
				{newsPage.data.attributes.PageSplash.PageHeader}
			</PageHeading>
		</PageSplash>,
		<PageIntroduction backgroundColor="--off-white">
			{newsPage.data.attributes.PageSplash.PageIntro}
		</PageIntroduction>,
		...newsCards.data.map((n, i) => (
			<Region2 backgroundColor="--off-white" key={i} grid={true}>
				<NewsHeader left={true}>
					<NewsDate>{parseDate(n.attributes.NewsDate)}</NewsDate>
					<NewsType>{n.attributes.NewsType}</NewsType>
				</NewsHeader>
				<NewsContent>
					<NewsTitle>{n.attributes.NewsTitle}</NewsTitle>
					{/*<NewsExcerpt>
								<ReactMarkdown rehypePlugins={[rehypeRaw]}>
									{n.attributes.NewsExcerpt}
								</ReactMarkdown>
							</NewsExcerpt>*/}
					<NewsRelatedLinks>
						{n.attributes.NewsRelatedLinks.map((l, i) => (
							<a key={i} href={l.Link}>
								<NewsLi>
									<Asterisk key={i} type="Default" />
									{l.LinkText}
								</NewsLi>
							</a>
						))}
					</NewsRelatedLinks>
				</NewsContent>
			</Region2>
		)),
		<Footer backgroundColor="--off-white" accentColor={accentColor} />,
	];
	return <PageContainer2>{regions}</PageContainer2>;
}

let NewsLi = styled.li`
	padding-left: calc(1.25 * 1.3rem);
	position: relative;
`;

let NewsCard = styled(PageSectionContent)`
	grid-column: 1 / -1;
`;

let NewsHeader = styled.div`
	grid-column: 1 / span 3;
	grid-row: 1 / -1;
	line-height: 1.3rem;
	height: calc(2 * 1.3rem - 0.75px);
	position: relative;
`;

let NewsContent = styled.div`
	grid-column: 4 / -1;
`;

let NewsDate = styled.h3``;

let NewsType = styled.p``;

let NewsTitle = styled.h2`
	font-size: 31px; /*TK Explicit?*/
`;

let NewsExcerpt = styled(Markdown)``;

let NewsRelatedLinks = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: calc(1.3rem / 2) 0;
`;

function parseDate(dateString) {
	let parts = dateString.split("-");
	let dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
	return dateObj.toDateString().split(" ").slice(1).join(" ");
}

export async function getStaticProps(context) {
	let newsPage = await fetchAPI("/news-page?populate=*");
	let newsCards = await fetchAPI("/news-cards?populate=*");
	return {
		props: {
			newsPage: newsPage,
			newsCards: newsCards,
		}, // will be passed to the page component as props
	};
}

export default NewsPage;
