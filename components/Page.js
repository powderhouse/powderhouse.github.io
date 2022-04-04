import { mediaQueries } from "../site-data.js";
import { Div, slugify } from "../components/global.js";
import Region2 from "../components/Region2.js";
import Asterisk from "../components/Asterisk.js";
import styled from "styled-components";
import { css } from "styled-components";

let PageTOC = styled.ol`
	list-style-type: none;
	padding: 0;
	margin: 0;
	position: relative;
	left: calc(var(--gap) - 7px);

	& li:last-of-type {
		padding-bottom: 0;
	}
`;

let PageTOCItem = styled.li`
	position: relative;
	left: -0.21em; // Determined optically after choosing an asterisk spacing
	&:not(:last-child) {
		padding-bottom: calc(var(--base-line-height) / 2);
	}
`;

let PageTOCLink = styled.a`
	display: flex;
	align-items: center;
	width: fit-content;
	transition: 0.8s ease;
	text-decoration: none;
	position: relative;

	@media (hover: hover) {
		&:hover {
			transform: translateX(var(--gap));
		}
	}
`;

let TOCText = styled.div`
	margin-left: 0.5em; // TOC AsteriskContainer width minus its left shift
`;

function PageTableOfContents({ sections }) {
	let TOCsections = sections.filter(s => !s.isSubheading);
	let items = TOCsections.map((n, i) =>
		n.SectionHeader ? (
			<PageTOCItem key={i}>
				<PageTOCLink href={"#" + slugify(n.SectionHeader)}>
					<Asterisk key={i} $type="TOC" />
					<TOCText>{n.SectionHeader}</TOCText>
				</PageTOCLink>
			</PageTOCItem>
		) : (
			""
		)
	);
	return <PageTOC>{items}</PageTOC>;
}

let PageHeading = styled.h1`
	font-family: "GT Planar", sans-serif;
	font-size: var(--splash-font-size);
	line-height: var(--splash-line-height);
	letter-spacing: var(--splash-letter-spacing);
	font-weight: 300;
	hyphens: auto;

	@media ${mediaQueries.uptoTablet} {
		// TODO: Integrate with type hierarchy
		font-size: calc(0.65 * var(--splash-font-size));
	}
	@media ${mediaQueries.uptoMobile} {
		// TODO: Integrate with type hierarchy
		font-size: calc(0.45 * var(--splash-font-size));
	}
`;

let PageSectionContent = styled(Div)`
	// Using transient props to avoid passing these down to the DOM: https://styled-components.com/docs/api#transient-props
	letter-spacing: 0;
	& p:not(:last-child) {
		margin-bottom: var(--base-line-height);
	}

	& ul {
		// Optically align bullets with left border of text
		padding-left: calc(1em - 7px);
	}

	${(props) =>
		props.$wide
			? css`
					grid-column: 4 / -1;
					grid-template-columns: repeat(9, 1fr);
			  `
			: css`
					grid-column: 4 / 10;
					grid-template-columns: repeat(6, 1fr);
			  `}

	${(props) =>
		!props.$grid
			? css``
			: css`
					display: inherit;
					column-gap: inherit;
					grid-auto-rows: inherit;
					grid-row-gap: inherit;
			  `}

	@media ${mediaQueries.uptoTablet} {
		grid-column: 1 / -1;
		grid-template-columns: repeat(6, 1fr);
	}

	@media ${mediaQueries.uptoMobile} {
		grid-template-columns: repeat(3, 1fr);
		grid-row-gap: var(--vertical-rhythm);
	}
`;

let PageIntroductionDiv = styled(Div)`
	grid-column: 1 / span 9;
	font-family: "GT Planar", sans-serif;
	font-weight: 300;
	font-size: var(--xlarge-font-size);
	line-height: var(--xlarge-line-height);
	// TODO: Add letter-spacing to type-hierarchy
	letter-spacing: -0.5;
	padding-top: var(--xlarge-line-height);
	padding-bottom: var(--xlarge-line-height) / 2;

	@media ${mediaQueries.uptoTablet} {
		grid-column: 1 / -1;
		font-size: var(--large-font-size);
		line-height: var(--large-line-height);
	}

	@media ${mediaQueries.uptoMobile} {
		font-size: var(--medium-font-size);
		line-height: var(--medium-line-height);
	}
`;

function PageIntroduction({ children, markdown, ...rest }) {
	return (
		<Region2 {...rest}>
			<PageIntroductionDiv markdown={markdown}>
				{children}
			</PageIntroductionDiv>
		</Region2>
	);
}

let PageSplashDiv = styled.div`
	grid-column: 1 / -1;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 32.5em;
	padding: var(--vertical-rhythm) 0;

	@media ${mediaQueries.uptoTablet} {
		min-height: 27em;
	}

	@media ${mediaQueries.uptoMobile} {
		min-height: 21.5em;
	}
`;

function PageSplash({ children, ...rest }) {
	return (
		<Region2 {...rest}>
			<PageSplashDiv>{children}</PageSplashDiv>
		</Region2>
	);
}

export {
	PageTableOfContents,
	PageSplash,
	PageIntroduction,
	PageSectionContent,
	PageHeading,
};
