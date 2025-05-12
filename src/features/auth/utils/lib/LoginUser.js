// Functions

import { ConnectToServer } from "../../../../../utils/services/api/ConnectToServer.js";
import SetErrorOnInput from "../../../../../utils/lib/SetErrorOnInput.js";

// Constants

import { userLogin } from "../constants/EndPoints.js";

const LoginUser = (navigate, param, setErrors, setSendRequest) => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const parameter = {
    email: username,
    password: password,
  }

  ConnectToServer("post", userLogin, parameter, "", "login").then(
    (response) => {
      if (response?.data?.return) {
        sessionStorage.setItem("session_id", response?.data?.user_token);
        sessionStorage.setItem("key", response?.data?.username);
        setSendRequest(false);
        navigate("/dashboard/home", {
          state: { to_location: "/dashboard/home" },
        });
      } else if (response?.data?.return === false) {
        setSendRequest(false);
        setErrors({ password: "login_invalid" });
        SetErrorOnInput({ type: param });
      }
    }
  );
}


export default LoginUser;
