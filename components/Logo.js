import styled from "styled-components";
import SVG from "react-inlinesvg";

let LogoContainer = styled.div``;

function Logo({ $color, logotype, direction, style, ...rest }) {
  let logoRoot = "/logo";
  let path = `${logoRoot}/${logotype ? `logotype-${direction}` : `logo`}.svg`;
  return (
    <LogoContainer style={style}>
      <SVG
        src={path}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={$color}
        fill={$color}
        {...rest}
      />
    </LogoContainer>
  );
}

export default Logo;
