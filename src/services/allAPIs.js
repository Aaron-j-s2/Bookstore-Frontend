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

export const getHomeBookAPI=()=>{
  return commonAPI('GET',`${serverURL}/api/HomeBooks`,)
}

export const getAllBookAPI = (searchKey, reqHeader) => {
  return commonAPI('GET', `${serverURL}/api/AllBook?search=${searchKey}`, "", reqHeader);
}
//get a book
export const getABookAPI=(id,reqHeader)=>{
  return commonAPI('GET',`${serverURL}/api/ABook/${id}`,"",reqHeader)
}
//get all  books in admin side
export const getAdminAllBookAPI=(reqHeader)=>{
  return commonAPI('GET',`${serverURL}/api/admin-books`,"",reqHeader)
}


//get all  books in admin side
export const getAdminApprovedBookAPI=(reqBody,reqHeader)=>{
  return commonAPI('PUT',`${serverURL}/api/admin-approvedBooks`,reqBody,reqHeader)
}

//get all  users in admin side
export const getAllUsersAdminAPI=(reqHeader)=>{
  return commonAPI('GET',`${serverURL}/api/admin-allUsers`,"",reqHeader)
}

//-------------------------------Job-----------------------------------
export const uploadJobAPI = (reqBody, reqHeader) => {
    return commonAPI('POST', `${serverURL}/api/admin-addJobs `, reqBody, reqHeader)
}

export const getAllJobAPI = (reqHeader) => {
   return commonAPI('GET',`${serverURL}/api/admin-allJobs`,"",reqHeader)
}


export const deleteJobAPI = (id, reqHeader) => {
    return commonAPI('DELETE', `${serverURL}/api/admin-deleteJobs/${id}`, "", {})
}
