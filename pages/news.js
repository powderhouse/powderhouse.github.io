import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Asterisk from "../components/Asterisk";
import PageContainer2 from "../components/PageContainer2";
import Region2 from "../components/Region2";
import { mediaQueries } from "../site-data.js";

import SEO from "../components/SEO";
import {
	PageSplash,
	PageIntroduction,
	PageHeading,
} from "../components/Page.js";

import { baseGrid, Div } from "../components/global.js";

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
		<Header
			backgroundColor="--off-white"
			key="header"
			activeScribbleColor={accentColor}
		/>,
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
			backgroundColor="--off-black"
			accentColor={accentColor}
			key="footer"
		/>,
	];

	return (
		<>
			{/*TODO: Should destructure and reformat this to avoid data/attributes*/}
			<SEO meta={newsPage.data.attributes.meta} />
			<PageContainer2>{regions}</PageContainer2>
		</>
	);
}

let NewsItemContainer = styled.div`
	grid-column: 1 / -1;
	padding: var(--vertical-rhythm) 0;
	${baseGrid};
	grid-row-gap: calc(var(--vertical-rhythm) / 4);

	@media ${mediaQueries.uptoTablet} {
		padding: calc(var(--vertical-rhythm) / 2) 0;
		grid-template-columns: fit-content(500px) 1fr;
		grid-template-areas:
			"newsdate newstype"
			"newstitle newstitle"
			"newscontent newscontent";
	}

	@media ${mediaQueries.uptoMobile} {
		grid-template-columns: repeat(3, 1fr);
	}
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
							<NewsLi key={`news-link-${i}`}>
								<Asterisk $type="Default" />
								<a href={l.Link}>{l.LinkText}</a>
							</NewsLi>
						))}
					</NewsRelatedLinks>
				</NewsContent>
			</NewsItemContainer>
		</Region2>
	);
}

let NewsDateDiv = styled.h3`
	grid-column: 1 / 4;
	grid-row: 1;
	align-self: end;
	font-weight: 300;

	@media ${mediaQueries.uptoTablet} {
		grid-column: 1 / -1;
		grid-area: newsdate;
		grid-row: 1;
		opacity: 0.625;
	}
	@media ${mediaQueries.uptoMobile} {
		grid-column: 1 / 3;
		grid-row: 1;
		font-size: var(--base-font-size);
		line-height: var(--base-line-height);
	}
`;

function NewsDate(props) {
	const date = new Date(props.children);
	const options = { year: "numeric", month: "long", day: "numeric" };
	const dateString = date.toLocaleDateString(undefined, options);

	return <NewsDateDiv>{dateString}</NewsDateDiv>;
}

let NewsType = styled.p`
	grid-column: 1 / 4;
	grid-row: 2;
	font-weight: 300;
	opacity: 0.625;

	@media ${mediaQueries.uptoTablet} {
		grid-column: 1 / -1;
		grid-area: newstype;
		grid-row: 1;
	}
	@media ${mediaQueries.uptoMobile} {
		grid-row: 1;
		grid-column: 3 / -1;
	}
`;

let NewsTitle = styled.h2`
	grid-column: 4 / 10;
	grid-row: 1;
	align-self: end;
	font-size: var(--large-font-size);
	line-height: var(--large-line-height);
	font-weight: 300;
	hyphens: auto;

	@media ${mediaQueries.uptoTablet} {
		grid-column: 1 / -1;
		grid-area: newstitle;
		grid-row: 2;
		font-size: var(--large-font-size);
		line-height: var(--large-line-height);
	}
	@media ${mediaQueries.uptoMobile} {
		grid-column: 1 / -1;
		grid-row: 2;
		font-size: var(--medium-font-size);
		line-height: var(--medium-line-height);
	}
`;

let NewsContent = styled.div`
	grid-column: 4 / 10;
	grid-row: 2;
	align-self: start;
	font-weight: 300;

	@media ${mediaQueries.uptoTablet} {
		grid-column: 1 / -1;
		grid-area: newscontent;
		grid-row: 3;
	}
	@media ${mediaQueries.uptoMobile} {
		grid-column: 1 / -1;
		grid-row: 3;
	}
`;

let NewsExcerpt = styled(Div)`
	font-weight: 300;
	opacity: 0.625;
	margin: 0;
`;

let NewsRelatedLinks = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: calc(1.3rem / 4) 0;
`;

let NewsLi = styled.li`
	padding-left: 1em;
	position: relative;
`;

export async function getStaticProps() {
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
