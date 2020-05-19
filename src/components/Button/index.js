import styled, { css } from "styled-components";
import { primaryColor } from "utils/variables";

const Button = styled.button`
  padding: 15px 30px;
  background-color: ${primaryColor};
  color: #fff;
  font-size: 18px;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: transparent;
    color: ${primaryColor};
    border-color: gray;
  }

  ${({ small }) =>
    small &&
    css`
      padding: 10px 20px;
      font-size: 15px;
      font-weight: 700;
    `}

  ${({ cart }) =>
    cart &&
    css`
      margin-top: 20px;
    `}
`;

export default Button;
