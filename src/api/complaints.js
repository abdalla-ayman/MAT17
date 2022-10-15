import axiosClient from "./axiosClient";

const postComplaint = async (employeeId, message) => {
  try {
    const response = await axiosClient.post("/complaint", {
      employeeId,
      message,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

const listComplaint = async () => {
  try {
    const response = await axiosClient.get("/complaint/list");
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export { postComplaint, listComplaint };
