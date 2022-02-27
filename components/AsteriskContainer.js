import styled from "styled-components";
import { css } from "styled-components";
import { useState, useEffect } from "react";

function getRandomNum() {
	return Math.round(Math.random() * 360);
}

const useRandomNum = () => {
	const [randomNum, setRandomNum] = useState(null);

	useEffect(() => {
		setRandomNum(getRandomNum());
	}, []);

	return randomNum;
};

let asteriskContainerStyles = {
	// With relative positioning, the rotated asterisk's margin throws spacing off.  These top and left figures are derived visually, providing necessary space between the asterisk and header before aligning the center of the asterisk with the relevant vertical line by moving the container.
	TOC: css`
		position: absolute;
		left: -1.375em;
		// TODO: Rationalize this
		// left: calc(-1.6625em);
	`,
	LeftHeader: css`
		position: absolute;
		top: -0.3em;
		left: -0.725em;
		transform: scale(1.125) var(--random-rotate);
	`,
	CenterHeader: css`
		position: absolute;
		left: -0.6625em;
		top: -0.125em;
		transform: scale(1.375) var(--random-rotate);
	`,
	Default: css`
		position: absolute;
		left: -0.825em;
		top: -0.25em;
	`,
};

function AsteriskContainer(props) {
	const randomRotation = useRandomNum();

	return <AsteriskContainerDiv rotation={randomRotation} {...props} />;
}

let AsteriskContainerDiv = styled.div`
	// Optically adjusted
	height: 1.875em;
	width: 1.875em;
	transform-origin: 50% 50%;
	// In order to add other transforms later, via https://stackoverflow.com/questions/5890948/css-transform-without-overwriting-previous-transform
	--random-rotate: ${(props) => `rotate(${props.rotation}deg)`};
	transform: var(--random-rotate);

	${(props) => asteriskContainerStyles[props.$type]}
`;

export default AsteriskContainer;
