// global.js

import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { asteriskSVG, mediaQueries } from "../site-data.js";

import Region2 from "../components/Region2.js";
import AsteriskContainer from "../components/AsteriskContainer.js";

import { parse, stringify } from "ltx";
import svgPathBbox from "svg-path-bbox";
import svgson from "svgson";
import toPath from "element-to-path";

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
		"--blue": "--off-white",
		"--yellow": "--off-black",
		"--purple": "--off-white",
		"--red": "--off-white",
	};

	return colorString in complements ? complements[colorString] : "initial";
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

let Markdown = ({ children, ...rest }) => {
	// Here we iterate over children we pass and only wrap text/string children in Markdown.  This lets us wrap things in Markdown more cavalierly.
	let wrappedChildren = React.Children.toArray(children).map((c, i) => {
		if (typeof c == "string") {
			try {
				if (c.match(/\.  /)) {
					// throw new Error("Formatting issue with:" + c, {
					// 	cause: "Period with two spaces after it appears.  We use periods with one space after them.",
					// });
				}
			} catch (err) {
				console.log(err, err.cause);
			}
			return (
				<ReactMarkdown
					components={{ strong: "b" }}
					rehypePlugins={[rehypeRaw]}
					key={i}
					{...rest}
				>
					{c}
				</ReactMarkdown>
			);
		} else {
			// We need to clone the element because by default, JSX elements are not extensible (i.e. we can't modify their props.key after they are passed)
			let clone = React.cloneElement(c, { key: i });
			return clone;
		}
	});
	return <>{wrappedChildren}</>;
};

let Div = (props) =>
	props.markdown ? <Markdown {...props} /> : <div {...props} />;

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

let PageSplashDiv = styled.div`
	grid-column: 1 / -1;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 32.5em;
	padding: var(--vertical-rhythm) 0;

	@media ${mediaQueries.uptoTablet} {
		min-height: 27em;
	}

	@media ${mediaQueries.uptoMobile} {
		min-height: 21.5em;
	}
`;

function PageSplash({ children, ...rest }) {
	return (
		<Region2 {...rest}>
			<PageSplashDiv>{children}</PageSplashDiv>
		</Region2>
	);
}

let PageHeading = styled.h1`
	font-family: "GT Planar", sans-serif;
	font-size: var(--splash-font-size);
	line-height: var(--splash-line-height);
	letter-spacing: var(--splash-letter-spacing);
	font-weight: 300;
	hyphens: auto;

	@media ${mediaQueries.uptoTablet} {
		// TODO: Integrate with type hierarchy
		font-size: calc(0.65 * var(--splash-font-size));
	}
	@media ${mediaQueries.uptoMobile} {
		// TODO: Integrate with type hierarchy
		font-size: calc(0.45 * var(--splash-font-size));
	}
`;

let Asterisk = (props) => {
	return (
		<AsteriskContainer
			$type={props.$type}
			$color={props.$color ? props.$color : "--off-black"}
		>
			{asteriskSVG()}
		</AsteriskContainer>
	);
};

let PageIntroductionDiv = styled(Div)`
	grid-column: 1 / span 9;
	font-family: "GT Planar", sans-serif;
	font-weight: 300;
	font-size: var(--xlarge-font-size);
	line-height: var(--xlarge-line-height);
	// TODO: Add letter-spacing to type-hierarchy
	letter-spacing: -0.5;
	padding-top: var(--xlarge-line-height);
	padding-bottom: var(--xlarge-line-height) / 2;

	@media ${mediaQueries.uptoTablet} {
		grid-column: 1 / -1;
		font-size: var(--large-font-size);
		line-height: var(--large-line-height);
	}

	@media ${mediaQueries.uptoMobile} {
		font-size: var(--medium-font-size);
		line-height: var(--medium-line-height);
	}
`;

function PageIntroduction({ children, markdown, ...rest }) {
	return (
		<Region2 {...rest}>
			<PageIntroductionDiv markdown={markdown}>
				{children}
			</PageIntroductionDiv>
		</Region2>
	);
}

