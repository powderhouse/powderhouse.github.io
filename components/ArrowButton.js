import styled from 'styled-components';
import { buttonSVGs } from "../site-data.js";

function ArrowButton({text,color,link,buttonWidth,buttonThickness,buttonTextLength}) {
  return (

    <Button>
        <ButtonLink href={link}>
            {buttonSVGs[buttonWidth][buttonThickness][buttonTextLength](color)}
            <ButtonText color={color}>{text}</ButtonText>
        </ButtonLink>
    </Button>

  )
};

let Button = styled.button`
  position: relative;
  display: flex;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
`;

let ButtonLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

let ButtonText = styled.div`
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  position: absolute;
  color:${props => props.color ? "var(--"+props.color+")" : "off-black"};
`;

export default ArrowButton;
