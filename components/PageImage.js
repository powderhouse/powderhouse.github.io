import styled from "styled-components";
// import Image from "next/image";

let Resize = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

let ImageContainer = styled.figure`
	display: flex;
	flex-direction: column;
`;

let ImageCaption = styled.figcaption`
	font-size: calc(var(--small-font-size));
	line-height: var(--small-line-height);
	padding-top: calc(var(--vertical-rhythm) / 4);
	font-style: italic;
	margin: auto;
	text-align: center;
`;

function PageImage(props) {
	// TODO: Decide whether to remove this
	// Adding `refs` to access DOM elements for our image and resizing div
	// via https://reactjs.org/docs/hooks-reference.html#useref
	// const img = useRef(null);
	// const resizer = useRef(null);

	// useEffect(() => {
	// 	// When the component loads, create an observer
	// 	let observer = new ResizeObserver((entries) => {
	// 		// via https://web.dev/resize-observer/
	// 		for (let entry of entries) {
	// 			const rectangle = entry.contentRect;

	// 			// Count the number of lines and set our height
	// 			let numLines = Math.ceil(rectangle.height / rootLineHeightInPx);
	// 			let calcString = `calc(${numLines} * ${rootLineHeightInRem}rem)`;

	// 			resizer.current.style.height = calcString;
	// 		}
	// 	});

	// 	// Calculate line height for use in computing number of lines
	// 	let bodyStyle = window.getComputedStyle(document.body);
	// 	let rootFontSizeInPx = parseFloat(bodyStyle.fontSize);
	// 	let rootLineHeightInPx = parseFloat(bodyStyle.lineHeight);
	// 	let rootLineHeightInRem = rootLineHeightInPx / rootFontSizeInPx;

	// 	// Attach the observer to watch our image
	// 	observer.observe(img.current);
	// });

	// TODO: Incorporate <Image> instead
	// let width = props.fullBleed ? 1440 : props.width;
	// let height = props.fullBleed
	// 	? (1440 / props.width) * props.height
	// 	: props.height;
	let container = (
		<ImageContainer
			className={props.fullBleed ? "full-bleed" : "full-body"}
		>
			<Resize
			// ref={resizer}
			>
				<img
					// Image
					// ref={img}
					src={props.src}
					alt={props.altText}
					// width={width}
					// height={height}
				/>
			</Resize>
			<ImageCaption>{props.caption}</ImageCaption>
		</ImageContainer>
	);
	return container;
}

export default PageImage;
