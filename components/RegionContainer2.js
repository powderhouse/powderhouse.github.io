import styled from "styled-components";
import { colorByProp } from "../components/global.js";

const BREAKPOINTS = {
	mobileMax: 550,
	tabletMax: 1100,
	laptopMax: 1440,
	minLaptop: 1440.1,
};

const mediaQueries = {
	uptoMobile: `(max-width: ${BREAKPOINTS.mobileMax}px)`,
	uptoTablet: `(max-width: ${BREAKPOINTS.tabletMax}px)`,
	uptoLaptop: `(max-width: ${BREAKPOINTS.laptopMax}px)`,
	minLaptop: `(min-width: ${BREAKPOINTS.minLaptop}px)`,
};

let stylesByMedia = {
	// A dictionary of styles to apply per media query
	uptoMobile: {
		"padding-top": `calc(4 * 1.3rem)`,
		"padding-bottom": `calc(4 * 1.3rem)`,
	},
	uptoTablet: {
		"padding-top": `calc(4 * 1.3rem)`,
		"padding-bottom": `calc(4 * 1.3rem)`,
	},
	uptoLaptop: {
		"padding-top": `calc(4 * 1.3rem)`,
		"padding-bottom": `calc(4 * 1.3rem)`,
	},
	minLaptop: {
		"padding-top": `calc(4 * 1.3rem)`,
		"padding-bottom": `calc(4 * 1.3rem)`,
	},
};

let mq = function (media) {
	// A function which wraps its argument in the right media query
	return (style) => `@media ${mediaQueries[media]} {\n${style}\n}`;
};

let getPadding = (media, props) => {
	let paddings = Object.keys(stylesByMedia[media]).filter((s) =>
		s.match(/^padding-/)
	);
	let paddingString = paddings
		.map(
			// Create padding-top and bottom strings
			(padding) => {
				let direction = padding.match(/padding-(top|bottom)/)[1];
				return (
					`${padding}: ${
						props.pad && props.pad.includes(direction)
							? stylesByMedia[media][padding]
							: "initial"
					}` + ";"
				);
			}
		)
		.join("\n");
	return paddingString;
};

let getMediaQueryStyles = (props) => {
	// This constructs the media queries for the paddings for regions.  Note that we only handle padding here.

	// Grab the media types to iterate over
	let mediaTypes = Object.keys(mediaQueries);
	let mediaQueryWrappedPadding = mediaTypes
		.map((media) => {
			// For each media type, construct styles
			let styles = [
				getPadding(media, props), // Right now, we only have padding, but you can add strings to this array to have wrapped in media queries as appropriate
			].join("\n");
			return mq(media)(styles); // and return those padding-top and bottom strings wrapped in the appropriate media query
		})
		.join("\n");

	// At this point, mediaQueryWrappedPadding looks something like
	// 	@media (max-width: 550px) {
	// padding-top: …;
	// padding-bottom: …;
	// }
	// @media (max-width: 1100px) {
	// padding-top: …;
	// padding-bottom: …;
	// }
	// @media (max-width: 1440px) {
	// padding-top: …;
	// padding-bottom: …;
	// }
	// @media (min-width: 1440.1px) {
	// padding-top: …;
	// padding-bottom: …;
	// }

	return mediaQueryWrappedPadding;
};

let RegionContainer = styled("div")`
	position: relative;

	${(props) => colorByProp(props)}
	${(props) => getMediaQueryStyles(props)}
`;

// Older, non-media query version— Keeping until we finalize (14 February 2022)
// let RegionContainer = styled("div")
// 	position: relative;
// 	${(props) => colorByProp(props)}
// 	padding-top: ${(props) =>
// 		props.pad
// 			? props.pad.includes("top")
// 				? "calc(4 * 1.3rem)"
// 				: "initial"
// 			: "initial"};
// 	padding-bottom: ${(props) =>
// 		props.pad
// 			? props.pad.includes("bottom")
// 				? "calc(4 * 1.3rem)"
// 				: "initial"
// 			: "initial"};
// `;

export default RegionContainer;