let Header2 = styled.h2`
	font-weight: 500;
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

let PageSectionContent = styled(Div)`
	// Using transient props to avoid passing these down to the DOM: https://styled-components.com/docs/api#transient-props
	letter-spacing: 0;
	& p:not(:last-child) {
		margin-bottom: var(--base-line-height);
	}

	& ul {
		// Optically align bullets with left border of text
		padding-left: calc(1em - 7px);
	}

	${(props) =>
		props.$wide
			? css`
					grid-column: 4 / -1;
					grid-template-columns: repeat(9, 1fr);
			  `
			: css`
					grid-column: 4 / 10;
					grid-template-columns: repeat(6, 1fr);
			  `}

	${(props) =>
		!props.$grid
			? css``
			: css`
					display: inherit;
					column-gap: inherit;
					grid-auto-rows: inherit;
					grid-row-gap: inherit;
			  `}

	@media ${mediaQueries.uptoTablet} {
		grid-column: 1 / -1;
		grid-template-columns: repeat(6, 1fr);
	}

	@media ${mediaQueries.uptoMobile} {
		grid-template-columns: repeat(3, 1fr);
		grid-row-gap: var(--vertical-rhythm);
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
	// TODO: Conver this to pts and compute correctly, or maybe just drop?
	let rootFontSizeInPx = 17;
	let rootLineHeightInRem = 1.3;
	return (
		Math.ceil(heightInPx / (rootFontSizeInPx * rootLineHeightInRem)) *
		rootLineHeightInRem
	);
};

let zoomViewBox = function (svgString) {
	let pathThatSvg = function (svgString) {
		// Adapted from https://github.com/elrumordelaluz/path-that-svg/blob/master/index.js
		const elemToPath = (node) => {
			let o = Object.assign({}, node);

			if (
				/(rect|circle|ellipse|polygon|polyline|line|path)/.test(o.name)
			) {
				o.attributes = Object.assign({}, o.attributes, {
					d: toPath(o),
				});
				for (const attr in o.attributes) {
					// Remove geometry properties not used
					if (
						/^(x|y|x1|y1|x2|y2|points|width|height|cx|cy|rx|ry|r)$/.test(
							attr
						)
					) {
						delete o.attributes[attr];
					}
				}
				o.name = "path";
			} else if (o.children && Array.isArray(o.children)) {
				o.children = o.children.map(elemToPath);
			}

			return o;
		};

		const parsed = svgson.parseSync(svgString);
		const convertedPath = elemToPath(parsed);
		return svgson.stringify(convertedPath);
	};

	let viewBox = [0, 0, 0, 0];
	let mergeViewBoxes = function (vb1, vb2) {
		let minimize = (a, b) => (a < b ? a : b);
		let maximize = (a, b) => (a < b ? b : a);
		return [
			minimize(vb1[0], vb2[0]),
			minimize(vb1[1], vb2[1]),
			maximize(vb1[2], vb2[2]),
			maximize(vb1[3], vb2[3]),
		];
	};

	let updateViewBoxWith = function (element) {
		if (element.attrs.hasOwnProperty("d")) {
			// console.log(element, "has a path");
			viewBox = mergeViewBoxes(viewBox, svgPathBbox(element.attrs.d));
			// console.log("Now viewBox is", viewBox);
		}
		if (element.children.length > 0) {
			element.children.forEach(updateViewBoxWith);
		}
	};

	let pathedSvg = pathThatSvg(svgString);
	let parsed = parse(pathedSvg);
	// console.log("viewBox starts as", parsed.attrs.viewBox);
	updateViewBoxWith(parsed);
	// console.log("Finally, viewBox is", viewBox);
	let newDims = {
		viewBox: viewBox.join(" "),
		width: viewBox[2] - viewBox[0],
		height: viewBox[3] - viewBox[1],
	};
	Object.keys(newDims).forEach((d) => (parsed.attrs[d] = newDims[d]));
	return stringify(parsed);
};

export {
	Asterisk,
	baseGrid,
	colorByProp,
	complementaryColor,
	Div,
	expandColor,
	findLargestFormat,
	getBgFromLight,
	getLightFromBg,
	getMediaURL,
	Markdown,
	PageHeading,
	PageIntroduction,
	PageSectionContent,
	PageSplash,
	SectionHeader,
	ShiftBy,
	sizeToVerticalGridInRem,
	slugify,
	tenureSort,
	zoomViewBox,
};
