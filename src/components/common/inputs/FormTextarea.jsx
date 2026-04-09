import FormLabel from "../ui/FormLabel";
import FormError from "./FormError";

const FormTextarea = ({
  label,
  inputClass,
  errorMsg,
  optional,
  infoText,
  id,
  ...inputProps
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <FormLabel id={id} label={label} optional={optional} />}
      <textarea
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

export default FormTextarea;
