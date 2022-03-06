import styled from "styled-components";
import { css } from "styled-components";
import { slugify } from "../components/global.js";
import Asterisk from "../components/Asterisk.js";
import { mediaQueries } from "../site-data.js";

let Header2 = styled.h2`
	font-weight: 300;
	font-family: "GT Planar", sans-serif;
	font-size: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	margin-left: ${
		(props) => (props.left ? "" : css`calc(1em/3)`) //Aligned optically
	};

	@media ${mediaQueries.uptoMobile} {
		// TODO: Implement type hierarchy
	}
`;

let sectionHeaderContainerStyles = {
	left: css`
		grid-column: 1 / span 3;
		font-size: var(--xlarge-font-size);
		line-height: var(--xlarge-line-height);
		letter-spacing: -0.5px;

		position: relative;
		top: -4px;
		padding-left: 0.875em;

		@media ${mediaQueries.uptoTablet} {
			grid-column: 1 / -1;
		}
		@media ${mediaQueries.uptoMobile} {
			top: 0;
		}
	`,
	center: css`
		grid-column: 4 / 10;
		font-size: var(--xlarge-font-size);
		line-height: var(--xlarge-line-height);
		letter-spacing: -1.2px;
		padding-left: 1em;
		@media ${mediaQueries.uptoTablet} {
			// This matches the left header, as left headers *become* center headers on mobile/tablet
			grid-column: 1 / -1;
			font-size: var(--large-font-size);
			line-height: var(--large-line-height);
			letter-spacing: -0.5px;

			position: relative;
			top: -4px;
			padding-left: 1em; // This visually centers the asterisk on the left vertical line of the page
		}
	`,
};

let SectionHeaderContainer = styled.div`
	grid-column: 1 / span 3;
	grid-row: 1 / -1;
	// TODO: Review usage of em line-heights in light of https://css-tricks.com/almanac/properties/l/line-height/#aa-unitless-line-heights
	line-height: 1.35em;
	position: relative;
	transform: ${(props) =>
		props.left ? css`translateY(-8px)` : css`translateX(-6px)`};
	${(props) => sectionHeaderContainerStyles[props.left ? "left" : "center"]}

	@media ${mediaQueries.uptoTablet} {
		grid-column: 1 / -1;
	}
	@media ${mediaQueries.uptoMobile} {
		transform: translateY(
			0
		); // TODO: Check whether this transform and the "top" positioning of the SectionHeaderContaineer can be combined
	}
`;

let SectionHeader = ({ left, children }) => {
	let slug = children ? slugify(children) : "";
	let header = (
		<>
			<Asterisk $type={left ? "LeftHeader" : "CenterHeader"} />
			<Header2 left={left}>{children}</Header2>
		</>
	);
	return (
		<SectionHeaderContainer left={left} id={slug}>
			{header}
		</SectionHeaderContainer>
	);
};

export default SectionHeader;
