"use client";

import FormInput from "@/components/common/inputs/FormInput";
import CheckboxInput from "@/components/common/inputs/CheckboxInput";
import PasswordInput from "@/components/common/inputs/PasswordInput";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/lib/schemas/yup";

const RegisterForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleLoginSubmit = (data) => {
    console.log({ data });
  };

  return (
    <form
      noValidate
      aria-label="Create account form"
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(handleLoginSubmit)}
    >
      {/* Full name row */}
      <div className="grid grid-cols-2 gap-4">
        <FormInput
          label="First Name"
          id="firstName"
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          placeholder="Ada"
          {...register("firstName")}
          errorMsg={errors?.firstName?.message}
        />

        <FormInput
          label="Last Name"
          id="lastName"
          name="lastName"
          type="text"
          autoComplete="given-name"
          required
          placeholder="Lovelace"
          {...register("lastName")}
          errorMsg={errors?.lastName?.message}
        />
      </div>

      {/* Username */}

      <FormInput
        label="Username"
        id="username"
        name="username"
        type="text"
        autoComplete="username"
        required
        placeholder="ada_lovelace"
        {...register("username")}
        errorMsg={errors?.username?.message}
      />

      <FormInput
        label="Email Address"
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="ada@example.com"
        {...register("email")}
        errorMsg={errors?.email?.message}
      />

      {/* Email */}
      <PasswordInput
        label="Password"
        id="password"
        autoComplete="new-password"
        name="password"
        required
        minLength={8}
        placeholder="Min. 8 characters"
        hint="Use 8+ characters, mix letters &amp; numbers"
        {...register("password")}
        errorMsg={errors?.password?.message}
      />

      <PasswordInput
        label=" Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        required
        placeholder="Repeat your password"
        {...register("confirmPassword")}
        errorMsg={errors?.confirmPassword?.message}
      />

      <CheckboxInput
        id="terms"
        name="terms"
        {...register("terms")}
        errorMsg={errors?.terms?.message}
        required
        label={
          <>
            I agree to the{" "}
            <Link
              href="/terms"
              className="text-text-500/60 underline underline-offset-2 hover:text-text-500 transition-colors"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-text-500/60 underline underline-offset-2 hover:text-text-500 transition-colors"
            >
              Privacy Policy
            </Link>
          </>
        }
      />

      {/* Divider */}
      <div className="border-t border-text-500/8 mt-1" role="separator" />

      {/* Submit */}
      <button
        type="submit"
        className="
                btn btn_light
              "
      >
        Create My Account →
      </button>
    </form>
  );
};

export default RegisterForm;
