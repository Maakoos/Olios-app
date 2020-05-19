import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { primaryColor, thirdColor } from "utils/variables";

const Link = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin: 50px 0;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  transition: 0 0.2 all linear;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border: 1px solid ${primaryColor};
    transform: translateX(-100%);
    transition: 0.2s ease-in-out;
  }

  &:hover::before {
    transform: translateX(0);
  }

  &.active {
    &::before {
      transform: translateX(0);
    }
  }
`;

const Img = styled.img`
  width: 40px;
`;

const CategoryName = styled.span`
  margin-right: 20px;
  color: ${thirdColor};
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
`;

const CategoryIcon = ({ path, name, img }) => (
  <Link to={path} as={NavLink} activeClassName="active">
    <CategoryName>{name}</CategoryName>
    <Img src={img} alt="" />
  </Link>
);

export default CategoryIcon;
