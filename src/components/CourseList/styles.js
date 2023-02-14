import { Typography } from "@mui/material";
import styled from "styled-components";

export const StyledDiv = styled.div`
  justify-content: center;
  overflow: auto;
  align-items: center;
  max-height: 600px;
`;

export const StyledTypographyTitle = styled(Typography)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: white;
  padding-left: ${({ theme }) => theme.spacing(1)};
`;
