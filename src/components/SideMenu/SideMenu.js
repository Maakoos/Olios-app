import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { secondaryColor } from "utils/variables";
import { openMenu } from "store/actions";
import Button from "components/SideMenu/Button";
import livingRoomIcon from "img/living-room.png";
import officeIcon from "img/office.png";
import accesoriesIcon from "img/office.png";
import kitchenIcon from "img/kitchen.png";
import kidsIcon from "img/kids.png";
import CategoryIcon from "components/CategoryIcon";

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 15vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: -5px 0px 10px 0px ${secondaryColor};
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  transition: 0.5s transform ease;
  z-index: 10;
`;

const SideNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  list-style: none;
`;

const NavItem = styled.li``;

const SideMenu = ({ openMenu, open }) => (
  <>
    <Button onClick={openMenu} isOpen={open}></Button>
    <Wrapper isOpen={open}>
      <SideNav>
        <NavList>
          <NavItem>
            <CategoryIcon
              path="/living-room"
              name="living room"
              img={livingRoomIcon}
            />
          </NavItem>
          <NavItem>
            <CategoryIcon path="/office" name="office" img={officeIcon} />
          </NavItem>
          <NavItem>
            <CategoryIcon path="/kids" name="kids" img={kidsIcon} />
          </NavItem>
          <NavItem>
            <CategoryIcon path="/kitchen" name="kitchen" img={kitchenIcon} />
          </NavItem>
          <NavItem>
            <CategoryIcon
              path="/accesories"
              name="accesories"
              img={accesoriesIcon}
            />
          </NavItem>
        </NavList>
      </SideNav>
    </Wrapper>
  </>
);

const mapStateToProps = (state) => {
  const { open } = state;
  return { open };
};

const mapDispatchToProps = (dispatch) => ({
  openMenu: () => dispatch(openMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
