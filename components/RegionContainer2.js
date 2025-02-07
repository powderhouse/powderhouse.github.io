import styled from "styled-components";
import { colorByProp, colorStyleByProp } from "../components/global.js";
import { mediaQueries } from "../site-data.js";

let stylesByMedia = {
	// A dictionary of styles to apply per media query
	// TODO: Rationalize this
	uptoMobile: {
		"padding-top": `calc(4 * var(--vertical-rhythm))`,
		"padding-bottom": `calc(4 * var(--vertical-rhythm))`,
	},
	uptoTablet: {
		"padding-top": `calc(4 * var(--vertical-rhythm))`,
		"padding-bottom": `calc(4 * var(--vertical-rhythm))`,
	},
	uptoLaptop: {
		"padding-top": `calc(4 * var(--vertical-rhythm))`,
		"padding-bottom": `calc(4 * var(--vertical-rhythm))`,
	},
	minLaptop: {
		"padding-top": `calc(4 * var(--vertical-rhythm))`,
		"padding-bottom": `calc(4 * var(--vertical-rhythm))`,
	},
};

// TODO: Make use of this consistent; we use it nowhere else
let mq = function (media) {
	// A function which wraps its argument in the right media query
	return (style) => `@media ${mediaQueries[media]} {\n${style}\n}`;
};

let getPaddingString = (media, props) => {
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

let getPaddingStyle = (props) => {
	let paddingStyle = {};
	if (props.pad) {
		props.pad.forEach(
			(p) =>
				(paddingStyle[
					`padding${p.charAt(0).toUpperCase}${p.slice(1)}`
				] = `calc(4 * var(--vertical-rhythm))`)
		); // TODO: Total hack to work around breaking RegionContainer styling
	}
	return paddingStyle;
};

let getMediaQueryStyles = (props) => {
	// This constructs the media queries for the paddings for regions.  Note that we only handle padding here.

	// Grab the media types to iterate over
	let mediaTypes = Object.keys(mediaQueries);
	let mediaQueryWrappedPadding = mediaTypes
		.map((media) => {
			// For each media type, construct styles
			let styles = [
				getPaddingString(media, props), // Right now, we only have padding, but you can add strings to this array to have wrapped in media queries as appropriate
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

let RegionContainer = styled.div.attrs((props) => ({
	className: `region-container ${props.className ? props.className : ""}`,
	style: Object.assign({}, colorStyleByProp(props), getPaddingStyle(props)), // TODO: No idea why this is needed instead of colorByProp below.  So frustrating.
}))`
	position: relative;

	${(props) => colorByProp(props)}
	${(props) => getMediaQueryStyles(props)}
	&:last-of-type {
		padding-bottom: 0;
	}
`;

export default RegionContainer;
