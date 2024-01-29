"use client";
import React, { useState } from "react";
import InputText from "@/components/elements/form/inputs/InputText/InputText";
import MainButton from "@/components/elements/buttons/MainButton/MainButton";
import Link from "next/link";

export default function LoginLayout() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function onChangeValue(index: string, value: string) {
    setData({ ...data, [index]: value });
  }

  return (
    <div className={`flex w-100 flex-col items-center justify-center `}>
      <h1 className="text-xl">Login</h1>
      <InputText
        title="Email"
        name="email"
        value={data?.email}
        onChange={(value) => onChangeValue("email", value)}
      />
      <InputText
        title="Password"
        name="password"
        value={data?.password}
        onChange={(value) => onChangeValue("password", value)}
      />
      <Link className="text-focus" href="/register">
        Dont you have an account? Sign Up
      </Link>
      <MainButton title="Login" className="m-2" />
    </div>
  );
}
