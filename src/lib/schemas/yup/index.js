import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must contain min. 8 characters")
    .max(16, "Max limit reached")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Must contain at least one special character",
    ),
});

const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("This field is required"),
});

const registerSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("This field is required"),
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  username: yup.string().required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must contain min. 8 characters")
    .max(16, "Max limit reached")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Must contain at least one special character",
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("This is a required field"),
  terms : yup.boolean().oneOf([true] , "Please agree...").required("Please agree to terms.")
});

const confirmPasswordSchema = yup.object({
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must contain min. 8 characters")
    .max(16, "Max limit reached")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/[0-9]/, "Must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Must contain at least one special character",
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("This is a required field"),
});

export {
  loginSchema,
  registerSchema,
  confirmPasswordSchema,
  forgotPasswordSchema,
};
