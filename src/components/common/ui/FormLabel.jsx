
const FormLabel = ({id , label, optional = false}) => {
  return (
    <div className="flex items-center justify-between ">
      <label
        htmlFor={id}
        className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
      >
        {label}
      </label>
      {optional && (
        <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/20">
          Optional
        </span>
      )}
    </div>
  );
};

export default FormLabel;
