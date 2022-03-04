import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const TableContainer = styled.section`
  display: flex;
  margin: 20px 0 30px 0;
  justify-content: space-around;
  font-family: "Times New Roman";
`;

export const ButtonCompany = styled(Button)`
  color: black;
  background-color: #01cbd0;
  border-radius: 16px;
  position: ${(props) => (props.absolute ? "absolute" : "null")};
  bottom: 0;
  /* left: 20px; */
  margin: 15px 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
`;

export const AllCompaniesContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  position: ${(props) => (props.absolute ? "absolute" : "null")};
  top: -60px;
`;
