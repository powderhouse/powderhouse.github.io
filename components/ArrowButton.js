import styled from "styled-components";
import { buttonSVGs } from "../site-data.js";

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
      <ButtonLink href={link}>
        {buttonSVGs[buttonWidth][buttonThickness][buttonTextLength](color)}
        <ButtonText color={color}>{text}</ButtonText>
      </ButtonLink>
    </Button>
  );
}

let Button = styled.div`
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  grid-column: 1 / ${(props) => (props.colWidth ? props.colWidth : 4)};
`;

let ButtonLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

let ButtonText = styled.div`
  position: absolute;
  // TODO: CHeck whether we really need the px
  // bottom: calc(3px + 1.3rem);
  // left: calc(3px + 1.3rem);
  bottom: calc(var(--body-line-height));
  left: calc(var(--body-line-height));
  color: ${(props) =>
    props.color ? "var(--" + props.color + ")" : "off-black"};
`;

export default ArrowButton;
