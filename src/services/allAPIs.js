import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// register
export const registerAPI = (reqBody) => {
  return commonAPI('POST', `${serverURL}/api/register`, reqBody, {});
};

// login
export const loginAPI = (reqBody) => {
  return commonAPI('POST', `${serverURL}/api/login`, reqBody, {});
};


// google login
export const googleloginAPI = (reqBody) => {
  return commonAPI('POST', `${serverURL}/api/google-login`, reqBody, {});
};

//upload  books
export const uploadBookAPI=(reqbody,reqHeader)=>{
  return commonAPI('POST',`${serverURL}/api/addBook`,reqbody,reqHeader)
}

export const getHomeBookAPI=(reqbody,reqHeader)=>{
  return commonAPI('GET',`${serverURL}/api/HomeBooks`)
}

export const getAllBookAPI=(reqbody,reqHeader)=>{
  return commonAPI('GET',`${serverURL}/api/AllBook`)
}

