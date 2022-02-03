import styled from "styled-components";
import { css } from "styled-components";
import { expandColor } from "../components/global";
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
		left: calc(-1.3rem / 2);
		top: calc(-1.3rem / 2);
	`,
	CenterHeader: css`
		position: absolute;
		left: calc(-0.625 * 1.3rem);
		top: calc(-1.3rem / 2 - 3.5px);
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
		<AsteriskContainerDiv rotation={randomRotation} {...props} ></AsteriskContainerDiv>
		)
}

let AsteriskContainerDiv = styled.div`
	height: calc(1.375 * 1.3rem);
	width: calc(1.375 * 1.3rem);
	transform-origin: 50% 50%;
	transform: ${(props) => `rotate(${props.rotation}deg)`};

	${(props) => asteriskContainerStyles[props.type]}
	${(props) =>
		props.color
			? css`
					color: ${expandColor(props.color)};
					stroke: ${expandColor(props.color)};
					fill: ${expandColor(props.color)};
			  `
			: ``}
`;

export default AsteriskContainer;