"use client";

import CheckboxInput from "../common/CheckboxInput";
import FormInput from "../common/FormInput";
import PasswordInput from "../common/PasswordInput";

const LoginForm = () => {
  return (
    <form
      method="POST"
      action="/api/auth/login"
      noValidate
      aria-label="Sign in form"
      className="flex flex-col gap-7"
    >
      {/* Email / Username */}
      <FormInput
        label="Email or Username"
        id="identifier"
        name="identifier"
        type="text"
        autoComplete="username email"
        required
        placeholder="you@example.com"
      />
      <PasswordInput
        id="password"
        showForgotLink
        label="Password"
        name="password"
        autoComplete="current-password"
        required
        placeholder="••••••••••"
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
