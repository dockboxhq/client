import styled from "styled-components";
import { Button } from "reactstrap";

export const StyledText = styled.div`
  font-family: Montserrat Alternates;
  font-size: 2rem;
  color: ${(props) => props.color};
  text-align: center;
`;

export const Divider = styled.div`
  height: 2px;
  width: 65%;
  margin: auto;
  margin-top: 1rem;
  background: gray;
`;

export const RoundedButton = styled(Button)`
  border-radius: 10px;
  outline: none;
  box-shadow: none;
  &:focus {
    box-shadow: none;
    outline: none;
  }
  &:active {
    box-shadow: none;
    outline: none;
  }
`;

export const StyledURLShow = styled.div`
  background: white;
  border-radius: 10px;
  text-align: left;
  font-family: Montserrat Alternates;
  padding: 10px;
  max-width: 30rem;
  color: #505050;
`;

export const TextField = styled.input`
  outline: none;
  padding-left: 10px;
  border-radius: 10px;
  border-box: none;
  border: none;
  max-width: 30rem;
  color: #505050;
  font-family: Montserrat Alternates;
  &:disabled {
    background: darkgray;
  }
}
`;
