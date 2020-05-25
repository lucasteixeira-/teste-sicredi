import Axios from "axios";

const url = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

// Consulta API de Login
export const apiDragao = Axios.create({
  baseURL: `${url}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

