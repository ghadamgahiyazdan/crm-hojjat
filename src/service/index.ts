import axios from "axios";

const server = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const register = (data: any) => server.post("auth/register", data);
const login = (data: any) => server.post("auth/login", data);
const userInfo = () => server.get("userinfo");
const logout = () => server.get("auth/logout");
const otp = (data: any) => server.post("auth/otp", data);

export { register, login, userInfo, logout, otp };
