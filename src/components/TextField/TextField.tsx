import React from "react";
import styled from "styled-components";
const TextField = styled.input`
  outline: none;
  padding-left: 10px;
  border-radius: 10px;
  border-box: none;
  border: none;
  max-width: 30rem;
  color: #505050;
  font-family: "Montserrat Alternates";
  &:disabled {
    background: darkgray;
  }
}
`;
export default TextField;
