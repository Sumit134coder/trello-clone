const CheckboxInput = ({ label, id, inputClass, ...inputProps }) => {
  return (
    <div className="flex items-center gap-3">
      <input
        id={id}
        type="checkbox"
        {...inputProps}
        className={`form_checkbox ${inputClass}`}
      />
      {label && (
        <label
          htmlFor={id}
          className="font-mono text-[0.65rem] tracking-widest uppercase text-text-500/30 cursor-pointer select-none"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckboxInput;
