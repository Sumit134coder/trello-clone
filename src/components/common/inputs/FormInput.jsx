import FormError from "./FormError";
import FormLabel from "../ui/FormLabel";

const FormInput = ({
  label,
  inputClass,
  optional = false,
  errorMsg,
  infoText,
  id,
  containerClass,
  ...inputProps
}) => {
  return (
    <div className={`flex flex-col gap-2 ${containerClass}`}>
      {label && <FormLabel id={id} label={label} optional={optional} />}
      <input
        id={id}
        {...inputProps}
        className={`form_input input_dark ${inputClass}`}
      />
      {infoText && (
        <p className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25">
          {infoText}
        </p>
      )}
      {errorMsg && <FormError message={errorMsg} />}
    </div>
  );
};

export default FormInput;
