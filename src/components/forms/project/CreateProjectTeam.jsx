"use client";

import FormError from "@/components/common/inputs/FormError";
import FormNumericSectionDivider from "@/components/common/ui/FormNumericSectionDivider";
import ProjectMemberCheckbox from "@/components/projects/ProjectMemberCheckbox";

const teamMembers = [
  { initials: "JD", name: "Jordan Davis", role: "Designer" },
  { initials: "SR", name: "Sam Rivera", role: "Product Manager" },
  { initials: "MK", name: "Mo Khan", role: "Engineer" },
  { initials: "TW", name: "Taylor Wong", role: "Engineer" },
];

const CreateProjectTeam = ({ register , fieldError }) => {
  return (
    <fieldset className="flex flex-col gap-8 border-none p-0 m-0">
      <legend className="w-full mb-2">
        <FormNumericSectionDivider serial="03" title="Team" />
      </legend>

      <p className="text-sm text-text-500/40 font-light leading-relaxed -mt-2">
        Add team members now or invite them later from inside the project.
      </p>

      {/* Member list */}
      <div className="flex flex-col gap-2">
        {teamMembers.map((m) => (
          <ProjectMemberCheckbox member={m} key={m.initials} register={register} />
        ))}
      </div>
      {
        fieldError && <FormError message={fieldError}/>
      }
    </fieldset>
  );
};

export default CreateProjectTeam;
