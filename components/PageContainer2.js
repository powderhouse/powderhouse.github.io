import styled from "styled-components";
import React from "react";
import RegionContainer2 from "../components/RegionContainer2";

let StyledDiv = styled.div`
	background-color: var(--off-white);
	color: var(--off-black);
	height: 100%;
	display: grid;
	grid-template-rows: auto 1fr auto;
`;

let groupBy = function (array, comparator, fallback = () => false) {
	// This is a function which takes an array and a comparator function and returns an order-preserving array of arrays where each element comprises a list of elements which returns the same value when passed to the comparator.  `fallback` is used to allow for overrides of unequal comparators to, e.g., allow you to set the default behavior in the case that an element lacks a backgroundColor

	// We use it in PageContainer2 to group attributes by backgroundColor (or to ignore missing backgroundColors)

	let runs = []; // Initialize an array to hold our "runs" (e.g. repeated backgroundColor elements)

	let timeForNewRun = function (runsArray, element) {
		// A function to check whether we should create a new run given a particular element
		if (runsArray.length == 0) {
			return true;
		} else {
			let comparatorsUnequal =
				comparator(runsArray.slice(-1)[0].slice(-1)[0]) !==
				comparator(element);
			let fallbackDecision = fallback(element) == true;
			let isTime = comparatorsUnequal || fallbackDecision;
			return isTime;
		}
	};
	array.forEach((element) => {
		// Iterate over our array, checking whether it is time for a new run and either adding a new run or adding the element to the last run appropriately
		let lastRun = runs.slice(-1)[0];

		if (timeForNewRun(runs, element)) {
			let nextRun = [element];
			runs.push(nextRun);
		} else {
			lastRun.push(element);
		}
	});

	return runs;
};

let isContentRegion = function (region) {
	let nonContentComponentNames = ["Header", "PageSplash", "Footer"];
	return region.type
		? !nonContentComponentNames.includes(region.type.name)
		: true;
};

let isContentRegionRun = (regionRun) =>
	regionRun.some((r) => isContentRegion(r));

function PageContainer2(props) {
	// Group regions by backgroundColor into segments of contiguous background color (regionRuns)
	let regionRuns = groupBy(props.children, (c) =>
		c.props.backgroundColor ? c.props.backgroundColor : false
	);

	// Merge regionRuns without a background color with previous regionRuns with one.
	// TODO: there must be a simpler way to aggregate these.
	let mergedRegionRuns = [regionRuns[0]];
	regionRuns.slice(1).forEach((rr) => {
		if (rr[0].props.hasOwnProperty("backgroundColor")) {
			mergedRegionRuns.push(rr);
		} else {
			mergedRegionRuns[mergedRegionRuns.length - 1] = mergedRegionRuns
				.slice(-1)[0]
				.concat(rr);
		}
	});

	// Identify which regionRuns have content in them
	let contentRunIndices = mergedRegionRuns
		.map((rr, i) => (isContentRegionRun(rr) ? i : null))
		.filter((x) => x);

	let contentPresent = contentRunIndices == 0 ? false : true;
	let customRegionContainerStyle =
		mergedRegionRuns.length == 1 ? { minHeight: "100vh" } : {};
	let regionContainers = mergedRegionRuns.map((rr, i) => {
		let containsContent = contentRunIndices.includes(i);
		let isFirstContentRegionContainer = contentPresent
			? i == contentRunIndices[0]
			: null;
		// let isLastContentRegionContainer = contentPresent
		// 	? i == contentRunIndices.slice(-1)[0]
		// 	: null;

		// Define padding based on content, first/last content status
		let padTop =
			containsContent &&
			(contentPresent ? !isFirstContentRegionContainer : true);
		let padBottom = containsContent && (contentPresent ? true : false);
		let pad = [padTop ? "top" : null, padBottom ? "bottom" : null].filter(
			(x) => x
		);

		let backgroundColor = rr.slice(-1)[0].props.backgroundColor;

		return (
			<RegionContainer2
				backgroundColor={backgroundColor}
				key={i}
				pad={pad}
				style={customRegionContainerStyle}
			>
				{rr}
			</RegionContainer2>
		);
	});

	return <StyledDiv>{regionContainers}</StyledDiv>;
}

export default PageContainer2;
