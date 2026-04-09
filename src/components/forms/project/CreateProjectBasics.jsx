"use client";

import FormInput from "@/components/common/inputs/FormInput";
import FormTextarea from "@/components/common/inputs/FormTextarea";
import FormLabel from "@/components/common/ui/FormLabel";
import FormNumericSectionDivider from "@/components/common/ui/FormNumericSectionDivider";

const CreateProjectBasics = ({ register, errors }) => {
  return (
    <fieldset className="flex flex-col gap-8 border-none p-0 m-0">
      <legend className="w-full mb-2">
        <FormNumericSectionDivider serial="01" title="Basics" />
      </legend>

      <FormInput
        id="projectName"
        label="Project Name"
        type="text"
        {...register("projectName")}
        maxLength={80}
        placeholder="e.g. Brand Redesign, API v2 Launch…"
        autoComplete="off"
        infoText="Keep it short and specific. Max 80 characters."
        inputClass="text-base md:text-lg font-semibold"
        errorMsg={errors?.projectName?.message}
      />

      {/* Description */}
      <FormTextarea
        id="projectDescription"
        {...register("projectDescription")}
        label="Description"
        placeholder="What is this project about? What does success look like?"
        optional
        errorMsg={errors?.projectDescription?.message}
      />

      {/* Slug preview */}
      <div>
        <FormLabel id="project-slug" label="Project URL Slug" optional />
        <div className="flex items-stretch">
          <span
            className="
                inline-flex items-center px-4 bg-primary-500
                border border-r-0 border-text-500/12
                font-mono text-[0.65rem] tracking-widest text-text-500/25
                select-none shrink-0
              "
          >
            taskflow.app/p/
          </span>
          <FormInput
            id="projectSlug"
            type="text"
            {...register("projectSlug")}
            placeholder="brand-redesign"
            pattern="[a-z0-9-]*"
            autoComplete="off"
            inputClass="border-l-0 font-mono text-sm w-full"
            containerClass="mb-0 flex-1"
            errorMsg={errors?.projectSlug?.message}
          />
        </div>
        <p className="mt-2 font-mono text-[0.58rem] tracking-widest uppercase text-text-500/20">
          Lowercase letters, numbers, and hyphens only. Auto-generated if left
          blank.
        </p>
      </div>
    </fieldset>
  );
};

export default CreateProjectBasics;
