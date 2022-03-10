import styled from "styled-components";
import SVG from "react-inlinesvg";

function ArrowButton({
  text,
  color,
  buttonWidth,
  buttonThickness,
  buttonTextLength,
  link,
  ...rest
}) {
  return (
    <Button {...rest}>
      {link ? (
        <ButtonLink href={link}>
          <ArrowContainer>
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
        </ButtonLink>
      ) : (
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
      )}
    </Button>
  );
}

let ButtonLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

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

let ButtonText = styled.div`
  position: absolute;
  // font-size: var(--step-down-2);f
  color: ${(props) => props.color};
  padding-left: 0.75em;
`;

export default ArrowButton;
