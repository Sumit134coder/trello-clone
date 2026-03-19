"use client";

import FormInput from "../common/FormInput";
import CheckboxInput from "../common/CheckboxInput";
import PasswordInput from "../common/PasswordInput";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <form
      method="POST"
      action="/api/auth/register"
      noValidate
      aria-label="Create account form"
      className="flex flex-col gap-6"
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
        />

        <FormInput
          label="Last Name"
          id="lastName"
          name="lastName"
          type="text"
          autoComplete="given-name"
          required
          placeholder="Lovelace"
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
      />

      <FormInput
        label="Email Address"
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="ada@example.com"
      />

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

      <CheckboxInput
        id="terms"
        name="terms"
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
