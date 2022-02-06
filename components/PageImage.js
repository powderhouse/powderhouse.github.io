import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

let Resize = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

function PageImage(props) {
	// Adding `refs` to access DOM elements for our image and resizing div
	// via https://reactjs.org/docs/hooks-reference.html#useref
	const img = useRef(null);
	const resizer = useRef(null);

	let rootFontSizeInPx, rootLineHeightInPx, rootLineHeightInRem;
	useEffect(() => {
		// When the component loads, create an observer
		let observer = new ResizeObserver((entries) => {
			// via https://web.dev/resize-observer/
			for (let entry of entries) {
				const rectangle = entry.contentRect;

				// Count the number of lines and set our height
				let numLines = Math.ceil(rectangle.height / rootLineHeightInPx);
				let calcString = `calc(${numLines} * ${rootLineHeightInRem}rem)`;

				resizer.current.style.height = calcString;
			}
		});

		// Calculate line height for use in computing number of lines
		let bodyStyle = window.getComputedStyle(document.body);
		rootFontSizeInPx = parseFloat(bodyStyle.fontSize);
		rootLineHeightInPx = parseFloat(bodyStyle.lineHeight);
		rootLineHeightInRem = rootLineHeightInPx / rootFontSizeInPx;

		// Attach the observer to watch our image
		observer.observe(img.current);
	});

	let container = (
		<div className={props.fullBleed ? "full-bleed" : "full-body"}>
			<Resize ref={resizer}>
				<img ref={img} height={props.imgHeight ? props.imgHeight : ""} src={props.src} alt={props.altText} />
			</Resize>
		</div>
	);
	return container;
}

export default PageImage;