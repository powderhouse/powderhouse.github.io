import styled from "styled-components";

import {
	slugify,
	SectionHeader,
	PageSectionContent,
} from "../components/global";

const StyledDiv = styled.div`
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

let WideDiv = styled.div`
	grid-column: 4 / -1;
	grid-template-columns: repeat(9, 1fr);
`;

let SectionGrid = styled.div`
	display: grid;
	${(props) => {
		if (props.wide) {
			return `
			grid-column: 4 / -1;
			grid-template-columns: repeat(9, 1fr);
			`;
		} else {
			return `
			grid-column: 4 / 10;
			grid-template-columns: repeat(6, 1fr)
			`;
		}
	}}
	grid-column-gap: inherit;
	grid-row-gap: inherit;
`;

function Region2({ header, left, backgroundColor, children, wide, ...rest }) {
	let region;
	if (header) {
		let slug = slugify(header);
		region = (
			<StyledDiv id={slug} backgroundColor={backgroundColor} {...rest}>
				<SectionHeader left={left}>{header}</SectionHeader>
				<SectionGrid wide={wide}>{children}</SectionGrid>
			</StyledDiv>
		);
	} else {
		// TODO: Consider whether/how to allow for wide SectionGrid/content here, i.e. wide SectionGrid without a header
		region = <StyledDiv {...rest}>{children}</StyledDiv>;
	}
	return region;
}

export default Region2;

// if (wide) {
// 		region = (
// 			<StyledDiv
// 				id={header ? slugify(header) : undefined}
// 				backgroundColor={backgroundColor}
// 				{...rest}
// 			>
// 				<WideDiv>
// 					{header ? (
// 						<SectionHeader left={left}>{header}</SectionHeader>
// 					) : (
// 						"!"
// 					)}
// 					<PageSectionContent markdown>{children}</PageSectionContent>
// 				</WideDiv>
// 			</StyledDiv>
// 		);
// 	} else {
// 		region = (
// 			<StyledDiv
// 				id={header ? slugify(header) : undefined}
// 				backgroundColor={backgroundColor}
// 				{...rest}
// 			>
// 				{header ? (
// 					<SectionHeader left={left}>{header}</SectionHeader>
// 				) : (
// 					"@"
// 				)}
// 				<PageSectionContent markdown>{children}</PageSectionContent>
// 			</StyledDiv>
// 		);
// 	}
