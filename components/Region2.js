import styled from "styled-components";
import { css } from "styled-components";

// import {
// 	slugify,
// 	SectionHeader,
// 	PageSectionContent,
// } from "../components/global";

// const StyledDiv = styled.div`
// 	margin: 0 auto; // TODO: Any better way to center?
// 	display: grid;
// 	grid-template-columns: repeat(12, 1fr);
// 	column-gap: var(--gap);
// 	grid-auto-rows: min-content;
// 	grid-row-gap: 1.3rem;
// 	max-width: 1440px;
// 	padding-left: var(--gap);
// 	padding-right: var(--gap);

// 	&:not(:last-child) {
// 		margin-bottom: calc(2 * 1.3rem);
// 	}
// `;

// function SectionGrid(props) {
// 	let wideCSS = props.wide
// 		? css`
// 				grid-column: 4 / -1;
// 				grid-template-columns: repeat(9, 1fr);
// 		  `
// 		: css`
// 				grid-column: 4 / 10;
// 				grid-template-columns: repeat(6, 1fr);
// 		  `;

// 	let notGridCSS = props.notGrid
// 		? css``
// 		: css`
// 				display: grid;
// 				grid-column-gap: inherit;
// 				grid-row-gap: inherit;
// 		  `;

// 	let SectionDiv = styled.div`
// 		${wideCSS}
// 		${notGridCSS}
// 	`;

// 	return <SectionDiv {...props} />;
// }

// function Region2({ header, left, backgroundColor, children, wide, ...rest }) {
// 	let region;
// 	if (header) {
// 		let slug = slugify(header);
// 		region = (
// 			<StyledDiv backgroundColor={backgroundColor} {...rest}>
// 				<SectionHeader left={left}>{header}</SectionHeader>
// 				<SectionGrid wide={wide} {...rest}>
// 					{children}
// 				</SectionGrid>
// 			</StyledDiv>
// 		);
// 	} else {
// 		// TODO: Consider whether/how to allow for wide SectionGrid/content here, i.e. wide SectionGrid without a header
// 		region = <StyledDiv {...rest}>{children}</StyledDiv>;
// 	}
// 	return region;
// }

let Region2 = styled.div`
	margin: 0 auto; // TODO: Any better way to center?
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	column-gap: var(--gap);
	grid-auto-rows: min-content;
	grid-row-gap: 1.3rem;
	max-width: 1440px;
	padding-left: var(--gap);
	padding-right: var(--gap);

	&:not(:last-child) {
		margin-bottom: calc(2 * 1.3rem);
	}
`;

export default Region2;
