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

let RegionContainer = styled.div`
	${(props) => colorByProp(props)}
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
	padding-bottom: ${(props) => (props.padded ? "144px" : "initial")};
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
			{asteriskSVG()}
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
	padding: calc(2 * 1.3rem) 0;
	padding-right: none;
	transform: translateY(-4px);
`;

let SectionHeader = (props) => {
	const [randomAsterisk, setRandomAsterisk] = useState(undefined);

	useEffect(() => {
		setRandomAsterisk(asteriskSVG());
	}, []);

	let leftHeader = (
		<>
			<ShiftBy x={0} y={-8}>
				<Asterisk>{randomAsterisk}</Asterisk>
			</ShiftBy>
			<ShiftBy x={0} y={-2}>
				<h2 style={{ height: "1em", "line-height": "1em" }}>
					{props.children}
				</h2>
			</ShiftBy>
		</>
	);
	let centerHeader = (
		<h2 style={{ height: "1em", "line-height": "1em" }}>
			{props.children}
		</h2>
	);
	return (
		<div
			style={{
				display: "flex",
				"align-items": "flex-start",
				height: "100%",
			}}
		>
			{props.isLeftHeader ? leftHeader : centerHeader}
		</div>
	);
};

SectionHeader = styled(SectionHeader)`
	font-family: "GT Planar", sans-serif;
	font-weight: normal;
	grid-column: ${(props) => (props.isLeftHeader ? "1 / span 3" : "4 / 10")};
	display: inline-block;
`;

let PageSection = styled.section`
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
