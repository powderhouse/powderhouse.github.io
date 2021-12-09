// global.js

import styled from 'styled-components';
import { css } from 'styled-components';

let PageContainer = styled.div`
	--off-black:rgb(42, 46, 47); /* #2A2E2F */
	--off-white:rgb(245, 243, 239); /* #F5F3EF */
	--purple:rgb(178, 131, 200); /* #B283C8 */
	--yellow:rgb(255, 200, 93); /* #FFC85D */
	--green:rgb(50, 131, 90); /* #32835A */
	--blue:rgb(128, 210, 236); /* #80D2EC */
	--red:rgb(226, 87, 87); /* #E25757 */
	--gap:24px;

	background-color:var(--off-white);
	color:var(--off-black);
	gap:0px !important;
`;

const baseGrid = css`
  display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: var(--gap);
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
`;

let PageTOCListItem = styled.li`
	&:not(:last-child) {
		padding-bottom:10px;
	}
`;

let PageTOCLink = styled.a`
	text-decoration:none;
`;

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

export { 
	baseGrid,
	PageContainer,
	PageSplash,
	PageHeader,
	PageTableOfContents,
	PageTOCListItem,
	PageTOCLink,
	PageIntro,
	SectionHeader,
	PageSection,
	PageSectionContent,
	WidePageSectionContent,
	FullBleedImage,
	FullBodyImage,
	Highlight,
};