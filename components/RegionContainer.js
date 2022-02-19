import styled from "styled-components";
import { colorByProp, CorePageSection, Region } from "../components/global.js";

let StyledRegionContainer = styled("div").withConfig({
	// TODO: Unclear why I need the array includes; shouldn't https://styled-components.com/docs/api#transient-props remove those?
	shouldForwardProp: (prop, defaultValidatorFn) => {
		return (
			defaultValidatorFn(prop) &&
			!["content", "backgroundColor"].includes(prop)
		);
	},
})`
	${(props) => colorByProp(props)}
	padding-top: ${(props) =>
		[false, "first"].includes(props.content)
			? "initial"
			// TODO: Rationalize this
			: css`calc(4 * var(--body-line-height))`};
	padding-bottom: ${(props) =>
		[true, "first"].includes(props.content)
			// TODO: Rationalize this
			? css`calc(4 * var(--body-line-height))`};
			: "initial"};
`;

function RegionContainer({
	backgroundColor,
	color,
	content,
	regions,
	children,
}) {
	let pageSectionType = (<CorePageSection />).type;

	return (
		<StyledRegionContainer
			backgroundColor={backgroundColor}
			color={color}
			content={content}
		>
			{regions.map((r, i) =>
				r.type == pageSectionType ? (
					r
				) : (
					<Region key={i} backgroundColor={backgroundColor}>
						{r}
					</Region>
				)
			)}
			{children}
		</StyledRegionContainer>
	);
}

export default RegionContainer;