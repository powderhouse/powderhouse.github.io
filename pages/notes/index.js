import styled from "styled-components";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Asterisk from "../../components/Asterisk";
import PageContainer2 from "../../components/PageContainer2";
import Region2 from "../../components/Region2";
import { mediaQueries } from "../../site-data";

import SEO from "../../components/SEO";
import {
	PageSplash,
	PageIntroduction,
	PageHeading,
} from "../../components/Page.js";

import { baseGrid, Div } from "../../components/global";

import { fetchAPI } from "../../lib/api";

function NotesPage({ notesPage, noteCards }) {
	let accentColor = "--yellow";

	let regions = [
		<Header
			backgroundColor="--off-white"
			key="header"
			activeScribbleColor={accentColor}
		/>,
		<PageSplash backgroundColor={accentColor} key="splash">
			<PageHeading>
				{notesPage.data.attributes.PageSplash.PageHeader}
			</PageHeading>
		</PageSplash>,
		<PageIntroduction
			backgroundColor="--off-white"
			markdown
			key="introduction"
		>
			{notesPage.data.attributes.PageSplash.PageIntro}
		</PageIntroduction>,
		...noteCards.data.map(
			(
				{
					attributes: {
						NoteId,
						PageSplash: {
							PageHeader,
							PageIntro
						},
					},
				}
			) => (
				<NoteItem
					title={PageHeader}
					desc={PageIntro}
					slug={NoteId}
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
			<SEO meta={notesPage.data.attributes.Meta} />
			<PageContainer2>{regions}</PageContainer2>
		</>
	);
}

let NoteItemContainer = styled.div`
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

function NoteItem({ title, desc, slug }) {
	return (
		<Region2 backgroundColor="--off-white" $grid={true}>
			<NoteItemContainer>
				<NoteStar><Asterisk /></NoteStar>
				{/*<NewsType>{type}</NewsType>*/}
					<NoteLink href={`/notes/`+slug} >

				<NoteTitle>{title}</NoteTitle>
				<NoteContent>
					<NoteDescription markdown>{desc}</NoteDescription>
				</NoteContent>
					</NoteLink>

			</NoteItemContainer>
		</Region2>
	);
}

let NoteStar = styled.span`
	grid-column: 1 / 4;
	grid-row: 1;
	align-self: start;
	justify-self: end;
	transform: scale(1.4) translate(.75rem, -.1rem);
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

// function NewsDate(props) {
// 	const date = new Date(props.children);
// 	const options = { year: "numeric", month: "long", day: "numeric" };
// 	const dateString = date.toLocaleDateString(undefined, options);

// 	return <NewsDateDiv>{dateString}</NewsDateDiv>;
// }

// let NewsType = styled.span`
// 	grid-column: 1 / 4;
// 	grid-row: 2;
// 	font-weight: 300;
// 	opacity: 0.625;

// 	@media ${mediaQueries.uptoTablet} {
// 		grid-column: 1 / -1;
// 		grid-area: newstype;
// 		grid-row: 1;
// 	}
// 	@media ${mediaQueries.uptoMobile} {
// 		grid-row: 1;
// 		grid-column: 3 / -1;
// 	}
// `;

let NoteTitle = styled.h2`
	display: inline;
	grid-column: 4 / 10;
	grid-row: 1;
	align-self: end;
	font-size: var(--large-font-size);
	font-weight: 300;
	hyphens: auto;
	text-decoration:underline;

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

let NoteContent = styled.div`
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

let NoteDescription = styled(Div)`
	font-weight: 300;
	opacity: 0.625;
	margin: 0;
`;

let NoteLink = styled.a`
	grid-column: 4 / 10;
	grid-row: 1;
	text-decoration:none;
`;

// let NewsRelatedLinks = styled.ul`
// 	list-style-type: none;
// 	margin: 0;
// 	padding: calc(1.3rem / 4) 0;
// `;

// let NewsLi = styled.li`
// 	padding-left: 1em;
// 	position: relative;
// `;

export async function getStaticProps() {
	let notesPage = await fetchAPI("/note-page?populate=*");
	// TODO: Ideally would "get all" rather than "get 100"
	let noteCards = await fetchAPI(
		"/notes?populate=*&pagination[limit]=100"
	);
	return {
		props: {
			notesPage: notesPage,
			noteCards: noteCards,
		}, // will be passed to the page component as props
	};
}

export default NotesPage;