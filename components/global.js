// global.js

import styled from 'styled-components';
import { css } from 'styled-components';

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

let expandColor = function(colorString) {
	let isCSSVariable = colorString.match(/^--/);
	return (isCSSVariable ? `var(${colorString})` : colorString);
}

let complementaryColor = function(colorString) {
	let complements = {
		'--off-white': '--off-black',
	}
	if (Object.keys(complements).filter(k => Object.values(complements).includes(k)).length > 0) {
		throw "`complements` has a color which would be overwritten when expanded."
	}
	else {
		Object.keys(complements).forEach((k) => complements[complements[k]] = k);
	}

	return ((colorString in complements) ? expandColor(complements[colorString]) : "unset");
}

let PageContainer = styled.div`
	background-color:var(--off-white);
	color:var(--off-black);
`;

let RegionContainer = styled.div`
  width: 100vw;
  ${(props) => {
  	let backgroundColorString = props.backgroundColor ? props.backgroundColor : "initial";
  	let colorString = props.color ? props.color : complementaryColor(backgroundColorString);
  	return `
  		background-color: ${expandColor(backgroundColorString)};
  		color: ${expandColor(colorString)};
  	`
  }}
  display: grid;
`;

let Region = styled.div`
  display: grid;
  place-self: center;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gap);
  grid-auto-rows: minmax(100px, auto);
  max-width: 1440px;
  padding-left: var(--gap);
  padding-right: var(--gap);
  padding-bottom: ${(props) => props.padded ? "144px" : "initial"};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "initial"};
`;

let Markdown = (props) => <ReactMarkdown rehypePlugins={[rehypeRaw]} {...props} />;

let Div = (props) =>  (props.markdown ? <Markdown {...props} /> : <div {...props} />);

let Spacer = styled.div``;

const baseGrid = css`
  display: grid;git
	grid-template-columns: repeat(12, 1fr);
	gap: 12px;
  grid-auto-rows: minmax(100px, auto);
`;

let PageSplash = styled.div`
	grid-column: 1 / -1;

	display:flex;
	flex-direction:column;
	justify-content:space-between;

	min-height: 640px; /*TK Explicit?*/
	border: 1px dotted black;
	background-color:var(--${props => props.bgColor});
	color:var(--${props => props.color});
	padding:0px var(--gap);
`;

let PageHeader = styled.h1`
	font-family: 'GT Planar Light',sans-serif;
	font-size: 166px;
	line-height: 1em;
	letter-spacing: -6;
	padding-top:44px; /*TK Explicit?*/
`;

let PageTableOfContents = styled.ol`
	list-style-type:none;
	padding:0;
	padding-bottom:var(--gap);
	margin:0;
	width:33%;
`;

let PageTOCListItem = styled.li`
	display:flex;

	&:not(:last-child) {
		padding-bottom:10px;
	}
`;

let PageTOCLink = styled.a`
	display:flex;
	align-items:center;

	text-decoration:none;
`;

let Asterisk = styled.div`
	height:1.5rem;
	width:1.5rem;
	margin-right:10px;
`;

let randomNum = Math.random();

let PageIntro = styled.div`
	grid-column: 1 / span 9;

	border: 1px dotted black;
	font-size: 2rem;
	font-family: 'GT Planar Light',sans-serif;
	font-size: 38px;
	line-height: 1.1em;
	letter-spacing: -0.5;
	padding:var(--gap);
	padding-right:none;
`;

let SectionHeader = styled.h2`
	grid-column: ${props => props.isLeftHeader ? "1 / span 3" : "4 / 10"};
	border: 1px dotted black;
`;

let PageSection = styled.section`
	grid-column: 1 / -1;
	padding:var(--gap);
	background-color:${props => props.isLightSection ? "inherit" : "var(--off-black)"};
	color:${props => props.isLightSection ? "inherit" : "var(--off-white)"};
	padding-left: calc((100vw - 1440px)/2);
	padding-right: calc((100vw - 1440px)/2);
`;

let PageSectionContent = styled.div`
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

	display:grid;
	grid-template-columns:repeat(9,1fr);
	gap: var(--gap);
`;

let Highlight = styled.span`
  color: var(--${props => props.highlight});
`;

let randomRotate = function randomRotate() {
		return "rotate("+(Math.random()*360)+"deg)"
	};

let highlight = function(component, color = 'red') {
	return styled(component)`
		border: 1px dotted ${color};
	  box-sizing: border-box;
	`;
}

export { 
	baseGrid,
	PageContainer,
	Region,
	RegionContainer,
	Markdown,
	Div,
	Spacer,
	PageSplash,
	PageHeader,
	PageTableOfContents,
	PageTOCListItem,
	PageTOCLink,
	Asterisk,
	randomNum,
	PageIntro,
	SectionHeader,
	PageSection,
	PageSectionContent,
	WidePageSectionContent,
	FullBleedImage,
	FullBodyImage,
	Highlight,
	randomRotate,
	highlight,
};