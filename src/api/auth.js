import axiosClient from "./axiosClient";

const login = async (username, password) => {
  try {
    const response = await axiosClient.post("/auth/login", {
      username,
      password,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const authenticate = async () => {
  try {
    const response = await axiosClient.get("/authenticate", {
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
