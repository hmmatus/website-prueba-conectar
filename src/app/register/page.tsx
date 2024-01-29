'use client'
import RegisterLayout from "@/components/layouts/register/Register";
import { RegisterFormP } from "@/model/auth/register.model";
import { userService } from "@/service/user/userService";
import React, { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  function register(data: RegisterFormP) {
    setLoading(true);
    try {
      const result = userService.register(data);
      return result;
    } catch (error) {
      throw new Error(`${error}`);
    } finally {
      setLoading(false);
    }
  }
  return <RegisterLayout loading={loading} onRegister={(data) => register(data)} />;
}
