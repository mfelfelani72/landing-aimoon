import axios from "./api";

export const ConnectToServer = async (
    method,
    endPoint,
    parameter,
    header,
    route,
) => {
    try {
        if (method === "post") {
            return await axios.post(endPoint, parameter, header);
        } else if (method === "get") {
            return await axios.get(endPoint, header);
        }
    } catch (error) {
        console.log({
            message:
                "Connection to server failed, this route is: --> " + route + " <--",
            error: error,
        });
        return false;
    }
};
