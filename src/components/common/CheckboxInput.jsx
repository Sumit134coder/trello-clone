import FormError from "./FormError";
const CheckboxInput = ({ label, id, inputClass, errorMsg, ...inputProps }) => {
  return (
    <div className="space-y-2">
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
      {errorMsg && <FormError message={errorMsg} />}
    </div>
  );
};

export default CheckboxInput;
