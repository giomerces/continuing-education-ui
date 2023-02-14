import { Typography } from "@mui/material";
import styled from "styled-components";

export const StyledItemDiv = styled.div`
  margin: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)};
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.palette.primary.main : null};
  border-radius: ${({ theme }) => theme.spacing(1)};
`;

export const StyledInnerDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledProgressDiv = styled.div`
  padding-top: ${({ theme }) => theme.spacing(1)};
`;

export const StyledTypography = styled(Typography).attrs({
  component: "div",
  variant: "caption",
})`
  padding: ${({ theme }) => theme.spacing(1)};
  cursor: pointer;
`;
