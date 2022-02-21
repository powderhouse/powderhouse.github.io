import styled from "styled-components";
import React from "react";
import Scribble1 from "../public/scribbles/scribble1.svg";
import Scribble2 from "../public/scribbles/scribble2.svg";
import Scribble3 from "../public/scribbles/scribble3.svg";

let scribbles = {
  1: Scribble1,
  2: Scribble2,
  3: Scribble3,
};

let ScribbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: calc(-1 / 5 * var(--body-line-height));
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
`;

function Scribble({ number, ...rest }) {
  // TODO: Make the Scribble autoscale its viewBox to fit the SVG with varying stroke width
  // let [xMin, yMin, xMax, yMax] = scribbles[number](rest)
  //   .props.viewBox.split(" ")
  //   .map(parseFloat);
  // console.log(scribbles[number](rest));
  // if (
  //   rest.hasOwnProperty("strokeWidth") &&
  //   rest.strokeWidth.match(/^[0-9.]+px$/)
  // ) {
  //   let strokeWidth = parseFloat(rest.strokeWidth);
  // }

  let svgProps = Object.assign({}, rest, {
    // viewBox: [xMin, yMin, xMax, yMax].join(" "),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    vectorEffect: "non-scaling-stroke",
  });
  return (
    <ScribbleContainer active={rest.active}>
      {React.createElement(scribbles[number], svgProps, "")}
    </ScribbleContainer>
  );
}

export default Scribble;
