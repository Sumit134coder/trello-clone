
const projectSettingOptions = [
  {
    id: "notify-members",
    label: "Notify members when added",
    defaultChecked: true,
  },
  {
    id: "activity-feed",
    label: "Enable activity feed",
    defaultChecked: true,
  },
  {
    id: "due-reminders",
    label: "Send due-date reminders",
    defaultChecked: false,
  },
];

const ProjectOptionsCheckboxGroup = ({ register }) => {
  return (
    <div className="flex flex-col gap-3">
      {projectSettingOptions.map((opt) => (
        <label
          key={opt.id}
          htmlFor={opt.id}
          className="flex items-center justify-between gap-5 border border-text-500/8 hover:border-text-500/22 px-5 py-4 cursor-pointer transition-all duration-200 group"
        >
          <span className="text-sm text-text-500/55 font-light group-hover:text-text-500/75 transition-colors">
            {opt.label}
          </span>
          <input
            id={opt.id}
            value={opt.id}
            type="checkbox"
            {...register("projectOptions")}
            defaultChecked={opt.defaultChecked}
            className="
                      w-4 h-4 shrink-0 rounded-none
                      border border-text-500/20
                      bg-primary-500 accent-text-500
                      cursor-pointer
                    "
          />
        </label>
      ))}
    </div>
  );
};

export default ProjectOptionsCheckboxGroup;
