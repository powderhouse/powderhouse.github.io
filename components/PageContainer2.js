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

function PageContainer2(props) {
	let childrenHaveBackgroundColor = React.Children.toArray(
		props.children
	).map((c) => c.props.hasOwnProperty("backgroundColor"));
	if (childrenHaveBackgroundColor.every((t) => t)) {
		let regionRuns = [
			[props.children.length ? props.children[0] : props.children],
		];
		if (props.children.length > 1) {
			props.children.slice(1).forEach((region) => {
				let lastRegionRun = regionRuns.slice(-1)[0];
				let lastRegion = lastRegionRun.slice(-1)[0];
				let lastRegionRunBackgroundColor =
					lastRegion.props.backgroundColor;
				if (
					region.props.backgroundColor == lastRegionRunBackgroundColor
				) {
					regionRuns.slice(-1)[0].push(region);
				} else {
					regionRuns.push([region]);
				}
			});
		}

		let firstContentRegion = regionRuns.find((rr) => {
			rr.some((r) => containsMainContent(r));
		});

		let regionContainers = regionRuns.map((rr, i) => {
			let backgroundColor = rr.slice(-1)[0].props.backgroundColor;
			let content =
				rr == firstContentRegion
					? "first"
					: rr.some((r) => containsMainContent(r));
			let regions = rr;
			return (
				<RegionContainer2
					backgroundColor={backgroundColor}
					content={content}
					key={i}
				>
					{regions}
				</RegionContainer2>
			);
		});

		return <StyledDiv>{regionContainers}</StyledDiv>;
	} else {
		console.log(
			"Error, expected all children to have backgroundColor; instead, received",
			props.children
		);
	}
}

export default PageContainer2;