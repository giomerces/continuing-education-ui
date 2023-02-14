import PropTypes from "prop-types";
import { useMutation } from "react-query";
import { actions } from "src/reduxStore";
import api from "src/services/api";

const signInUserFn = async (params) => {
  const response = await api.post("/user", params);
  return response.data;
};
const useUserLogin = ({ onSuccess }) => {
  const { mutate: signInUser, isLoading: signInIsLoading } = useMutation(
    async ({ name, email }) => signInUserFn({ name, email }),
    {
      onSuccess: (data) => {
        onSuccess?.();
        actions.setUserData(data);
        localStorage.setItem("user", JSON.stringify(data));
      },
      retry: false,
    }
  );

  return {
    signInUser,
    signInIsLoading,
  };
};

useUserLogin.propTypes = {
  onSuccess: PropTypes.func,
};

export default useUserLogin;
