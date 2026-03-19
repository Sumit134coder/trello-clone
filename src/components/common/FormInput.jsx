const FormInput = ({label, inputClass, infoText, id,...inputProps}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        {...inputProps}
        className={`form_input input_dark ${inputClass}`}
      />
       {infoText && <p className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25">
          {infoText}
        </p>}
    </div>
  );
};

export default FormInput;
