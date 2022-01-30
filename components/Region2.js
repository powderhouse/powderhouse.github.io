import styled from "styled-components";

const StyledDiv = styled.div`
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

function Region2({ header, left, backgroundColor, children, ...rest }) {
	let region;
	if (header) {
		let slug = slugify(header);
		region = (
			<StyledDiv id={slug} backgroundColor={backgroundColor} {...rest}>
				<SectionHeader left={left}>{header}</SectionHeader>
				<PageSectionContent markdown>{children}</PageSectionContent>
			</StyledDiv>
		);
	} else {
		region = <StyledDiv {...rest}>{children}</StyledDiv>;
	}
	return region;
}

export default Region2;
