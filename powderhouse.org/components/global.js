// global.js

import styled from 'styled-components';
import { css } from 'styled-components';

const colors = css`
	--off-black:rgb(42, 46, 47); /* #2A2E2F */
	--off-white:rgb(245, 243, 239); /* #F5F3EF */
	--purple:rgb(178, 131, 200); /* #B283C8 */
	--yellow:rgb(255, 200, 93); /* #FFC85D */
	--green:rgb(50, 131, 90); /* #32835A */
	--blue:rgb(128, 210, 236); /* #80D2EC */
	--red:rgb(226, 87, 87); /* #E25757 */
`;

const baseGrid = css`
  	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: 24px;
`;

let PageContainer = styled.div`
	
`;

let PageSplash = styled.div`
	grid-column: 1 / -1;
	min-height: 20rem;
	border: 1px dotted black;
`;

let PageTableOfContents = styled.ol`
	
`;

let PageIntro = styled.div`
	grid-column: 1 / span 9;
	border: 1px dotted black;
	font-size: 2rem;
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
	color: white;
	background: black;
`;

let PageSectionContent = styled.div`
	grid-column: 4 / 10;
`;

let FullBleedImage = styled.img`
	
`;

let FullBodyImage = styled.img`
	width:100%;	
`;

let WidePageSectionContent = styled(PageSectionContent)`
	grid-column: 4 / -1;

	display:grid;
	grid-template-columns:repeat(9,auto);
	gap: 24px;
`

export { 
	colors,
	baseGrid,
	PageContainer,
	PageSplash,
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
};