


import axios from "axios";

export default async function  isAuth(){
 try {
  axios.defaults.withCredentials = true;
  const res = await axios.get(`${import.meta.env.VITE_API}/user/authorize`)
  return res
 } catch (error) {
  
  console.log(error.message)
  return error.response
 }
}