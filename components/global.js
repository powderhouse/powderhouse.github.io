// global.js

import React from "react";
import { useEffect, useState } from "react";

import styled from "styled-components";
import { css } from "styled-components";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { asteriskSVG } from "../site-data.js";

import Region2 from "../components/Region2.js";
import AsteriskContainer from "../components/AsteriskContainer.js";

let ShiftBy = function ({ x = 0, y = 0, children, ...delegated }) {
	// via https://www.joshwcomeau.com/css/pixel-perfection/
	return (
		<div
			{...delegated}
			style={{
				transform: `translate(${x}px, ${y}px)`,
			}}
		>
			{children}
		</div>
	);
};

let tenureSort = function (
	getStartField = (x) => x.YearStart,
	getEndField = (x) => x.YearEnd,
	getBreakevenField = (x) => x.Name,
	order = "ascending"
) {
	// Generates a comparator suitable for use in comparing tenures.  Useful for sorting proejcts or people.  `startField` and `endField` are the fields containing start and end dates, expected to be years.  `breakevenField` is another field to be compared lexicographically in case years are equal.

	let ascending = (a, b) => {
		// Sort first by starting year, then ending year, then alphabetical
		if (getStartField(a) < getStartField(b)) {
			return -1;
		} else if (getStartField(a) > getStartField(b)) {
			return 1;
		} else {
			if (getEndField(a) < getEndField(b)) {
				return -1;
			} else if (getEndField(a) > getEndField(b)) {
				return 1;
			} else {
				// via https://stackoverflow.com/a/60922998
				return getBreakevenField(a).localeCompare(
					getBreakevenField(b),
					"en",
					{
						sensitivity: "base",
					}
				);
			}
		}
	};

	return order == "ascending" ? ascending : (a, b) => -1 * ascending(a, b);
};

let expandColor = function (colorString) {
	let isCSSVariable = colorString.match(/^--/);
	return isCSSVariable ? `var(${colorString})` : colorString;
};

let complementaryColor = function (colorString) {
	let complements = {
		"--off-white": "--off-black",
		"--off-black": "--off-white",
		"--green": "--off-white",
		"--blue": "--off-black",
		"--yellow": "--off-black",
		"--purple": "--off-white",
		"--red": "--off-white",
	};

	// TODO: Probably want this to be subtler; some colors are not simply inverted
	// if (
	// 	Object.keys(complements).filter((k) =>
	// 		Object.values(complements).includes(k)
	// 	).length > 0
	// ) {
	// 	throw "`complements` has a color which would be overwritten when expanded.";
	// } else {
	// 	Object.keys(complements).forEach(
	// 		(k) => (complements[complements[k]] = k)
	// 	);
	// }

	return colorString in complements
		? expandColor(complements[colorString])
		: "initial";
};

let colorByProp = (props) => {
	let backgroundColorString = props.backgroundColor
		? props.backgroundColor
		: "initial";
	let colorString = props.color
		? props.color
		: complementaryColor(backgroundColorString);
	return `
	  		background-color: ${expandColor(backgroundColorString)};
	  		color: ${expandColor(colorString)};
	  		stroke: ${expandColor(colorString)};
	  		fill: ${expandColor(colorString)};
	  	`;
};

let PageContainer = styled.div`
	background-color: var(--off-white);
	color: var(--off-black);
`;

let Region = styled.div`
	margin: 0 auto; // TODO: Any better way to center?
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	column-gap: var(--gap);
	grid-auto-rows: min-content;
	max-width: 1440px;
	padding-left: var(--gap);
	padding-right: var(--gap);

	&:not(:last-child) {
		margin-bottom: calc(2 * 1.3rem);
	}
`;

let Markdown = ({ children, ...rest }) => {
	// Here we iterate over children we pass and only wrap text/string children in Markdown.  This lets us wrap things in Markdown more cavalierly.
	let wrappedChildren = React.Children.toArray(children).map((c, i) => {
		if (typeof c == "string") {
			return (
				<ReactMarkdown
					components={{ strong: "b" }}
					rehypePlugins={[rehypeRaw]}
					children={c}
					key={i}
					{...rest}
				/>
			);
		} else {
			// We need to clone the element because by default, JSX elements are not extensible (i.e. we can't modify their props.key after they are passed)
			let clone = React.cloneElement(c, { key: i });
			return clone;
		}
	});
	return <>{wrappedChildren}</>;
};

let Div = (props) =>
	props.markdown ? <Markdown {...props} /> : <div {...props} />;

let Spacer = styled.div``;

const baseGrid = css`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: var(--gap);
`;

let PageSplashDiv = styled.div`
	grid-column: 1 / -1;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	min-height: calc(29 * 1.3rem);

	padding: calc(1 * 1.3rem) 0;
`;

function PageSplash({ children, ...rest }) {
	return (
		<Region2 {...rest}>
			<PageSplashDiv>{children}</PageSplashDiv>
		</Region2>
	);
}

let PageHeading = styled.h1`
	font-family: "GT Planar", sans-serif;
	font-size: 166px;
	letter-spacing: -4.8px;
	font-weight: 300;
	line-height: 1em;
	transform: translate(-3px, calc(1.3rem / 2 - 1px));
`;

