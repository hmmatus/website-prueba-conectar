import { RegisterFormP } from "@/model/auth/register.model";

const BASE_URL = '/user';

const getAll = () => `${BASE_URL}/all`;
const register = () => `${BASE_URL}`;

export const userRoutes = {
  getAll: () => getAll(),
  register: () => register()
}