import React from "react";

import Header from "../components/Header";
import PageContainer2 from "../components/PageContainer2";

import { PageSplash } from "../components/global";
import { colorByProp } from "../components/global.js";

function AboutTestPage() {
	let accentColor = "--red";

	let regions = [
		<PageSplash backgroundColor="--red" key="splash">
			{colorByProp({ backgroundColor: accentColor, key: "splash" })}
		</PageSplash>,
		<Header
			backgroundColor="--off-white"
			key="header"
			activeScribbleColor={accentColor}
		/>,
		<Header
			backgroundColor="--off-black"
			key="header"
			activeScribbleColor={accentColor}
		/>,
	];
	return <PageContainer2>{regions}</PageContainer2>;
}

export async function getStaticProps() {
	return { props: {} };
}

export default AboutTestPage;
