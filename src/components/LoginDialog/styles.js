import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const StyledTextField = styled(TextField).attrs({
  variant: "outlined",
  fullWidth: true,
  required: true,
})`
  padding-bottom: 8px;
`;

export const StyledButton = styled(Button).attrs({
  type: "submit",
  color: "primary",
  variant: "contained",
  fullWidth: true,
})``;
