"use client";
import FormInput from "@/components/common/inputs/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { forgotPasswordSchema } from "@/lib/schemas/yup";

const ForgotPasswordForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const handleForgotSubmit = (values) => {
    console.log(values);
  };

  return (
    <form
      noValidate
      aria-label="Forgot password form"
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(handleForgotSubmit)}
    >
      <FormInput
        id="email"
        label="Email Address"
        name="email"
        type="email"
        infoText="Check spam if you don't see it within a few minutes"
        autoComplete="email"
        {...register("email")}
        errorMsg={errors?.email?.message}
        required
        placeholder="you@example.com"
      />

      {/* Divider */}
      <div className="border-t border-text-500/8 mt-1" role="separator" />

      {/* Submit */}
      <button type="submit" className="btn btn_light">
        Send Reset Link →
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
