import { RegisterType } from "@/types/register.type";
import { LoginType } from "@/types/login.type";
import axios from "./axios.config";

export const authRegisterJWT = async (data: RegisterType) => {
  return await axios.post("/signup", data);
};

export const authLoginJWT = async (data: LoginType) => {
  return await axios.post("/signin", data);
};

export const getData = async () => {
  return await axios.get("/google");
};

export const getUser = async () => {
  return await axios.get("/user");
};
