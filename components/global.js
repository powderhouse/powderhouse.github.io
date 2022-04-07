// global.js
import dynamic from "next/dynamic";
import { css } from "styled-components";
import { mediaQueries } from "../site-data.js";

const Markdown = dynamic(() => import("../components/Markdown.js"));
let Div = (props) =>
	props.markdown ? <Markdown {...props} /> : <div {...props} />;

let ShiftBy = function ({ x = 0, y = 0, children, ...delegated }) {
	// via https://www.joshwcomeau.com/css/pixel-perfection/
	return (
		<div
			{...delegated}
			style={{
				transform: `translate(${x}px, ${y}px)`,
			}}
		>
			{children}
		</div>
	);
};

let tenureSort = function (
	firstSortField = (x) => x.YearStart,
	secondSortField = (x) => x.YearEnd,
	breakevenField = (x) => x.Name,
	order = "ascending" // TODO: The order is a bad design: We may want to order ascending on some and descending on others; right now breakevenField is just hardcoded to invert!
) {
	// Generates a comparator suitable for use in comparing tenures.  Useful for sorting proejcts or people.  `startField` and `endField` are the fields containing start and end dates, expected to be years.  `breakevenField` is another field to be compared lexicographically in case years are equal.

	let ascending = (a, b) => {
		// Sort first by starting year, then ending year, then alphabetical
		if (firstSortField(a) < firstSortField(b)) {
			return -1;
		} else if (firstSortField(a) > firstSortField(b)) {
			return 1;
		} else {
			if (secondSortField(a) < secondSortField(b)) {
				return -1;
			} else if (secondSortField(a) > secondSortField(b)) {
				return 1;
			} else {
				// via https://stackoverflow.com/a/60922998
				return (
					-1 *
					breakevenField(a).localeCompare(breakevenField(b), "en", {
						sensitivity: "base",
					})
				);
			}
		}
	};

	return order == "ascending" ? ascending : (a, b) => -1 * ascending(a, b);
};

let expandColor = function (colorString) {
	let isCSSVariable = colorString.match(/^--/);
	return isCSSVariable ? `var(${colorString})` : colorString;
};

let complementaryColor = function (colorString) {
	let complements = {
		"--off-white": "--off-black",
		"--off-black": "--off-white",
		"--green": "--off-white",
		"--blue": "--off-black",
		"--yellow": "--off-black",
		"--purple": "--off-white",
		"--red": "--off-white",
	};

	return colorString in complements ? complements[colorString] : "initial";
};

let colorStyleByProp = (props) => {
	let backgroundColorString = props.backgroundColor
		? props.backgroundColor
		: "initial";
	let colorString = props.color
		? props.color
		: complementaryColor(backgroundColorString);

	let style = {
		backgroundColor: expandColor(backgroundColorString),
		color: expandColor(colorString),
		stroke: expandColor(colorString),
		fill: expandColor(colorString),
	};
	return style;
};
let colorByProp = (props) => {
	let backgroundColorString = props.backgroundColor
		? props.backgroundColor
		: "initial";
	let colorString = props.color
		? props.color
		: complementaryColor(backgroundColorString);

	let cssString = `
	  		background-color: ${expandColor(backgroundColorString)};
	  		color: ${expandColor(colorString)};
	  		stroke: ${expandColor(colorString)};
	  		fill: ${expandColor(colorString)};
	  	`;
	return cssString;
};

const baseGrid = css`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: var(--gap);

	@media ${mediaQueries.uptoTablet} {
		grid-template-columns: repeat(6, 1fr);
	}

	@media ${mediaQueries.uptoMobile} {
		grid-template-columns: repeat(3, 1fr);
	}
`;

let getMediaURL = function (media, maxSize = "large") {
	let hasNoFormats =
		!media.data.attributes.formats ||
		Object.keys(media.data.attributes.formats).length == 0;

	return hasNoFormats
		? media.data.attributes.url
		: media.data.attributes.formats[
				findLargestFormat(media.data.attributes.formats, maxSize)
		  ].url;
};

function findLargestFormat(media, maxSize = "large") {
	let formats = ["large", "medium", "small", "thumbnail"];
	formats = formats.slice(formats.indexOf(maxSize), formats.length);
	for (let size in formats) {
		if (media.hasOwnProperty(formats[size])) {
			return formats[size];
		}
	}
	console.error(
		"ERROR: Looking for the largest format of",
		media,
		"and didn't find."
	);
}

let slugify = function (toSlug) {
	// via https://gist.github.com/codeguy/6684588
	return toSlug
		.normalize("NFKD")
		.toLowerCase()
		.replace(/[^\w\s-]/g, "")
		.trim()
		.replace(/[-\s]+/g, "-");
};

let getBgFromLight = (isLight) => (isLight ? "--off-white" : "--off-black");
let getLightFromBg = (bg) => (bg == "--off-white" ? true : false);

let sizeToVerticalGridInRem = function (heightInPx) {
	// TODO: Convert this to pts and compute correctly, or maybe just drop?
	let rootFontSizeInPx = 17;
	let rootLineHeightInRem = 1.3;
	return (
		Math.ceil(heightInPx / (rootFontSizeInPx * rootLineHeightInRem)) *
		rootLineHeightInRem
	);
};

export {
	baseGrid,
	colorByProp,
	colorStyleByProp,
	complementaryColor,
	Div,
	expandColor,
	findLargestFormat,
	getBgFromLight,
	getLightFromBg,
	getMediaURL,
	ShiftBy,
	sizeToVerticalGridInRem,
	slugify,
	tenureSort,
};
