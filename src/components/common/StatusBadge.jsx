const StatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[0.55rem] tracking-widest uppercase border px-2.5 py-1 ${status.text} ${status.border}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${status.dot} ${status.label === "In Progress" && "animate-ping"}`}
        aria-hidden
      />
      {status.label}
    </span>
  );
};

export default StatusBadge;
