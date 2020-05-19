import styled, { css } from "styled-components";
import { primaryColor } from "utils/variables";

const Button = styled.button`
  position: fixed;
  top: 50px;
  right: 50px;
  width: 40px;
  height: 35px;
  background: transparent;
  border: none;
  border-top: 5px solid ${primaryColor};
  transition: 0.3s all linear;
  cursor: pointer;
  z-index: 20;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 5px solid ${primaryColor};
    transform: translateY(10px);
    transition: 0.3s all linear;
  }

  &::after {
    transform: translateY(25px);
    transition: 0.3s all linear;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(45deg) translateY(5px);
      border-color: transparent;

      &::after {
        transform: rotate(-90deg) translateX(-10px);
      }
    `}
`;

export default Button;
