import { createTheme } from "@mui/material/styles";
import { pink, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: pink[100],
    },
    grey: {
      main: grey[200],
    },
  },
});
