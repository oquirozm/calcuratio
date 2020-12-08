import React from "react";
import styled from "styled-components";
import { space } from "styled-system";

const Button = styled.button`
  width: 180px;
  height: 40px;
  background-color: #c63e4e;
  color: #fff;
  font-family: "Jost* 300", sans-serif;
  border-radius: 100px;
  border: none;
  font-size: 20px;
  ${space}

  &:hover {
    background-color: #b53544;
    cursor: pointer;
    transform: translateY(-1px);
  }

  &:disabled {
    background-color: #c76f7a;
  }
`;

export default Button;