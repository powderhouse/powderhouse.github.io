import styled from "styled-components";

import { Asterisk, slugify } from "../components/global";

let PageTOC = styled.ol`
	list-style-type: none;
	padding: 0;
	margin: 0;
	// TODO: Rationalize this
	padding-bottom: calc(2 * var(--body-line-height));
	position: relative;
	left: calc(var(--gap) - 7px);
`;

let PageTOCItem = styled.li`
	padding-bottom: calc(var(--body-line-height) / 2);
	position: relative;
	left: -0.21em; // Determined optically after choosing an asterisk spacing
`;

let PageTOCLink = styled.a`
	display: flex;
	align-items: center;
	width: fit-content;
	transition: 0.8s ease;
	text-decoration: none;
	position: relative;

	&:hover {
		transform: translateX(var(--gap));
	}
`;

let TOCText = styled.div`
	// TODO: Rationalize this
	margin-left: calc(var(--body-line-height) / 4);
`;

function PageTableOfContents({ sections }) {
	let items = sections.map((n, i) =>
		n.SectionHeader ? (
			<PageTOCItem key={i}>
				<PageTOCLink href={"#" + slugify(n.SectionHeader)}>
					<Asterisk key={i} $type="TOC" />
					<TOCText>{n.SectionHeader}</TOCText>
				</PageTOCLink>
			</PageTOCItem>
		) : (
			""
		)
	);
	return <PageTOC>{items}</PageTOC>;
}

export default PageTableOfContents;
