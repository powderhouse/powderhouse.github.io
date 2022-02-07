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
			: "calc(4 * 1.3rem)"};
	padding-bottom: ${(props) =>
		[true, "first"].includes(props.content)
			? "calc(4 * 1.3rem)"
			: "initial"};
`;

function RegionContainer({ backgroundColor, color, content, ...rest }) {
	let pageSectionType = (<CorePageSection />).type;

	return (
		<StyledRegionContainer
			backgroundColor={backgroundColor}
			color={color}
			content={content}
			{...rest}
		/>
	);
}

export default RegionContainer;