let Asterisk = (props) => {
	return (
		<AsteriskContainer
			type={props.type}
			color={props.color ? props.color : "--off-black"}
		>
			{asteriskSVG()}
		</AsteriskContainer>
	);
};

let PageIntroductionDiv = styled(Div)`
	grid-column: 1 / span 9;
	font-family: "GT Planar", sans-serif;
	font-weight: 300;
	font-size: 34px;
	line-height: calc(2 * 1.3rem);
	letter-spacing: -0.5;
	padding-right: none;
	padding-top: calc(1 * 1.3rem);
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

let Header2 = styled.h2`
	font-weight: normal;
	font-family: "GT Planar", sans-serif;
	font-size: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	margin-left: ${(props) => (props.left ? "" : "calc(-1.3rem / 4)")};
`;

let sectionHeaderContainerStyles = {
	left: css`
		grid-column: 1 / span 3;
		font-size: 24px;
		letter-spacing: -0.5;
		padding-left: calc(1.375 * 1.3rem);
		height: 1.3rem;
	`,
	center: css`
		grid-column: 4 / 10;
		font-size: 31px;
		letter-spacing: -1.2;
		padding-left: calc(1.3em);
	`,
};

let SectionHeaderContainer = styled.div`
	grid-column: 1 / span 3;
	grid-row: 1 / -1;
	line-height: 1.3rem;
	height: calc(2 * 1.3rem - 0.75px);
	position: relative;
	${(props) => sectionHeaderContainerStyles[props.left ? "left" : "center"]}
`;

let SectionHeader = ({ left, children }) => {
	let slug = children ? slugify(children) : "";
	let header = (
		<>
			<Asterisk type={left ? "LeftHeader" : "CenterHeader"} />
			<Header2 left={left}>{children}</Header2>
		</>
	);
	return (
		<SectionHeaderContainer left={left} id={slug}>
			{header}
		</SectionHeaderContainer>
	);
};

// TODO: Named this way since PageSection is deprecated for Region
let CorePageSection = ({ left, header, backgroundColor, children }) => {
	let slug = slugify(header);
	return (
		<Region id={slug} backgroundColor={backgroundColor}>
			<SectionHeader left={left}>{header}</SectionHeader>
			<PageSectionContent markdown>{children}</PageSectionContent>
		</Region>
	);
};

let PageSection = styled.section`
	// TODO: Can remove, replace with Region
	grid-column: 1 / -1;
	padding: var(--gap);
	background-color: ${(props) =>
		props.isLightSection ? "inherit" : "var(--off-black)"};
	color: ${(props) =>
		props.isLightSection ? "inherit" : "var(--off-white)"};
	padding-left: calc((100vw - 1440px) / 2);
	padding-right: calc((100vw - 1440px) / 2);
`;

let PageSectionContent = styled(Div)`
	// Using transient props to avoid passing these down to the DOM: https://styled-components.com/docs/api#transient-props
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

	letter-spacing: 0;
	& p:not(:last-child) {
		line-height: 1.3rem;
		margin-bottom: 1.3rem;
		display: inline-block;
	}

	${(props) =>
		!props.$grid
			? css``
			: css`
					display: inherit;
					column-gap: inherit;
					grid-auto-rows: inherit;
					grid-row-gap: inherit;
			  `}
`;

function findLargestFormat(formatDict, maxSize = "large") {
	let formats = ["large", "medium", "small", "thumbnail"];
	formats = formats.slice(formats.indexOf(maxSize), formats.length);
	for (let size in formats) {
		if (formatDict.hasOwnProperty(formats[size])) {
			return formats[size];
		}
	}
}

let WidePageSectionContent = styled(PageSectionContent)`
	grid-column: 4 / -1;

	display: grid;
	grid-template-columns: repeat(9, 1fr);
	gap: var(--gap);
`;

let Highlight = styled.span`
	color: var(--${(props) => props.highlight});
`;

let highlight = function (component, color = "red") {
	return styled(component)`
		border: 1px dotted ${color};
		box-sizing: border-box;
	`;
};

let slugify = function (toSlug) {
	// via https://gist.github.com/codeguy/6684588
	return toSlug
		.normalize("NFKD")
		.toLowerCase()
		.replace(/[^\w\s-]/g, "")
		.trim()
		.replace(/[-\s]+/g, "-");
};

let getBgFromLight = (isLight) => (isLight ? "--off-white" : "--off-black");
let getLightFromBg = (bg) => (bg == "--off-white" ? true : false);

let sizeToVerticalGridInRem = function (heightInPx) {
	let rootFontSizeInPx = 17;
	let rootLineHeightInRem = 1.3;
	return (
		Math.ceil(heightInPx / (rootFontSizeInPx * rootLineHeightInRem)) *
		rootLineHeightInRem
	);
};

export {
	baseGrid,
	expandColor,
	complementaryColor,
	PageContainer,
	Region,
	Markdown,
	Div,
	Spacer,
	PageSplash,
	PageHeading,
	Asterisk,
	PageIntroduction,
	SectionHeader,
	PageSection,
	PageSectionContent,
	WidePageSectionContent,
	findLargestFormat,
	Highlight,
	highlight,
	colorByProp,
	ShiftBy,
	slugify,
	CorePageSection,
	getBgFromLight,
	getLightFromBg,
	sizeToVerticalGridInRem,
	tenureSort,
};
