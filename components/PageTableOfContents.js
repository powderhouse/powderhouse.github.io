import styled from "styled-components";

import { Asterisk, slugify } from "../components/global";

let PageTOC = styled.ol`
	list-style-type: none;
	padding: 0;
	margin: 0;
	position: relative;
	left: calc(var(--gap) - 7px);

	& li:last-of-type {
		padding-bottom: 0;
	}
`;

let PageTOCItem = styled.li`
	position: relative;
	left: -0.21em; // Determined optically after choosing an asterisk spacing
	&:not(:last-child) {
		padding-bottom: calc(var(--base-line-height) / 2);
	}
`;

let PageTOCLink = styled.a`
	display: flex;
	align-items: center;
	width: fit-content;
	transition: 0.8s ease;
	text-decoration: none;
	position: relative;

	@media (hover: hover) {
		&:hover {
			transform: translateX(var(--gap));
		}
	}
`;

let TOCText = styled.div`
	margin-left: 0.5em; // TOC AsteriskContainer width minus its left shift
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
