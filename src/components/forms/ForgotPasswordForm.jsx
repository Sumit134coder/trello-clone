"use client";
import FormInput from "../common/FormInput";

const ForgotPasswordForm = () => {
  return (
    <form
      method="POST"
      action="/api/auth/forgot-password"
      noValidate
      aria-label="Forgot password form"
      className="flex flex-col gap-6"
    >
      <FormInput
        id="email"
        label="Email Address"
        name="email"
        type="email"
        infoText="Check spam if you don't see it within a few minutes"
        autoComplete="email"
        required
        placeholder="you@example.com"
      />

      {/* Divider */}
      <div className="border-t border-text-500/8 mt-1" role="separator" />

      {/* Submit */}
      <button
        type="submit"
        className="btn btn_light"
      >
        Send Reset Link →
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
