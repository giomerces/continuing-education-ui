import { Typography } from "@mui/material";
import styled from "styled-components";

export const StyledDiv = styled.div`
  max-height: 600px;
  overflow: auto;
  border-left: 1px solid ${({ theme }) => theme.palette.divider};
`;

export const StyledInnerDivDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const StyledTypographyTitle = styled(Typography)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: white;
  padding-left: ${({ theme }) => theme.spacing(1)};
`;
