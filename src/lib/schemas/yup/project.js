import * as yup from "yup";

export const createProjectSchema = yup.object({
  projectName: yup
    .string()
    .required("Project name is required")
    .max(80, "Max limit is 80 characters"),
  projectDescription: yup.string(),
  projectSlug: yup
    .string()
    .matches(/^[a-z0-9-]*$/, "Lowercase letters, numbers, and hyphens only")
    .optional(),
  projectLists: yup
    .array()
    .of(yup.string())
    .min(1, "At least one list is required")
    .required("This field is required"),
  projectDue: yup.date().nullable().transform((curr, orig) => orig === '' ? null : curr),
  assignedMembers: yup.array().of(yup.string()).min(1 , "Please select at least one member").nullable(),
  projectOptions: yup.array().of(yup.string()).nullable(),
});
