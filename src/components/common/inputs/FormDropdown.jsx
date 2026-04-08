import React from "react";

const FormDropdown = ({ selected, options = [], className, ...inputProps }) => {
  return (
    <select
      value={selected}
      {...inputProps}
      className={`
                bg-secondary-500 border border-text-500/12
                text-text-500/50 font-mono text-[0.6rem] tracking-widest uppercase
                px-4 py-2 outline-none rounded-none
                hover:border-text-500/30 focus:border-text-500/40
                transition-all cursor-pointer
                ${className} `}
    >
      {options.map(({ label, value }) => (
        <option className="hover:bg-text-500/50 hover:text-secondary-500" key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default FormDropdown;
