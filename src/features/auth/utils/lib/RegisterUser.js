import { ConnectToServer } from "../../../../../utils/services/api/ConnectToServer.js";

// constants
import { userRegister } from "../constants/EndPoints.js";

const RegisterUser = (navigate, parameter, setErrors, setSendRequest) => {

  ConnectToServer("post", userRegister, parameter, "", "RegisterUser").then((response) => {
    if (response?.data?.return) {
      setSendRequest(false);
      navigate("/login")
    }
    else {
      setErrors({ email: "invalid_email" });
      setSendRequest(false);
    }
  })
};

export default RegisterUser;
