"use client";

import FormNumericSectionDivider from "@/components/common/ui/FormNumericSectionDivider";
import ProjectListSelector from "@/components/projects/ProjectListSelector";
import ProjectListTemplate from "@/components/projects/ProjectListTemplate";

const projectTemplates = [
  { name: "Kanban", lists: ["To Do", "In Progress", "Done"] },
  {
    name: "Sprint",
    lists: ["Backlog", "Sprint", "Review", "Done"],
  },
  {
    name: "Bug Tracker",
    lists: ["Reported", "Confirmed", "In Fix", "Resolved"],
  },
  {
    name: "Content",
    lists: ["Ideas", "Drafting", "Editing", "Published"],
  },
];

const CreateProjectWorkflow = ({ currentLists, updateListWithTemplate, removeList, errors }) => {
  return (
    <fieldset className="flex flex-col gap-8 border-none p-0 m-0">
      <legend className="w-full mb-2">
        <FormNumericSectionDivider serial="02" title="Workflow Lists" />
      </legend>

      <p className="text-sm text-text-500/40 font-light leading-relaxed -mt-2">
        Lists represent stages in your workflow — tasks move left to right as
        they progress. You can always add, rename, or remove lists later.
      </p>

      {/* Default list chips */}
      <ProjectListSelector list={currentLists} onRemove={removeList} />

      {/* Template picker */}
      <div>
        <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-4">
          Or Start From a Template
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {projectTemplates.map((tpl) => (
            <ProjectListTemplate
              template={tpl}
              key={tpl.name}
              isActive={currentLists === tpl.lists}
              onTemplateSelect={updateListWithTemplate}
            />
          ))}
        </div>
        {errors?.projectLists?.message && (
          <p className="text-red-500 text-xs mt-2">{errors.projectLists.message}</p>
        )}
      </div>
    </fieldset>
  );
};

export default CreateProjectWorkflow;
