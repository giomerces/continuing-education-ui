import { Avatar, Card } from "@mui/material";
import styled from "styled-components";

export const StyledAvatar = styled(Avatar)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const StyledDiv = styled.div`
  margin: ${({ theme }) => theme.spacing(1)};
`;

export const StyledCard = styled(Card)`
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.palette.primary.main : null};
  width: 200px;
  align-items: center;
`;
