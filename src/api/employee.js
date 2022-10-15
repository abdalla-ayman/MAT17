import axiosClient from "./axiosClient";

const addEmployee = async (data) => {
  try {
    const response = await axiosClient.post("/employee/add", data);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

const deleteEmployee = async (emp_id) => {
  try {
    let header = {
      "Content-Type": "application/json",
      id: emp_id,
    };
    const response = await axiosClient.delete("/employee", header);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

const ViewAll = async (page) => {
  try {
    let header = {
      "Content-Type": "application/json",
      page: page,
    };
    const response = await axiosClient.get("/employee", header);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

const ViewOne = async (emp_id) => {
  try {
    const response = await axiosClient.get(`/employee/${emp_id}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

const absence = async (emp_ids, date) => {
  try {
    const response = await axiosClient.post("/employee/abs", { emp_ids, date });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};

export { addEmployee, ViewAll, deleteEmployee, ViewOne, absence };
