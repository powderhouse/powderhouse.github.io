import styled from "styled-components";
import React from "react";
import { useRef } from "react";
import RegionContainer2 from "../components/RegionContainer2";

let StyledDiv = styled.div`
	background-color: var(--off-white);
	color: var(--off-black);
`;

let getChildrenTypes = function (component) {
	return React.Children.map(component.props.children, (c) => c.type.name);
};
let containsMainContent = function (region) {
	let childrenTypes = React.Children.map(
		region.props.children,
		(c) => c.type.name
	);
	return childrenTypes.some(
		(c) => !["Header", "PageSplash", "Footer"].includes(c)
	);
};

function PageContainer2(props) {
	if (props.children.map((c) => c.type.name).every((t) => t == "Region2")) {
		let regionRuns = [[props.children[0]]];
		props.children.slice(1).forEach((region) => {
			let lastRegionRun = regionRuns.slice(-1)[0];
			let lastRegion = lastRegionRun.slice(-1)[0];
			let lastRegionRunBackgroundColor = lastRegion.props.backgroundColor;
			if (region.props.backgroundColor == lastRegionRunBackgroundColor) {
				regionRuns.slice(-1)[0].push(region);
			} else {
				regionRuns.push([region]);
			}
		});

		let firstContentRegion = regionRuns.find((rr) =>
			rr.some((r) => containsMainContent(r))
		);

		console.log(firstContentRegion);

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
		console.log("Error, expected all children to be regions");
	}

	return <div>!</div>;
}

export default PageContainer2;
