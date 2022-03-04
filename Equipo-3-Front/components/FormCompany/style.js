import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const WrapperForm = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Form = styled.form`
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  align-items: center;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;
  position: relative;
  padding: 10px;
`;

export const Camp = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Input = styled.input`
  width: 300px;
  border-radius: 16px;
  outline: none;
  border: solid 1px grey;
  padding: 10px;
  margin-top: 10px;
  font-weight: 300;
`;


export const Select = styled.select`
width: 300px;
  border-radius: 16px;
  outline: none;
  border: solid 1px grey ;
  padding: 10px;
  margin-top: 10px;
  font-weight: 300;
`



export const Label = styled.label`
font-weight: bold;
`;

export const ButtonSave = styled(Button)`
  color: black;
  background-color: #01cbd0;
  border-radius: 16px;
  position: ${(props) => (props.absolute ? "absolute" : "null")};
  bottom: 0;
  left: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 30px;
  position: ${(props) => (props.absolute ? "absolute" : "null")};
  top: -60px;
`;
