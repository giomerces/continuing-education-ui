import { StyledButton, StyledTextField } from "./styles";
import PropTypes from "prop-types";
import Dialog from "@/components/Dialog";
import { CircularProgress } from "@mui/material";
import useUserLogin from "@/hooks/useUserLogin";
import { useCallback, useState } from "react";

const INITIAL_STATE = {
  name: "",
  email: "",
};
export const LoginDialog = ({ handleClose, open }) => {
  const [userData, setUserData] = useState(INITIAL_STATE);

  const { signInUser, signInIsLoading } = useUserLogin({
    onSuccess: handleClose,
  });

  const onClick = useCallback(() => {
    signInUser(userData);
  }, [signInUser, userData]);

  const onChangeProp = useCallback(
    (prop) => (event) => {
      setUserData((old) => ({ ...old, [prop]: event.target.value }));
    },
    []
  );

  return (
    <Dialog onClose={handleClose} open={open} title={"Login"}>
      {signInIsLoading ? (
        <CircularProgress />
      ) : (
        <>
          <StyledTextField
            label="Username"
            placeholder="Enter username"
            onChange={onChangeProp("name")}
          />
          <StyledTextField
            label="Email"
            placeholder="Enter email"
            onChange={onChangeProp("email")}
          />
          <StyledButton onClick={onClick}>Sign in</StyledButton>
        </>
      )}
    </Dialog>
  );
};

LoginDialog.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
};

export default LoginDialog;
