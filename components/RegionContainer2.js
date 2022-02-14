import styled from "styled-components";
import { colorByProp } from "../components/global.js";

const BREAKPOINTS = {
	mobileMax: 550,
	tabletMax: 1100,
	laptopMax: 1440,
};
const mediaQueries = {
	uptoMobile: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
	uptoTablet: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
	uptoLaptop: `(max-width: ${BREAKPOINTS.laptopMax}px)`,
};

let mediaQueryWrap = function (mq) {
	return (style) => `@media ${mediaQueries[mq]} { ${style} }`;
};

let paddingByMedia = {
	top: {
		uptoMobile: `calc(4 * 1.3rem)`,
		uptoTablet: `calc(4 * 1.3rem)`,
		uptoLaptop: `calc(4 * 1.3rem)`,
	},
	bottom: {
		uptoMobile: `calc(4 * 1.3rem)`,
		uptoTablet: `calc(4 * 1.3rem)`,
		uptoLaptop: `calc(4 * 1.3rem)`,
	},
};

// let RegionContainer = styled("div")`
// 	position: relative;
// 	${(props) => colorByProp(props)}

// 	${(props) =>
// 		["top", "bottom"].map((direction) =>
// 			props.pad.includes(direction)
// 				? Object.keys(mediaQueries).map(
// 						(mq) =>
// 							mediaQueryWrap(
// 								mq
// 							)`padding-${direction}: ${paddingByMedia[direction][mq]}`
// 				  )
// 				: `initial`
// 		)}
// `;

let RegionContainer = styled("div")`
	position: relative;
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