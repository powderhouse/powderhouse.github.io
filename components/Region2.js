import styled from "styled-components";
import { css } from "styled-components";
import { complementaryColor } from "../components/global";

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
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : "initial"};
	color: ${(props) =>
		props.color
			? props.color
			: props.backgroundColor
			? complementaryColor(props.backgroundColor)
			: "initial"}

	&:not(:last-child) {
		margin-bottom: calc(2 * 1.3rem);
	}
`;

export default Region2;
