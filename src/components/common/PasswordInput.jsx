import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import Link from "next/link";
import FormError from "./FormError";

const PasswordInput = ({
  id,
  inputClass,
  showForgotLink = false,
  label,
  errorMsg,
  hint = "",
  ...inputProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
          >
            {label}
          </label>
          {showForgotLink && (
            <Link
              href="/forgot-password"
              className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/30 hover:text-text-500 transition-colors underline underline-offset-4 decoration-transparent hover:decoration-text-500/40"
            >
              Forgot password?
            </Link>
          )}
        </div>
      )}
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          {...inputProps}
          className={`form_input input_dark ${inputClass}`}
        />
        <button
          type="button"
          className="absolute z-10 inset-y-0 right-4 cursor-pointer"
          onClick={togglePassword}
        >
          {showPassword ? <EyeClosed /> : <Eye />}
        </button>
      </div>
      {hint && (
        <p className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25">
          {hint}
        </p>
      )}
      {errorMsg && <FormError message={errorMsg} />}
    </div>
  );
};

export default PasswordInput;
