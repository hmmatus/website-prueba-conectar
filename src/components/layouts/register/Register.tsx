"use client";
import MainButton from "@/components/elements/buttons/MainButton/MainButton";
import InputText from "@/components/elements/form/inputs/InputText/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { registerSchema } from "./validation";
import { RegisterFormP } from "@/model/auth/register.model";

type Props = {
  onRegister(data: RegisterFormP): void;
  loading: boolean;
};
const RegisterLayout = ({ onRegister }: Props) => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    idNumber: "",
    idType: "",
    department: "",
    city: "",
    address: "",
    monthRevenue: "",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormP> = (data) => onRegister(data);

  return (
    <div className={`flex w-100 flex-col items-center justify-center `}>
      <h1> Sign Up</h1>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputText
            title="Name"
            name="name"
            value={field.value}
            onChange={(value) => field.onChange(value)}
            errorMessage={errors.name?.message}
          />
        )}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputText
            title="Last Name"
            name="lastName"
            value={field.value}
            onChange={(value) => field.onChange(value)}
            errorMessage={errors.lastName?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputText
            title="Email"
            name="email"
            value={field.value}
            onChange={(value) => field.onChange(value)}
            errorMessage={errors.email?.message}
          />
        )}
      />

      <Controller
        name="idNumber"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputText
            title="Identification Number"
            name={field.name}
            value={field.value}
            onChange={(value) => field.onChange(value)}
            errorMessage={errors.idNumber?.message}
          />
        )}
      />
      <Controller
        name="department"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputText
            title="Department"
            name="department"
            value={field.value}
            onChange={(value) => field.onChange(value)}
            errorMessage={errors.department?.message}
          />
        )}
      />
      <Controller
        name="city"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputText
            title="City"
            name="city"
            value={field.value}
            onChange={(value) => field.onChange(value)}
            errorMessage={errors.city?.message}
          />
        )}
      />
      <Controller
        name="address"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <InputText
            title="Address"
            name={field.name}
            value={field.value}
            onChange={(value) => field.onChange(value)}
            errorMessage={errors.address?.message}
          />
        )}
      />
      <Controller
        name="monthRevenue"
        control={control}
        defaultValue={0}
        render={({ field }) => (
          <InputText
            title="Month Income"
            name="monthRevenue"
            value={field.value}
            onChange={(value) => field.onChange(value)}
            errorMessage={errors.monthRevenue?.message}
          />
        )}
      />
      <MainButton
        title="Sign Up"
        className="m-2"
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default RegisterLayout;
