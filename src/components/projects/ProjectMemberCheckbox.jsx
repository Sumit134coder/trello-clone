
const ProjectMemberCheckbox = ({member}) => {
  return (
    <label
      key={member.initials}
      className="
                    flex items-center justify-between gap-5
                    bg-secondary-500 border border-text-500/8
                    hover:border-text-500/25
                    px-5 py-4
                    cursor-pointer group
                    transition-all duration-200
                    has-[:checked]:border-text-500/35
                    has-[:checked]:bg-secondary-500/80
                  "
    >
      <div className="flex items-center gap-4 min-w-0">
        {/* Avatar */}
        <span
          className="
                      w-9 h-9 rounded-full shrink-0 flex items-center justify-center
                      bg-primary-500 border border-text-500/20
                      font-mono text-[0.6rem] tracking-wider uppercase text-text-500/60
                    "
        >
          {member.initials}
        </span>
        {/* Name + role */}
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-sm font-semibold text-text-500/80 group-hover:text-text-500 transition-colors truncate">
            {member.name}
          </span>
          <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25">
            {member.role}
          </span>
        </div>
      </div>

      {/* Checkbox */}
      <input
        type="checkbox"
        name="members"
        value={member.initials}
        aria-label={`Add ${member.name} to project`}
        className="
                      w-4 h-4 shrink-0 rounded-none
                      border border-text-500/20
                      bg-primary-500 accent-text-500
                      cursor-pointer
                    "
      />
    </label>
  );
};

export default ProjectMemberCheckbox;
