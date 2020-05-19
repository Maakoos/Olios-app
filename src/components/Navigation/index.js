import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { primaryColor, secondaryColor } from "utils/variables";
import logo from "img/logo.png";
import { closeMenu } from "store/actions";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 5vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  box-shadow: 5px 0px 10px 0px ${secondaryColor};
`;

const Logo = styled.img``;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 30px 0;
`;

const Link = styled.a`
  display: block;
  font-size: 30px;
  color: ${secondaryColor};
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    color: ${primaryColor};
    transform: scale(1.3);
  }
`;

const Navigation = ({ closeMenu }) => (
  <Wrapper>
    <Logo src={logo} />
    <NavList>
      <NavItem>
        <Link as={NavLink} to="/" onClick={closeMenu}>
          <span className="fas fa-home"></span>
        </Link>
      </NavItem>
      <NavItem>
        <Link as={NavLink} to="/shop-basket" onClick={closeMenu}>
          <span className="fas fa-shopping-basket"></span>
        </Link>
      </NavItem>
      <NavItem>
        <Link as={NavLink} to="/search" onClick={closeMenu}>
          <span className="fas fa-search"></span>
        </Link>
      </NavItem>
    </NavList>
  </Wrapper>
);

const mapDispatchToProps = (dispatch) => ({
  closeMenu: () => dispatch(closeMenu()),
});

export default connect(null, mapDispatchToProps)(Navigation);
