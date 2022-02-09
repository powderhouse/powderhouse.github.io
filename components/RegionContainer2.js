import styled from "styled-components";
import { colorByProp, CorePageSection, Region } from "../components/global.js";

let RegionContainer = styled("div")`
	${(props) => colorByProp(props)}
	padding-top: ${(props) =>
		props.pad
			? props.pad.includes("top")
				? "calc(4 * 1.3rem)"
				: "initial"
			: "initial"};
	padding-bottom: ${(props) =>
		props.pad
			? props.pad.includes("bottom")
				? "calc(4 * 1.3rem)"
				: "initial"
			: "initial"};
`;

export default RegionContainer;
