const FormNumericSectionDivider = ({ serial, title }) => {
  return (
    <div className="flex items-center gap-4 w-full  ">
      <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/25">
        {serial}
      </span>
      <span className="text-xl font-black uppercase tracking-tight text-text-500">
        {title}
      </span>
      <div className="flex-1 border-t border-text-500/8" />
    </div>
  );
};

export default FormNumericSectionDivider;
