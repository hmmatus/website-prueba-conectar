import { RegisterFormP } from "@/model/auth/register.model";
import { service } from "../config"
import { userRoutes } from "./userRoutes";

export const userService = {
  getAllUsers: () => {
    service.get(userRoutes.getAll());
  },
  register: (data: RegisterFormP) => {
    service.post(userRoutes.register(), data, {
      'content-type': 'multipart/form-data'
    })
  }
}