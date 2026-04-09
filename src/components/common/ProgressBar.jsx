
const ProgressBar = ({percentage = 10}) => {
  return (
    <div className="w-full h-px bg-text-500/10 relative">
      <div
        className="absolute top-0 left-0 h-full bg-text-500/50 transition-all duration-500"
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${percentage}% complete`}
      />
    </div>
  );
};

export default ProgressBar;
