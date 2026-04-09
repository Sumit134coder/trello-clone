"use client";

import FormInput from "@/components/common/inputs/FormInput";
import FormNumericSectionDivider from "@/components/common/ui/FormNumericSectionDivider";
import ProjectOptionsCheckboxGroup from "@/components/projects/ProjectOptionsCheckboxGroup";

const CreateProjectSettings = ({ register, errors }) => {
  return (
    <fieldset className="flex flex-col gap-8 border-none p-0 m-0">
      <legend className="w-full mb-2">
        <FormNumericSectionDivider serial="04" title="Settings" />
      </legend>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Due date */}
        <FormInput
          id="projectDue"
          label="Target Due Date"
          {...register("projectDue")}
          type="date"
          optional
          inputClass="font-mono text-sm text-text-500/60 [color-scheme:dark]"
          errorMsg={errors?.projectDue?.message}
        />
      </div>

      {/* Toggle options */}
      <ProjectOptionsCheckboxGroup register={register} />
    </fieldset>
  );
};

export default CreateProjectSettings;
