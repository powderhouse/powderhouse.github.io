// global.js

import { useEffect, useState } from "react";

import styled from "styled-components";
import { css } from "styled-components";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { asteriskSVG } from "../site-data.js";

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

let expandColor = function (colorString) {
	let isCSSVariable = colorString.match(/^--/);
	return isCSSVariable ? `var(${colorString})` : colorString;
};

let complementaryColor = function (colorString) {
	let complements = {
		"--off-white": "--off-black",
	};

	// TODO: Probably want this to be subtler; some colors are not simply inverted
	if (
		Object.keys(complements).filter((k) =>
			Object.values(complements).includes(k)
		).length > 0
	) {
		throw "`complements` has a color which would be overwritten when expanded.";
	} else {
		Object.keys(complements).forEach(
			(k) => (complements[complements[k]] = k)
		);
	}

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

let RegionContainer = styled("div").withConfig({
	// TODO: Unclear why I need the array includes; shouldn't https://styled-components.com/docs/api#transient-props remove those?
	shouldForwardProp: (prop, defaultValidatorFn) => {
		return (
			defaultValidatorFn(prop) &&
			!["content", "backgroundColor"].includes(prop)
		);
	},
})`
	${(props) => colorByProp(props)}
	padding-top: ${(props) =>
		[false, "first"].includes(props.content)
			? "initial"
			: "calc(4 * 1.3rem)"};
	padding-bottom: ${(props) =>
		[true, "first"].includes(props.content)
			? "calc(4 * 1.3rem)"
			: "initial"};
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

let Markdown = (props) => (
	<ReactMarkdown
		components={{ strong: "b" }}
		rehypePlugins={[rehypeRaw]}
		{...props}
	/>
);

let Div = (props) =>
	props.markdown ? <Markdown {...props} /> : <div {...props} />;

let Spacer = styled.div``;

const baseGrid = css`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: var(--gap);
`;

let PageSplash = styled.div`
	grid-column: 1 / -1;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	min-height: calc(29 * 1.3rem);

	padding: calc(1 * 1.3rem) 0;
`;

let PageHeading = styled.h1`
	font-family: "GT Planar", sans-serif;
	font-size: 166px;
	letter-spacing: -4.8px;
	font-weight: 300;
	line-height: 1em;
	transform: translate(-3px, calc(1.3rem / 2 - 1px));
`;

let PageTableOfContents = styled.ol`
	list-style-type: none;
	padding: 0;
	margin: 0;
	padding-bottom: calc(3 * 1.3rem);
	position: relative;
	left: calc(var(--gap) - 7px);
`;

let PageTOCListItem = styled.li`
	padding-bottom: calc(1.3rem / 2);
`;

let PageTOCLink = styled.a`
	display: flex;
	align-items: center;
	transition: 0.8s ease;
	text-decoration: none;
	position: relative;

	&:hover {
		transform: translateX(var(--gap));
	}
`;

let asteriskContainerStyles = {
	TOC: css`
		position: absolute;
		left: calc(-1.375 * 1.3em + 4px);
	`,
	LeftHeader: css`
		position: absolute;
		left: calc(-1.3rem / 2);
		top: calc(-1.3rem / 2);
	`,
	CenterHeader: css`
		position: absolute;
		left: calc(-0.625 * 1.3rem);
		top: calc(-1.3rem / 2 - 3.5px);
	`,
};

let AsteriskContainer = styled.div`
	height: calc(1.375 * 1.3em);
	width: calc(1.375 * 1.3em);
	transform-origin: 50% 50%;
	// margin-right: -1px;
	transform: ${(props) => `rotate(${props.rotation}deg)`};

	${(props) => asteriskContainerStyles[props.type]}
`;

let Asterisk = (props) => {
	const [randomRotation, setRandomRotation] = useState(null);
	useEffect(() => {
		setRandomRotation(randomRotation);
	}, []);

	return (
		<AsteriskContainer rotation={randomRotation} type={props.type}>
			{asteriskSVG(props.color ? props.color : "off-black")}
		</AsteriskContainer>
	);
};

let PageIntroduction = styled.div`
	grid-column: 1 / span 9;
	font-family: "GT Planar", sans-serif;
	font-weight: 300;
	font-size: 34px;
	line-height: calc(2 * 1.3rem);
	letter-spacing: -0.5;
	padding-right: none;
	padding-top: calc(1 * 1.3rem);
`;

let Header2 = styled.h2`
	font-weight: normal;
	font-family: "GT Planar", sans-serif;
	font-size: inherit;
	line-height: inherit;
	letter-spacing: inherit;
`;

let sectionHeaderContainerStyles = {
	left: css`
		grid-column: 1 / span 3;
		font-size: 24px;
		letter-spacing: -0.5;
		padding-left: calc(1.375 * 1.3rem)
	`,
	center: css`
		grid-column: 4 / 10;
		font-size: 31px;
		letter-spacing: -1.2;
		padding-left: calc(1.3em)
	`,
}
let SectionHeaderContainer = styled.div`
	grid-column: 1 / span 3;
	line-height: 1.3rem;
	height: calc(2 * 1.3rem - 0.75px);
	position: relative;
	${props => sectionHeaderContainerStyles[props.left ? "left" : "center"]}
`;

let SectionHeader = ({ left, children }) => {
	let header = (
		<>
			<Asterisk type={ left ? "LeftHeader" : "CenterHeader" }/>
			<Header2>{children}</Header2>
		</>
	);
	return (
		<SectionHeaderContainer left={left}>{header}</SectionHeaderContainer>
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
	grid-column: 4 / 10;
	letter-spacing: 0;

	& p {
		line-height: 1.3rem;
		margin-bottom: 1.3rem;
		display: inline-block;
	}
`;

let FullBleedImage = styled.div`
	// Taken from https://css-tricks.com/full-bleed/ - suggests it may require overflow-x: hidden; on the containing div, in some contexts
	width: 100vw;
	position: relative;
	left: 50%;
	right: 50%;
	margin-left: -50vw;
	margin-right: -50vw;

	padding: var(--gap) 0px;
`;

let FullBodyImage = styled.div`
	padding: var(--gap) 0px;
`;

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

export {
	baseGrid,
	PageContainer,
	Region,
	RegionContainer,
	Markdown,
	Div,
	Spacer,
	PageSplash,
	PageHeading,
	PageTableOfContents,
	PageTOCListItem,
	PageTOCLink,
	Asterisk,
	PageIntroduction,
	SectionHeader,
	PageSection,
	PageSectionContent,
	WidePageSectionContent,
	FullBleedImage,
	FullBodyImage,
	Highlight,
	highlight,
	colorByProp,
	ShiftBy,
	slugify,
};
