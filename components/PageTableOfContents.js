import styled from "styled-components";

import { Asterisk, slugify } from "../components/global";

let PageTOC = styled.ol`
	list-style-type: none;
	padding: 0;
	margin: 0;
	padding-bottom: calc(3 * 1.3rem);
	position: relative;
	left: calc(var(--gap) - 7px);
`;

let PageTOCItem = styled.li`
	padding-bottom: calc(1.3rem / 2);
`;

let PageTOCLink = styled.a`
	display: flex;
	align-items: center;
	transition: 0.8s ease;
	text-decoration: none;
	position: relative;

	&:hover {
		transform: translateX(var(--gap));
	}
`;

function PageTableOfContents({ sections }) {
	let items = sections.map((n, i) => (
		<PageTOCItem key={i}>
			<PageTOCLink href={"#" + slugify(n.SectionHeader)}>
				<Asterisk key={i} type="TOC" />
				{n.SectionHeader}
			</PageTOCLink>
		</PageTOCItem>
	));
	return <PageTOC >{items}</PageTOC>;
}

export default PageTableOfContents;
