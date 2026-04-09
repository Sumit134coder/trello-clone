"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import FormInput from "@/components/common/inputs/FormInput";
import FormNumericSectionDivider from "@/components/common/ui/FormNumericSectionDivider";
import FormTextarea from "@/components/common/inputs/FormTextarea";
import ProjectListTemplate from "@/components/projects/ProjectListTemplate";
import ProjectListSelector from "@/components/projects/ProjectListSelector";
import ProjectMemberCheckbox from "@/components/projects/ProjectMemberCheckbox";
import ProjectOptionsCheckboxGroup from "@/components/projects/ProjectOptionsCheckboxGroup";
import FormLabel from "@/components/common/ui/FormLabel";

const teamMembers = [
  { initials: "JD", name: "Jordan Davis", role: "Designer" },
  { initials: "SR", name: "Sam Rivera", role: "Product Manager" },
  { initials: "MK", name: "Mo Khan", role: "Engineer" },
  { initials: "TW", name: "Taylor Wong", role: "Engineer" },
];

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

const defaultLists = ["Backlog", "In Progress", "Review", "Done"];

const CreateProject = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <form aria-label="Create new project form" className="flex flex-col gap-14">
      <fieldset className="flex flex-col gap-8 border-none p-0 m-0">
        <legend className="w-full mb-2">
          <FormNumericSectionDivider serial="01" title="Basics" />
        </legend>

        <FormInput
          id="project-name"
          label="Project Name"
          name="name"
          type="text"
          required
          maxLength={80}
          placeholder="e.g. Brand Redesign, API v2 Launch…"
          autoComplete="off"
          infoText="Keep it short and specific. Max 80 characters."
          inputClass="text-base md:text-lg font-semibold"
        />

        {/* Description */}
        <FormTextarea
          id="project-description"
          label="Description"
          placeholder="What is this project about? What does success look like?"
          optional
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
              id="project-slug"
              name="slug"
              type="text"
              placeholder="brand-redesign"
              pattern="[a-z0-9-]+"
              autoComplete="off"
              inputClass="border-l-0 font-mono text-sm w-full"
              containerClass="mb-0 flex-1"
            />
          </div>
          <p className="mt-2 font-mono text-[0.58rem] tracking-widest uppercase text-text-500/20">
            Lowercase letters, numbers, and hyphens only. Auto-generated if left
            blank.
          </p>
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-8 border-none p-0 m-0">
        <legend className="w-full mb-2">
          <FormNumericSectionDivider serial="02" title="Workflow Lists" />
        </legend>

        <p className="text-sm text-text-500/40 font-light leading-relaxed -mt-2">
          Lists represent stages in your workflow — tasks move left to right as
          they progress. You can always add, rename, or remove lists later.
        </p>

        {/* Default list chips */}
        <ProjectListSelector />

        {/* Template picker */}
        <div>
          <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-4">
            Or Start From a Template
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {projectTemplates.map((tpl) => (
              <ProjectListTemplate template={tpl} key={tpl.name} />
            ))}
          </div>
        </div>
      </fieldset>

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
            <ProjectMemberCheckbox member={m} key={m.initials} />
          ))}
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-8 border-none p-0 m-0">
        <legend className="w-full mb-2">
          <FormNumericSectionDivider serial="04" title="Settings" />
        </legend>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Due date */}
          <FormInput
            id="project-due"
            label="Target Due Date"
            name="due_date"
            type="date"
            optional
            inputClass="font-mono text-sm text-text-500/60 [color-scheme:dark]"
          />
        </div>

        {/* Toggle options */}
        <ProjectOptionsCheckboxGroup />
      </fieldset>

      <div className="border-t border-text-500/8 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <p className="text-xs text-text-500/25 font-light font-mono tracking-wide max-w-sm">
          Your project will be created instantly. You can edit all of these
          settings later from the project page.
        </p>

        <div className="flex items-center gap-4 shrink-0">
          {/* Cancel */}
          <Link
            href="/projects"
            className="
                  font-mono text-[0.65rem] tracking-[0.2em] uppercase
                  text-text-500/30 hover:text-text-500/60
                  border border-text-500/12 hover:border-text-500/30
                  px-7 py-4
                  transition-all duration-200
                "
          >
            Cancel
          </Link>

          {/* Submit */}
          <button
            type="submit"
            className="
                  bg-text-500 text-primary-500
                  font-black text-xs tracking-[0.25em] uppercase
                  px-10 py-4
                  hover:opacity-90 active:scale-[0.98]
                  transition-all duration-150
                  cursor-pointer
                "
          >
            Create Project →
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateProject;
