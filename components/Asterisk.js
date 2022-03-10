import AsteriskContainer from "../components/AsteriskContainer.js";

// const AsteriskContainer = dynamic(() =>
// 	import("../components/AsteriskContainer.js")
// );

let asteriskSVG = (strokeWidth = "1") => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="-34 -39 150 111">
		<path
			vectorEffect="non-scaling-stroke"
			d="M 0 43.712 L 88.25 26.838 M 57.055 78.651 L 27.423 0 M 23.298 65.652 L 57.156 8.351 M 67.46 48.363 L 7.632 19.816"
			fill="transparent"
			strokeWidth={strokeWidth}
			strokeLinecap="square"
			strokeLinejoin="round"
		></path>
	</svg>
);

let Asterisk = (props) => {
	return (
		<AsteriskContainer
			$type={props.$type}
			$color={props.$color ? props.$color : "--off-black"}
		>
			{asteriskSVG()}
		</AsteriskContainer>
	);
};

export default Asterisk;
