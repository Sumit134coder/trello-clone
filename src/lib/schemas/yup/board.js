import * as yup from "yup";

export const createTaskSchema = yup.object({
  title: yup.string().required("This field is required"),
  description: yup.string().required("This field is required").max(500, "Max length is 500 characters"),
  targetList: yup.string().required("Please select a list"),
  priority: yup
    .string()
    .oneOf(["Low", "Medium", "High"])
    .required("Please select a priority"),
  assignedUsers: yup
    .array()
    .of(yup.string())
    .required("Please assign at least one user"),
  tags: yup.array().of(yup.string()).required("Please select at least one tag"),
  dueDate: yup.date("Please select a date").min(new Date(), "Due date cannot be in the past"),
});
