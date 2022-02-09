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
		<PageIntroduction backgroundColor="--off-white" markdown>
			{newsPage.data.attributes.PageSplash.PageIntro}
		</PageIntroduction>,
		...newsCards.data.map((n, i) => (
			<Region2 backgroundColor="--off-white" key={i} grid={true}>
				<NewsItem>
					<NewsDate>{parseDate(n.attributes.NewsDate)}</NewsDate>
					<NewsType>{n.attributes.NewsType}</NewsType>
					<NewsTitle>{n.attributes.NewsTitle}</NewsTitle>
					<NewsContent>
						<NewsExcerpt>
							<ReactMarkdown rehypePlugins={[rehypeRaw]}>
								{n.attributes.NewsExcerpt}
							</ReactMarkdown>
						</NewsExcerpt>
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
				</NewsItem>
			</Region2>
		)),
		<Footer backgroundColor="--off-white" accentColor={accentColor} />,
	];
	return <PageContainer2>{regions}</PageContainer2>;
}

let NewsItem = styled.div`
	grid-column: 1 / -1;

	display:grid;
	grid-template-columns: repeat(12, 1fr);
	column-gap:var(--gap);
`;

let NewsDate = styled.h3`
	grid-column: 1 / 4;
	grid-row: 1 / 2;
	align-self: end;

	font-weight:300;
`;

let NewsType = styled.p`
	grid-column: 1 / 4;
	grid-row: 2 / 3;
	align-self: start;

	opacity:0.75;
`;

let NewsTitle = styled.h2`
	grid-column: 4 / -1;
	grid-row: 1 / 2;
	align-self: end;

	font-size: 2rem;
	line-height:2rem;
	font-weight:300;
`;

let NewsContent = styled.div`
	grid-column: 4 / -1;
	grid-row: 2 / 3;
	align-self: start;
`;

let NewsExcerpt = styled(Markdown)``;

let NewsRelatedLinks = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: calc(1.3rem / 2) 0;
`;

let NewsLi = styled.li`
	padding-left: calc(1.25 * 1.3rem);
	position: relative;
`;

function parseDate(dateString) {
	let parts = dateString.split("-");
	let dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
	let day = parts[2];
	let month = dateObj.toLocaleString('default', { month: 'long' });
	let year = parts[0];

	return [day, month, year].join(" ");
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
