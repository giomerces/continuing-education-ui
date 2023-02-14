import styled from "styled-components";
import { Paper } from "@mui/material";

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: ${({ theme }) => theme.spacing(4)};
  width: 100%;
  height: 100%;
`;

export const StyledPaper = styled(Paper)``;
