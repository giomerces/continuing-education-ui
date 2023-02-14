import { AppBar as OriginalAppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import { useCallback, useState } from "react";
import LoginDialog from "../LoginDialog/LoginDialog";
import { useSelector } from "react-redux";
import { StyledTypographyUserName, StyledTypographyTitle } from "./styles";

export const AppBar = () => {
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state?.user);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onLoginClick = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <OriginalAppBar position="static">
        <Toolbar>
          <IconButton size="large">
            <SchoolIcon />
          </IconButton>
          <StyledTypographyTitle sx={{ flexGrow: 1 }}>
            Continuing Education
          </StyledTypographyTitle>
          {user?.isAuthenticated ? (
            <StyledTypographyUserName>{user.name}</StyledTypographyUserName>
          ) : (
            <Button color="inherit" onClick={onLoginClick}>
              Login
            </Button>
          )}
        </Toolbar>
      </OriginalAppBar>
      <LoginDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default AppBar;
