import axiosClient from "./axiosClient";

const login = async (username, password) => {
  try {
    const response = await axiosClient.post("/auth/login", {
      username,
      password,
    });
    localStorage.setItem("auth-token", response.data.token);
    return response.data.user;
  } catch (error) {
    throw error.response;
  }
};

const authenticate = async () => {
  try {
    const response = await axiosClient.get("/authenticate", {
      headers: {
        authentication: localStorage.getItem("auth-token"),
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getEmails = async () => {
  try {
    const response = await axiosClient.get("/auth/emails");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { login, authenticate, getEmails };
