import Axios from "axios";

export const getMembers = async () => {
  const url = await `${process.env.REACT_APP_HOST}/members`;
  const options = await {
    method: "GET",
    withCredentials: true,
    url: url,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": ["GET", "POST", "PATCH", "PUT", "DELETE"],
      "Access-Control-Allow-Headers": [
        "Origin",
        "Content-Type",
        "X-Auth-Token",
      ],
    },
  };
  return await Axios(options)
    .then((response) => {
      return response.data;
    })
    .catch((e) => console.error(e));
};
