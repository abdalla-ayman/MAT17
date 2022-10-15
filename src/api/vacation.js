import axiosClient from "./axiosClient";

const postVacation = async (str_date, type, days) => {
  try {
    const response = await axiosClient.post("/vacation/add", {
      str_date,
      type,
      days,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

const listVacation = async (page) => {
  try {
    const response = await axiosClient.get("/vacation", {
      headers: {
        page,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

const changeStatus = async (id, action) => {
  try {
    const response = await axiosClient.put("/vacation", {
      headers: {
        id,
        action,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export { postVacation, listVacation, changeStatus };
