"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "@/components/common/inputs/FormInput";
import FormTextarea from "@/components/common/inputs/FormTextarea";
import FormDropdown from "@/components/common/inputs/FormDropdown";

const lists = ["Backlog", "Design", "Review", "Done"].map((name) => ({
  label: name,
  value: name.toLowerCase(),
}));



const CreateTaskForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(createTaskSchema),
  });

  return (
    <form
      id="add-card-form"
      onSubmit={handleSubmit}
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

      {/* List + Priority row */}
      <div className="grid grid-cols-2 gap-4">
        {/* List */}
        <div>
          <label
            htmlFor="list"
            className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
          >
            List
          </label>
          <FormDropdown
            id="list"
            options={lists}
            selected={getValues("list")}
          />
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

        {/* Due date */}
      </div>

      {/* Priority */}
      <div>
        <FieldLabel>Priority</FieldLabel>
        <div className="flex gap-3" role="group" aria-label="Select priority">
          {["High", "Med", "Low"].map((p) => {
            const cfg = priorityConfig[p];
            const isActive = priority === p;
            return (
              <button
                key={p}
                type="button"
                aria-pressed={isActive}
                onClick={() => setPriority(p)}
                className={`
                      flex-1 flex items-center justify-center gap-2
                      border py-3
                      font-mono text-[0.6rem] tracking-widest uppercase
                      transition-all duration-150
                      ${
                        isActive
                          ? `${cfg.bg} ${cfg.text} ${cfg.border}`
                          : "border-text-500/10 text-text-500/25 hover:border-text-500/25 hover:text-text-500/45"
                      }
                    `}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${isActive ? cfg.dot : "bg-text-500/20"}`}
                  aria-hidden
                />
                {p}
              </button>
            );
          })}
        </div>
      </div>

      {/* Assignees */}
      <div>
        <FieldLabel optional>Assignees</FieldLabel>

        {/* Selected avatars + toggle */}
        <button
          type="button"
          aria-expanded={showMemberPicker}
          aria-controls="member-picker"
          onClick={() => {
            setShowMemberPicker((v) => !v);
            setShowTagPicker(false);
          }}
          className="
                w-full flex items-center gap-4
                bg-primary-500 border border-text-500/12
                hover:border-text-500/30
                px-5 py-3.5
                transition-all duration-200
              "
        >
          {selectedMembers.length === 0 ? (
            <span className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25">
              Click to assign members
            </span>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex">
                {selectedMembers.map((initials) => {
                  const m = members.find((x) => x.initials === initials);
                  return (
                    <Avatar key={initials} initials={initials} name={m?.name} />
                  );
                })}
              </div>
              <span className="font-mono text-[0.58rem] tracking-widest uppercase text-text-500/35">
                {selectedMembers.length} assigned
              </span>
            </div>
          )}
          <span className="ml-auto font-mono text-text-500/20 text-xs">
            {showMemberPicker ? "▲" : "▼"}
          </span>
        </button>

        {/* Member picker dropdown */}
        {showMemberPicker && (
          <div
            id="member-picker"
            role="group"
            aria-label="Select assignees"
            className="flex flex-col gap-px bg-text-500/8 border border-t-0 border-text-500/12"
          >
            {members.map((m) => {
              const selected = selectedMembers.includes(m.initials);
              return (
                <label
                  key={m.initials}
                  className={`
                        flex items-center justify-between gap-4
                        px-5 py-3.5 cursor-pointer
                        transition-all duration-150
                        ${selected ? "bg-primary-500/80" : "bg-primary-500 hover:bg-primary-500/60"}
                      `}
                >
                  <div className="flex items-center gap-3">
                    <Avatar initials={m.initials} name={m.name} />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-text-500/75">
                        {m.name}
                      </span>
                      <span className="font-mono text-[0.5rem] tracking-widest uppercase text-text-500/25">
                        {m.role}
                      </span>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    name="assignees"
                    value={m.initials}
                    checked={selected}
                    onChange={() => toggleMember(m.initials)}
                    aria-label={`Assign ${m.name}`}
                    className="w-4 h-4 rounded-none border border-text-500/20 bg-secondary-500 accent-text-500 cursor-pointer"
                  />
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Tags */}
      <div>
        <FieldLabel optional>Tags</FieldLabel>

        <button
          type="button"
          aria-expanded={showTagPicker}
          aria-controls="tag-picker"
          onClick={() => {
            setShowTagPicker((v) => !v);
            setShowMemberPicker(false);
          }}
          className="
                w-full flex items-center gap-3 flex-wrap
                bg-primary-500 border border-text-500/12
                hover:border-text-500/30
                px-5 py-3.5 min-h-[52px]
                transition-all duration-200
              "
        >
          {selectedTags.length === 0 ? (
            <span className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25">
              Click to add tags
            </span>
          ) : (
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.5rem] tracking-widest uppercase text-text-500/60 border border-text-500/25 px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <span className="ml-auto font-mono text-text-500/20 text-xs shrink-0">
            {showTagPicker ? "▲" : "▼"}
          </span>
        </button>

        {/* Tag picker */}
        {showTagPicker && (
          <div
            id="tag-picker"
            role="group"
            aria-label="Select tags"
            className="flex flex-wrap gap-2 p-4 border border-t-0 border-text-500/12 bg-primary-500/60"
          >
            {availableTags.map((tag) => {
              const selected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => toggleTag(tag)}
                  className={`
                        font-mono text-[0.55rem] tracking-widest uppercase
                        border px-3 py-1.5
                        transition-all duration-150
                        ${
                          selected
                            ? "bg-text-500/10 text-text-500/70 border-text-500/35"
                            : "text-text-500/25 border-text-500/10 hover:border-text-500/25 hover:text-text-500/45"
                        }
                      `}
                >
                  {selected && <span className="mr-1.5">✓</span>}
                  {tag}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </form>
  );
};

export default CreateTaskForm;
