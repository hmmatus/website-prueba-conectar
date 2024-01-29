import { RegisterFormP } from "@/model/auth/register.model";
import { service } from "../config"
import { userRoutes } from "./userRoutes";

export const userService = {
  getAllUsers: () => {
    return service.get(userRoutes.getAll());
  },
  register: (data: RegisterFormP) => {
    return service.post(userRoutes.register(), data, {
      'content-type': 'multipart/form-data'
    })
  }
}