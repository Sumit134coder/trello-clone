"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createProjectSchema } from "@/lib/schemas/yup/project";

import CreateProjectBasics from "./CreateProjectBasics";
import CreateProjectWorkflow from "./CreateProjectWorkflow";
import CreateProjectTeam from "./CreateProjectTeam";
import CreateProjectSettings from "./CreateProjectSettings";
import CreateProjectActions from "./CreateProjectActions";

const defaultLists = ["Backlog", "In Progress", "Review", "Done"];

const CreateProject = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(createProjectSchema),
    defaultValues: {
      projectName: "",
      projectDescription: "",
      projectSlug: "",
      projectLists: defaultLists,
      projectDue: "",
      assignedMembers: [],
    },
  });

  const currentLists = watch("projectLists");

  const handleCreateProject = (data) => {
    console.log("Form data:", data);
  };

  const updateListWithTemplate = (template) => {
    setValue("projectLists", template.lists);
    // Setting it as dirty by triggering validation
  };

  const removeList = (listToRemove) => {
    setValue(
      "projectLists",
      currentLists.filter((l) => l !== listToRemove),
    );
  };

  console.log({ errors, vals: getValues() });

  return (
    <form
      aria-label="Create new project form"
      className="flex flex-col gap-14"
      onSubmit={handleSubmit(handleCreateProject)}
    >
      <CreateProjectBasics register={register} errors={errors} />

      <CreateProjectWorkflow
        currentLists={currentLists}
        updateListWithTemplate={updateListWithTemplate}
        removeList={removeList}
        errors={errors}
      />

      <CreateProjectTeam
        register={register}
        fieldError={errors?.assignedMembers?.message}
      />

      <CreateProjectSettings register={register} errors={errors} />

      <CreateProjectActions />
    </form>
  );
};

export default CreateProject;
