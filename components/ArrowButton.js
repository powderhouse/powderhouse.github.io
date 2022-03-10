import styled from "styled-components";
import SVG from "react-inlinesvg";

function ArrowButton({
  text,
  color,
  link,
  buttonWidth,
  buttonThickness,
  buttonTextLength,
  ...rest
}) {
  return (
    <Button {...rest}>
      <label>
        <ArrowContainer>
          <input style={{ display: "none" }} type="submit" />
          <SVG
            src={`/buttons/${buttonWidth}-${buttonThickness}-${buttonTextLength}.svg`}
            stroke={color}
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            // preProcessor={zoomViewBox}
            {...rest}
          />
          <ButtonText color={color}>{text}</ButtonText>
        </ArrowContainer>
      </label>
    </Button>
  );
}

let ArrowContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-align: left; // TODO: Figure out why we need this
  // TODO: Fix hack designed around the jobs page
  display: flex;
  flex-direction: column;
  justify-content: center;
  & svg path {
    vector-effect: non-scaling-stroke;
  }
`;

let Button = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

let ButtonLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

let ButtonText = styled.div`
  position: absolute;
  // font-size: var(--step-down-2);f
  color: ${(props) => props.color};
  padding-left: 0.75em;
`;

export default ArrowButton;
