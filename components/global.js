// global.js

import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { asteriskSVG, mediaQueries } from "../site-data.js";

import Region2 from "../components/Region2.js";
import AsteriskContainer from "../components/AsteriskContainer.js";

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
	getStartField = (x) => x.YearStart,
	getEndField = (x) => x.YearEnd,
	getBreakevenField = (x) => x.Name,
	order = "ascending"
) {
	// Generates a comparator suitable for use in comparing tenures.  Useful for sorting proejcts or people.  `startField` and `endField` are the fields containing start and end dates, expected to be years.  `breakevenField` is another field to be compared lexicographically in case years are equal.

	let ascending = (a, b) => {
		// Sort first by starting year, then ending year, then alphabetical
		if (getStartField(a) < getStartField(b)) {
			return -1;
		} else if (getStartField(a) > getStartField(b)) {
			return 1;
		} else {
			if (getEndField(a) < getEndField(b)) {
				return -1;
			} else if (getEndField(a) > getEndField(b)) {
				return 1;
			} else {
				// via https://stackoverflow.com/a/60922998
				return getBreakevenField(a).localeCompare(
					getBreakevenField(b),
					"en",
					{
						sensitivity: "base",
					}
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

	return colorString in complements
		? expandColor(complements[colorString])
		: "initial";
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
					throw new Error("Formatting issue with:" + c, {
						cause: "Period with two spaces after it appears.  We use periods with one space after them.",
					});
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
	// TODO: Rationalize this, and consider for mobile
	min-height: calc(29 * var(--body-line-height));
	padding: calc(1 * var(--body-line-height)) 0;
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
	font-size: 166px;
	letter-spacing: -4.8px;
	font-weight: 300;
	line-height: 1em;
	// TODO: Rationalize this
	transform: translate(-3px, calc(var(--body-line-height) / 2 - 1px));

	@media ${mediaQueries.uptoTablet} {
		// TODO: Integrate with type hierarchy
		font-size: calc(4 * 1.3rem);
	}
	@media ${mediaQueries.uptoMobile} {
		// TODO: Integrate with type hierarchy
		font-size: calc(3 * 1.3rem);
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
	font-size: var(--large-heading-font-size);
	line-height: var(--large-heading-line-height);
	// TODO: Add letter-spacing to type-hierarchy
	letter-spacing: -0.5;
	padding: calc(1 * var(--body-line-height)) 0;

	@media ${mediaQueries.uptoTablet} {
		grid-column: 1 / -1;
		// TODO: Implement type hierarchy
	}

	@media ${mediaQueries.uptoMobile} {
		// TODO: Implement type hierarchy
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
	font-weight: normal;
	font-family: "GT Planar", sans-serif;
	font-size: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	// TODO: rationalize this
	margin-left: ${(props) =>
		props.left ? "" : `calc(var(--body-line-height) / 4)`};

	@media ${mediaQueries.uptoMobile} {
		// TODO: Implement type hierarchy
	}
`;

let sectionHeaderContainerStyles = {
	left: css`
		grid-column: 1 / span 3;
		font-size: var(--small-heading-font-size);
		line-height: var(--small-heading-line-height);
		letter-spacing: -0.5px;

		position: relative;
		top: -4px;
		padding-left: 1em; // This visually centers the asterisk on the left vertical line of the page

		@media ${mediaQueries.uptoTablet} {
			grid-column: 1 / -1;
		}
	`,
	center: css`
		grid-column: 4 / 10;
		// TODO: Implement type hierarchy
		font-size: 31px;
		letter-spacing: -1.2px;
		padding-left: 1em;
		@media ${mediaQueries.uptoTablet} {
			grid-column: 1 / -1;
		}
	`,
};

let SectionHeaderContainer = styled.div`
	grid-column: 1 / span 3;
	grid-row: 1 / -1;
	line-height: var(--body-line-height);
	position: relative;
	${(props) => sectionHeaderContainerStyles[props.left ? "left" : "center"]}

	@media ${mediaQueries.uptoTablet} {
		grid-column: 1 / -1;
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
		margin-bottom: var(--body-line-height);
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
	}
`;

let getMediaURL = function (media, maxSize = "large") {
	let hasNoFormats =
		!media.data.attributes.formats ||
		Object.keys(media.data.attributes.formats).length == 0;

	return hasNoFormats
		? media.data.attributes.url
		: media.data.attributes.formats[
				findLargestFormat(media.data.attributes.formats)
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
};
