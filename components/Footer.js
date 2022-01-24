import { navMenuItems, socials } from "../site-data.js";
import styled from "styled-components";
import { useRouter } from "next/router";

import Icon from "../components/Icon.js";
import {
  gap,
  baseGrid,
  colorByProp,
  ShiftBy,
  highlight,
} from "../components/global.js";

function Footer() {
  let navItems = navMenuItems.slice();
  navItems.unshift({ text: "Home", href: "/" });
  const router = useRouter();
  return (
    <Wrapper>
      <FooterNavigation>
        <NavList>
          {navItems.map((n, i) => {
            return (
              <NavItem key={i}>
                <NavLink href={n.href}>{n.text}</NavLink>
              </NavItem>
            );
          })}
        </NavList>
      </FooterNavigation>
      <FooterContact>
        <NavList>
          <NavItem>
            <NavLink href="https://goo.gl/maps/2BFLEfCzk8ML1YoH8">
              339R Summer Street <br />
              Somerville, MA 02144
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="mailto:us@powderhouse.org">
              us@powderhouse.org
            </NavLink>
          </NavItem>
          <NavItem>
            <SocialList>
              {socials.map((n) => {
                return (
                  <IconListItem
                    href={n.href}
                    key={n.id}
                    icon={n.service.toLowerCase()}
                  ></IconListItem>
                );
              })}
            </SocialList>
          </NavItem>
        </NavList>
      </FooterContact>
      {router.pathname != "/" ? (
        <FooterNewsletterSignup>
          <SignUpForm action="" method="get">
            <EmailInput type="email" name="email" id="email" required />
            <SubmitButton type="submit" value="Sign Up" />
          </SignUpForm>
        </FooterNewsletterSignup>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

let IconListItem = ({ className, href, icon }) => {
  return (
    <li className={className}>
      <ShiftBy x={0} y={0}>
        <NavLink href={href}>
          <Icon icon={icon} />
        </NavLink>
      </ShiftBy>
    </li>
  );
};

let Wrapper = styled.footer`
  grid-column: 1 / -1;
  color: inherit;
  stroke: inherit;
  fill: inherit;
  ${baseGrid};
  ${(props) => colorByProp(props)}};
  padding: calc(5 * 1.3rem) 0;
`;

let FooterNavigation = styled.div`
  grid-column: 1 / 4;
`;

let NavList = styled.ol`
  list-style-type: none;
  padding: 0;
  margin: 0;
  grid-column: 4 / 6;
`;

let NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: calc(1.3rem / 4) 0;
`;

let NavLink = styled.a`
  color: var(--off-black);
  text-decoration: none;
  line-height: 1.3rem;
`;

let Address = styled.div`
  padding: calc(1.3rem / 4) 0;
`;
let SocialList = styled(NavList)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%; // TODO: Not on horizontal grid, but better looking?
`;

let FooterContact = styled.div`
  grid-column: 4 / 6;
`;

let FooterNewsletterSignup = styled.div`
  grid-column: 7 / 10;
`;

let SignUpShoutOut = styled.h4``;

let SignUpForm = styled.form`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: min-content;
  column-gap: var(--gap);
`;

let EmailInput = styled.input`
  grid-column: 1 / 3;
`;

let SubmitButton = styled.input`
  grid-column: 3 / 4;
`;

export default Footer;
