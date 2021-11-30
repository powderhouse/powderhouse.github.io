// global.js

import styled from 'styled-components';
import { css } from 'styled-components';

let gap = 24;

const baseGrid = css`
  	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: ${gap}px;
`;

let PageContainer = styled.div`
	--off-black:rgb(42, 46, 47); /* #2A2E2F */
	--off-white:rgb(245, 243, 239); /* #F5F3EF */
	--purple:rgb(178, 131, 200); /* #B283C8 */
	--yellow:rgb(255, 200, 93); /* #FFC85D */
	--green:rgb(50, 131, 90); /* #32835A */
	--blue:rgb(128, 210, 236); /* #80D2EC */
	--red:rgb(226, 87, 87); /* #E25757 */

	background-color:var(--off-white);
	color:var(--off-black);
`;

let PageSplash = styled.div`
	grid-column: 1 / -1;

	min-height: 20rem;
	border: 1px dotted black;
	background-color:var(--${props => props.bgColor});
	color:var(--${props => props.color});
`;

let PageHeader = styled.h1`
	font-family: 'GT Planar Light',sans-serif;
	font-size: 166px;
	line-height: 1em;
	letter-spacing: -6;
`;

let PageTableOfContents = styled.ol`
	list-style-type:none;
	padding:0;
	margin:0;
`;

let PageIntro = styled.div`
	grid-column: 1 / span 9;

	border: 1px dotted black;
	font-size: 2rem;
	font-family: 'GT Planar Light',sans-serif;
	font-size: 38px;
	line-height: 1.1em;
	letter-spacing: -0.5;
`;

let LeftHeader = styled.div`
	grid-column: 1 / span 3;
	border: 1px dotted black;
`;

let CenterHeader = styled.h2`
`;

let PageSection = styled.section`
	grid-column: 1 / -1;
`;

let DarkPageSection = styled(PageSection)`
	background-color:var(--off-black);
	color:var(--off-white);
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

	padding: ${gap}px 0px;
`;

let FullBodyImage = styled.div`
	padding: ${gap}px 0px;
`;

let WidePageSectionContent = styled(PageSectionContent)`
	grid-column: 4 / -1;

	display:grid;
	grid-template-columns:repeat(9,auto);
	gap: ${gap}px;
`

let Highlight = styled.span`
  color: var(--${props => props.highlight});
`;

export { 
	gap,
	baseGrid,
	PageContainer,
	PageSplash,
	PageHeader,
	PageTableOfContents,
	PageIntro,
	LeftHeader,
	CenterHeader,
	PageSection,
	DarkPageSection,
	PageSectionContent,
	WidePageSectionContent,
	FullBleedImage,
	FullBodyImage,
	Highlight,
};