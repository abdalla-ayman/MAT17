import axiosClient from "./axiosClient";

const login = async (username, password) => {
  try {
    const response = await axiosClient.post("/login", { username, password });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const authenticate = async () => {
  try {
    const response = await axiosClient.get("/login", {
      headers: {
        authToken: localStorage.getItem("auth-token"),
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { login, authenticate };
