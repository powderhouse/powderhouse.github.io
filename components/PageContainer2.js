import styled from "styled-components";
import React from "react";
import { useRef } from "react";
import RegionContainer2 from "../components/RegionContainer2";

let StyledDiv = styled.div`
	background-color: var(--off-white);
	color: var(--off-black);
`;

let containsMainContent = function (region) {
	let regionTypes = React.Children.toArray(region.props.children).map((c) =>
		c.type ? c.type.name : typeof c
	);
	regionTypes.push(region.type.name);
	return regionTypes.every(
		(c) => !["Header", "PageSplash", "Footer"].includes(c)
	);
};

let groupBy = function (array, comparator, fallback = (e) => false) {
	// This is a function which takes an array and a comparator function and returns an order-preserving array of arrays where each element comprises a list of elements which returns the same value when passed to the comparator.  `fallback` is used to allow for overrides of unequal comparators to, e.g., allow you to set the default behavior in the case that an element lacks a backgroundColor

	// We use it in PageContainer2 to group attributes by backgroundColor (or to ignore missing backgroundColors)

	let runs = []; // Initialize an array to hold our "runs" (e.g. repeated backgroundColor elements)

	let timeForNewRun = function (runsArray, element) {
		// A function to check whether we should create a new run given a particular element
		if (runsArray.length == 0) {
			return true;
		} else {
			return (
				comparator(runsArray.slice(-1)[0].slice(-1)[0]) !==
					comparator(element) || fallback(element) == true
			);
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

function PageContainer2(props) {
	let regionRuns = groupBy(
		props.children,
		(c) => (c.props.backgroundColor ? c.props.backgroundColor : false),
		(c) => (!c.props.backgroundColor ? false : true)
	);

	let contentIndices = regionRuns
		.map((rr, i) => (rr.some((r) => containsMainContent(r)) ? i : null))
		.filter((x) => x);

	let firstContentRegion, lastContentRegion;
	if (contentIndices.length > 0) {
		firstContentRegion = regionRuns[contentIndices[0]];
		lastContentRegion = regionRuns[contentIndices.slice(-1)[0]];
	}

	let regionContainers = regionRuns.map((rr, i) => {
		let backgroundColor = rr.slice(-1)[0].props.backgroundColor;

		let containsContent = rr.some((r) => containsMainContent(r));
		let isFirstContentRegion = firstContentRegion
			? rr == firstContentRegion
			: false;
		let isLastContentRegion = lastContentRegion
			? rr == lastContentRegion
			: false;
		let isFirstRegionContainer = i == 0;
		let isLastRegionContainer = i == regionRuns.length - 1;

		let padTop =
			!isFirstContentRegion && !isFirstRegionContainer && containsContent;
		let padBottom = containsContent && !isLastRegionContainer;
		let pad = [padTop ? "top" : null, padBottom ? "bottom" : null].filter(
			(x) => x
		);
		return (
			<RegionContainer2
				backgroundColor={backgroundColor}
				key={i}
				pad={pad}
			>
				{rr}
			</RegionContainer2>
		);
	});

	return <StyledDiv>{regionContainers}</StyledDiv>;
}

export default PageContainer2;
