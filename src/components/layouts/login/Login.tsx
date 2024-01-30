"use client";
import React, { useState } from "react";
import InputText from "@/components/elements/form/inputs/InputText/InputText";
import MainButton from "@/components/elements/buttons/MainButton/MainButton";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logIn } from "@/redux/slices/auth";
import { useRouter } from "next/navigation";

export default function LoginLayout() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    dispatch(logIn());
    router.push("/home");
  };

  function onChangeValue(index: string, value: string) {
    setData({ ...data, [index]: value });
  }

  return (
    <div className={`w-full flex items-center justify-center`}>
      <div className="w-80 flex flex-col items-center justify-center">
      <h1 className="text-2xl text-bold my-2">Login</h1>
      <InputText
        title="Email"
        name="email"
        value={data?.email}
        inputProps={{
          className: "w-full"
        }}
        onChange={(value) => onChangeValue("email", value)}
      />
      {/* <InputText
        title="Password"
        name="password"
        value={data?.password}
        onChange={(value) => onChangeValue("password", value)}
      /> */}
      <Link className="text-focus-primary mb-4" href="/register">
        Dont you have an account? Sign Up
      </Link>
      <MainButton
        type="button"
        title="Login"
        className="w-full mx-2"
        onClick={handleLogin}
      />
      </div>
    </div>
  );
}
