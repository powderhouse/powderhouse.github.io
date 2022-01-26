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
	shouldForwardProp: (prop, defaultValidatorFn) => { return defaultValidatorFn(prop) && !["content", "backgroundColor"].includes(prop) },
})`
	${(props) => colorByProp(props)}
	${(props) =>
		props.content ? "padding-bottom: 10rem" : "padding-bottom: initial"}
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
`;

let Markdown = (props) => (
	<ReactMarkdown rehypePlugins={[rehypeRaw]} {...props} />
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
	transform: translate(-3px, 2px);
`;

let PageTableOfContents = styled.ol`
	list-style-type: none;
	padding: 0;
	margin: 0;
	transform: translateY(1px);
`;

let PageTOCListItem = styled.li`
	height: calc(2 * 1.3rem);
`;

let PageTOCLink = styled.a`
	display: flex;
	align-items: center;
	transition: 0.8s ease;
	text-decoration: none;
	transform: translateY(-1rem) translateX(0);

	&:hover {
		transform: translateY(-1rem) translateX(var(--gap));
	}
`;

let AsteriskContainer = styled.div`
	height: 2.5rem;
	width: 2.5rem;
	transform-origin: 50% 50%;
	margin-right: -1px;
	transform: ${(props) => `rotate(${props.rotation}deg)`};
`;

let Asterisk = (props) => {
	const [randomRotation, setRandomRotation] = useState(null);
	useEffect(() => {
		setRandomRotation(Math.round(Math.random() * 360));
	}, []);

	return (
		<AsteriskContainer rotation={randomRotation}>
			{asteriskSVG(props.color ? props.color : "off-black")}
		</AsteriskContainer>
	);
};

let PageIntroduction = styled.div`
	grid-column: 1 / span 9;
	font-family: "GT Planar", sans-serif;
	font-weight: 300;
	font-size: 38px;
	line-height: 1.1em;
	letter-spacing: -0.5;
	padding: calc(2 * 1.3rem - 0.5px) 0; // TODO: Why -0.5px?
	padding-right: none;
`;

let Header2 = styled.h2`
	font-weight: normal;
	font-family: "GT Planar", sans-serif;
	font-size: inherit;
	line-height: inherit;
	letter-spacing: inherit;
`;
let SectionHeaderContainer = styled.div`
	grid-column: 1 / span 3;
	display: flex;
	align-items: flex-start;
	height: 100%;
	grid-column: ${props => props.left ? "1 / span 3" : "4 / 10"};
	font-size: ${props => props.left ? "24px" : "31px"};
	line-height: ${props => props.left ? "73%" : "73%"};
	letter-spacing: ${props => props.left ? "-0.5" : "-1.2"};
	padding-bottom: ${props => props.left ? "-0.5" : "-1.2"};
`;

let SectionHeader = (props) => {
	let header = (
		<>
			<ShiftBy x={-11} y={props.left ? -7 : -7 + 6}>
				<Asterisk />
			</ShiftBy>
			<ShiftBy x={-11} y={props.left ? 3 : 3 + 4}>
				<Header2>{props.children}</Header2>
			</ShiftBy>
		</>
	);
	return (
		<SectionHeaderContainer left={props.left}>
			{header}
		</SectionHeaderContainer>
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
	font-family: "GT Planar", sans-serif;
	font-weight: normal;
	font-size: 17px;
	letter-spacing: 0;
	line-height: 1.15rem;

	& p {
		padding-top: 2.5px; // TODO: Why is this necessary?
		padding-bottom: calc(1.3rem - 4.25px);
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
