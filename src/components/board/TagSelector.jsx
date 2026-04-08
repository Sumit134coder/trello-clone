"use client";
import { useState } from "react";
import FormError from "../common/inputs/FormError";

const availableTags = [
  "Design",
  "Figma",
  "Tokens",
  "Icons",
  "Research",
  "Docs",
  "Strategy",
  "Dev",
  "Bug",
  "Feature",
];

const TagSelector = ({ fieldName, setValue, fieldError, selectedTags }) => {
  const [showTagPicker, setShowTagPicker] = useState(false);

  const toggleTag = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags , tag];
    if (setValue) setValue(fieldName, updatedTags);
  };

  return (
    <div>
      <label className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40">
        Tags
      </label>

      <button
        type="button"
        aria-expanded={showTagPicker}
        aria-controls="tag-picker"
        onClick={() => {
          setShowTagPicker((v) => !v);
        }}
        className="
                w-full flex items-center gap-3 flex-wrap
                bg-primary-500 border border-text-500/12
                hover:border-text-500/30
                px-5 py-3.5 min-h-13
                transition-all duration-200 mb-2
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
      {fieldError && <FormError message={fieldError} />}
    </div>
  );
};

export default TagSelector;
