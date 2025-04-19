import axios from "./api";

export const getData = async (
  endPoint,
  parameter,
  route,
  authorization = "48e07eef-d474-47a5-8da4-3e946331369a"
) => {
  try {
    return await axios.post(endPoint, parameter, {
      headers: {
        Authorization: authorization,
      },
    });
  } catch (error) {
    console.log({
      message:
        "Connection to server failed, this route is: --> " + route + " <--",
      error: error,
    });
  
    return false;
  }
};
