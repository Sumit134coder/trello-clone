"use client";

import CheckboxInput from "../common/CheckboxInput";
import FormInput from "../common/FormInput";
import PasswordInput from "../common/PasswordInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/lib/schemas/yup";

const LoginForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLoginSubmit = (data) => {
    console.log({ data });
  };

  console.log({ errors });

  return (
    <form
      noValidate
      aria-label="Sign in form"
      className="flex flex-col gap-7"
      onSubmit={handleSubmit(handleLoginSubmit)}
    >
      {/* Email / Username */}
      <FormInput
        label="Email"
        id="identifier"
        {...register("email")}
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="you@example.com"
        errorMsg={errors?.email?.message}
      />
      <PasswordInput
        id="password"
        showForgotLink
        label="Password"
        {...register("password")}
        name="password"
        autoComplete="current-password"
        required
        placeholder="••••••••••"
        errorMsg={errors?.password?.message}
      />
      {/* Remember me */}
      <CheckboxInput label="Keep me signed in" id="remember" name="remember" />

      {/* Divider */}
      <div className="border-t border-text-500/8 mt-1" role="separator" />

      {/* Submit */}
      <button type="submit" className="btn btn_light">
        Sign In →
      </button>
    </form>
  );
};

export default LoginForm;
