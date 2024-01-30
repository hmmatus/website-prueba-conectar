'use client'
import RegisterLayout from "@/components/layouts/register/Register";
import { RegisterFormP } from "@/model/auth/register.model";
import { userService } from "@/service/user/userService";
import React, { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  async function register(data: RegisterFormP) {
    setLoading(true);
    try {
      const imageResult = await userService.uploadPicture(data.image);
      const result = await userService.register({
        ...data,
        image: imageResult.url
      });
      return result;
    } catch (error) {
      throw new Error(`${error}`);
    } finally {
      setLoading(false);
    }
  }
  return <RegisterLayout loading={loading} onRegister={(data) => register(data)} />;
}
