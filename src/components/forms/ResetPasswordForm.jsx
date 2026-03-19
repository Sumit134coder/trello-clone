"use client"

import PasswordInput from "../common/PasswordInput";

const ResetPasswordForm = () => {
  return (
    <form
      method="POST"
      action="/api/auth/register"
      noValidate
      aria-label="Reset password form"
      className="flex flex-col gap-6"
    >
      {/* Email */}
      <PasswordInput
        label="Password"
        id="password"
        autoComplete="new-password"
        required
        minLength={8}
        placeholder="Min. 8 characters"
        hint="Use 8+ characters, mix letters &amp; numbers"
      />

      <PasswordInput
        label=" Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        required
        placeholder="Repeat your password"
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
        Change Password and Login
      </button>
    </form>
  );
};

export default ResetPasswordForm;
