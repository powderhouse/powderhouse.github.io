import styled from "styled-components";
import { css } from "styled-components";
import { expandColor, complementaryColor } from "../components/global";
import { useState, useEffect } from "react";

function getRandomNum() {
	return Math.round(Math.random()*360);
}

const useRandomNum = () => {
    const [randomNum, setRandomNum] = useState(null)

    useEffect(() => {
        setRandomNum(getRandomNum())
    }, [])

    return randomNum
}

let asteriskContainerStyles = {
	TOC: css`
		position: absolute;
		left: calc(-1.375 * 1.3em + 4px);
	`,
	LeftHeader: css`
		position: absolute;
		left: calc(-1.3rem / 4);
		top: calc(-1.3rem / 5);
		transform: scale(1.5) var(--random-rotate);
	`,
	CenterHeader: css`
		position: absolute;
		left: calc(-1.3rem / 4);
		top: calc(-1.3rem / 5);
		transform: scale(2) var(--random-rotate);
	`,
	Default: css`
		position: absolute;
		left: calc(-0.375 * 1.3rem);
		top: calc(-1.3rem / 7);
	`,
};

function AsteriskContainer(props) {
	const randomRotation = useRandomNum();

	return (
		<AsteriskContainerDiv rotation={randomRotation} {...props} />
		)
}

let AsteriskContainerDiv = styled.div`
	height: calc(1.375 * 1.3rem);
	width: calc(1.375 * 1.3rem);
	transform-origin: 50% 50%;
	// In order to add other transforms later, via https://stackoverflow.com/questions/5890948/css-transform-without-overwriting-previous-transform
	--random-rotate: ${(props) => `rotate(${props.rotation}deg)`};
	transform: var(--random-rotate);

	${(props) => asteriskContainerStyles[props.type]}
	${(props) =>
		props.backgroundColor
			? css`
					color: ${expandColor(complementaryColor(props.backgroundColor))};
					stroke: ${expandColor(complementaryColor(props.backgroundColor))};
					fill: ${expandColor(complementaryColor(props.backgroundColor))};
			  `
			: ``}
`;

export default AsteriskContainer;