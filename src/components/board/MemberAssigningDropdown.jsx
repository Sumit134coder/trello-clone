"use client";
import { useState } from "react";
import Avatar from "../common/Avatar";

const members = [
  { initials: "AL", name: "Ada Lovelace",  role: "Product Lead"    },
  { initials: "JD", name: "Jordan Davis",  role: "Designer"        },
  { initials: "SR", name: "Sam Rivera",    role: "Product Manager" },
  { initials: "MK", name: "Mo Khan",       role: "Engineer"        },
];

const MemberAssigningDropdown = () => {
  const [showMemberPicker, setShowMemberPicker] = useState(false);
  const [selectedMembers, setSelectedMembers] = useState([]);

  return (
    <div>
      <label>Assignees</label>

      {/* Selected avatars + toggle */}
      <button
        type="button"
        aria-expanded={showMemberPicker}
        aria-controls="member-picker"
        onClick={() => {
          setShowMemberPicker((v) => !v);
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
                  <Avatar key={initials} initials={initials} title={m?.name} />
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
  );
};

export default MemberAssigningDropdown;
