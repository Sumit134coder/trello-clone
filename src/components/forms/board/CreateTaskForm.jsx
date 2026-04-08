"use client";

import { createTaskSchema } from "@/lib/schemas/yup/board";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "@/components/common/inputs/FormInput";
import FormTextarea from "@/components/common/inputs/FormTextarea";
import FormDropdown from "@/components/common/inputs/FormDropdown";
import MemberAssigningDropdown from "@/components/board/MemberAssigningDropdown";
import TagSelector from "@/components/board/TagSelector";
import TaskPrioritySelector from "@/components/board/TaskPrioritySelector";

const lists = ["Backlog", "Design", "Review", "Done"].map((name) => ({
  label: name,
  value: name.toLowerCase(),
}));

const defaultValues = {
  title: "",
  description: "",
  targetList: "backlog",
  priority: "Medium",
  assignedUsers: [],
  tags: [],
  dueDate: "",
};

const CreateTaskForm = ({ onCancel = () => {} }) => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createTaskSchema),
    defaultValues,
  });

  console.log("Form errors:", errors);
  console.log("Current form values:", getValues());

  const handleCreateTask = (values) => {
    console.log("Creating task with values:", values);
  };

  return (
    <form
      id="add-card-form"
      onSubmit={handleSubmit(handleCreateTask)}
      noValidate
      aria-label="Add card form"
      className="flex-1 overflow-y-auto px-7 py-6 flex flex-col gap-6"
    >
      <FormInput
        label="Task Title"
        id="title"
        placeholder="What needs to be done?"
        {...register("title")}
        required
        maxLength={120}
        type="text"
        errorMsg={errors?.title?.message}
        aria-invalid={errors?.title?.message}
        aria-describedby={errors?.title?.message ? "title-error" : undefined}
      />

      <FormTextarea
        label="Description"
        id="description"
        placeholder="Add more context, acceptance criteria, or notes…"
        {...register("description")}
        rows={3}
        type="text"
        errorMsg={errors?.description?.message}
        aria-invalid={errors?.description?.message}
        aria-describedby={
          errors?.description?.message ? "title-error" : undefined
        }
      />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="list"
            className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40 block"
          >
            List
          </label>
          <FormDropdown
            id="list"
            {...register("targetList")}
            options={lists}
            defaultSelected={getValues("targetList")}
            className=" w-full mt-2  px-5 py-4"
          />
          {errors?.targetList?.message && (
            <FormError message={errors?.targetList?.message} />
          )}
        </div>

        <FormInput
          label="Due Date"
          id="dueDate"
          placeholder="What needs to be done?"
          {...register("dueDate")}
          type="date"
          errorMsg={errors?.dueDate?.message}
          aria-invalid={errors?.dueDate?.message}
          aria-describedby={
            errors?.dueDate?.message ? "title-error" : undefined
          }
        />
      </div>

      <TaskPrioritySelector
        activeLabel={getValues("priority")}
        setValue={setValue}
        fieldError={errors?.priority?.message}
      />
      <MemberAssigningDropdown
        registerFn={register}
        fieldName="assignedUsers"
        fieldError={errors?.assignedUsers?.message}
      />
      <TagSelector
        fieldName="tags"
        setValue={setValue}
        fieldError={errors?.tags?.message}
      />

      <div className="flex items-center justify-between gap-4 px-7 py-5 border-t border-text-500/8 shrink-0 bg-secondary-500">
        <p className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/20 hidden sm:block">
          Press{" "}
          <kbd className="border border-text-500/15 px-1.5 py-0.5 font-mono text-[0.5rem]">
            Esc
          </kbd>{" "}
          to cancel
        </p>

        <div className="flex items-center gap-3 ml-auto">
          <button
            type="button"
            onClick={onCancel}
            className="
                font-mono text-[0.62rem] tracking-[0.2em] uppercase
                text-text-500/30 hover:text-text-500/60
                border border-text-500/12 hover:border-text-500/30
                px-6 py-3.5
                transition-all duration-200
              "
          >
            Cancel
          </button>

          <button
            type="submit"
            className="
                bg-text-500 text-primary-500
                font-black text-[0.62rem] tracking-[0.22em] uppercase
                px-8 py-3.5
                hover:opacity-90 active:scale-[0.98]
                transition-all duration-150
                cursor-pointer
              "
          >
            Add Card →
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateTaskForm;
