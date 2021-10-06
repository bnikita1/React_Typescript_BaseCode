import axios from "axios";

export const valiadteToken = () => {
  const token = getToken();
  if (token) {
    return true;
  }
  return false;
};

export const getToken = () => {
  return localStorage.getItem("login-auth-token");
};

export const setToken = (token:string) => {
  localStorage.setItem("login-auth-token", token);
};

export const getPostData = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  // const res = response.data;
  // const response = res.data;
  // console.log("Res", res.data);
  // setpost(response);
  // console.log("post", post);
  // return "My First Album";
  const { data } = response;
  console.log(response);
  return data;
  // });
};
