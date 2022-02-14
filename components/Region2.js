import styled from "styled-components";
import { css } from "styled-components";
import { complementaryColor, SectionHeader } from "../components/global";
import { mediaQueries } from "../site-data";

let StyledDiv = styled.div`
	margin: 0 auto; // TODO: Any better way to center?
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	column-gap: var(--gap);
	grid-auto-rows: min-content;
	grid-row-gap: 1.3rem;
	max-width: 1440px;
	padding-left: var(--gap);
	padding-right: var(--gap);
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : "initial"};

	${(props) => {
		if (props.color) {
			return css`
				color: ${props.color};
			`;
		} else if (props.backgroundColor) {
			return css`
				color: ${complementaryColor(props.backgroundColor)};
			`;
		} else {
			return css`
				color: "initial";
			`;
		}
	}}

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

	@media ${mediaQueries.mobile} {
		grid-template-columns: repeat(3, 1fr);
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
		<StyledDiv header={header} left={left}>
			{elements}
		</StyledDiv>
	);
}

export default Region2;
