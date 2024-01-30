"use client";
import MainButton from "@/components/elements/buttons/MainButton/MainButton";
import InputText from "@/components/elements/form/inputs/InputText/InputText";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { registerSchema } from "./validation";
import { RegisterFormP } from "@/model/auth/register.model";
import InputFile from "@/components/elements/form/inputs/InputFile/InputFile";
import InputSelect from "@/components/elements/form/inputs/InputSelect/InputSelect";

type Props = {
  onRegister(data: RegisterFormP): void;
  loading: boolean;
};
const selectOptions = [{
  name: "Dui",
  value: "dui"
},{
  name: "Passport",
  value: "passport"
}]
const RegisterLayout = ({ onRegister }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormP> = (data) => {
    onRegister(data);
  };

  return (
    <div className={`flex w-100 flex-col items-center justify-center `}>
      <h1> Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <InputText
              title="Name"
              name={field.name}
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
              name={field.name}
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
              name={field.name}
              value={field.value}
              onChange={(value) => field.onChange(value)}
              errorMessage={errors.email?.message}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <InputText
              title="Phone Number"
              name={field.name}
              value={field.value}
              onChange={(value) => field.onChange(value)}
              errorMessage={errors.phone?.message}
            />
          )}
        />
        <Controller
          name="idType"
          control={control}
          defaultValue="dui"
          render={({ field }) => (
            <InputSelect
              title="Identification type"
              name={field.name}
              value={field.value}
              onChange={(value) => field.onChange(value)}
              errorMessage={errors.idType?.message}
              options={selectOptions}
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
              name={field.name}
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
              name={field.name}
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
              name={field.name}
              value={field.value}
              onChange={(value) => field.onChange(value)}
              errorMessage={errors.monthRevenue?.message}
            />
          )}
        />
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <InputFile
              title="Profile photo"
              name={field.name}
              value={field.value}
              onChange={(value) => field.onChange(value)}
              errorMessage={errors.image?.message}
            />
          )}
        />

        <MainButton className="mt-4" type="submit" title="Send" />
      </form>
    </div>
  );
};

export default RegisterLayout;
