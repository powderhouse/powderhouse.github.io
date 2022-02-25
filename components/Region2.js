import styled from "styled-components";
import { css } from "styled-components";
import { SectionHeader, baseGrid, colorByProp } from "../components/global";
import { mediaQueries } from "../site-data";

let StyledDiv = styled.div`
	margin: 0 auto; // TODO: Any better way to center?

	/*Why can't I replace below with '$ {baseGrid};' (without space) from global, as in Footer*/
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	column-gap: var(--gap);
	@media ${mediaQueries.uptoTablet} {
		grid-template-columns: repeat(6, 1fr);
		${(props) =>
			props.$content
				? css`
						margin-left: 0;
						max-width: 35em;
				  `
				: ""}
	}
	@media ${mediaQueries.uptoMobile} {
		grid-template-columns: repeat(3, 1fr);
	}
	//////////////////////////////////////////////**////////////

	grid-auto-rows: min-content;
	grid-row-gap: var(--base-line-height);
	max-width: 1440px;
	padding-left: var(--gap);
	padding-right: var(--gap);

	${(props) => colorByProp(props)}

	${(props) => {
		if (props.header) {
			return css`
				padding-top: calc(1 * 1.3rem);
				padding-bottom: calc(1 * 1.3rem);
				&:first-of-type {
					padding-top: 0;
				}
				&:last-of-type {
					padding-bottom: 0;
				}
			`;
		}
	}};

	&:not(:last-of-type) {
		margin-bottom: var(
			--base-line-height
		); // To make sure that spacing before headings for the next section are slightly greater than inter-paragraph headings
	}
`;

function Region2({ header, left, children, ...rest }) {
	let elements = [children];
	if (header) {
		let sectionHeader = (
			<SectionHeader left={left} key={elements.length + 1}>
				{header}
			</SectionHeader>
		);
		elements = [sectionHeader].concat(elements);
	}

	return (
		<StyledDiv header={header} left={left} {...rest}>
			{elements}
		</StyledDiv>
	);
}

export default Region2;
