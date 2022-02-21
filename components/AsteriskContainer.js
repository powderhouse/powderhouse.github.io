import styled from "styled-components";
import { css } from "styled-components";
import {
	expandColor,
	complementaryColor,
	colorByProp,
} from "../components/global";
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
	TOC: css`
		position: absolute;
		// TODO: Rationalize this
		// This lines up the center of the asterisks with the left edge of the page splash title
		left: calc(-1.6625em);
	`,
	LeftHeader: css`
		position: absolute;
		// TODO: Rationalize this
		left: calc(-1 * var(--body-line-height) / 4);
		top: calc(-1 * var(--body-line-height) / 5);
		// left: calc(-1.3rem / 4);
		// top: calc(-1.3rem / 5);
		// transform: scale(1.5) var(--random-rotate);
	`,
	CenterHeader: css`
		position: absolute;
		// TODO: Rationalize this
		left: calc(-1 * var(--body-line-height) / 4);
		top: calc(-1 * var(--body-line-height) / 5);
		// left: calc(-1.3rem / 4);
		// top: calc(-1.3rem / 5);
		transform: scale(2) var(--random-rotate);
	`,
	Default: css`
		position: absolute;
		// TODO: Rationalize this
		left: calc(-0.375 * var(--body-line-height));
		top: calc(var(--body-line-height) / 6);
	`,
};

function AsteriskContainer(props) {
	const randomRotation = useRandomNum();

	return <AsteriskContainerDiv rotation={randomRotation} {...props} />;
}

let AsteriskContainerDiv = styled.div`
	// TODO: Rationalize this
	height: calc(1.375 * var(--body-line-height));
	width: calc(1.375 * var(--body-line-height));
	transform-origin: 50% 50%;
	// In order to add other transforms later, via https://stackoverflow.com/questions/5890948/css-transform-without-overwriting-previous-transform
	--random-rotate: ${(props) => `rotate(${props.rotation}deg)`};
	transform: var(--random-rotate);

	${(props) => asteriskContainerStyles[props.type]}
`;

export default AsteriskContainer;
