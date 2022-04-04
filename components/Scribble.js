import styled from "styled-components";
import SVG from "react-inlinesvg";

let ScribbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  min-width: 100%;
  top: calc(1em);
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  max-height:10px;
`;

function Scribble({ number, active, ...rest }) {
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

  // let svgProps = Object.assign({}, rest, {
  //   // viewBox: [xMin, yMin, xMax, yMax].join(" "),
  //   strokeLinecap: "round",
  //   strokeLinejoin: "round",
  // });
  return (
    <ScribbleContainer active={active}>
      <SVG
        src={`/scribbles/scribble${number}.svg`}
        strokeLinecap="round"
        strokeLinejoin="round"
        preserveAspectRatio="none"
        {...rest}
      />
    </ScribbleContainer>
  );
}

export default Scribble;
