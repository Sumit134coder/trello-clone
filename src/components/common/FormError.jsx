const FormError = ({ message }) => {
  return (
    <p className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/90 form_error_animate">
      {message}
    </p>
  );
};

export default FormError;
