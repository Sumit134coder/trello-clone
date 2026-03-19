import React from "react";

const Collaboration = () => {
  return (
    <section
      id="collab"
      className="px-6 md:px-12 py-28 md:py-40 border-b border-white/10 relative overflow-hidden"
    >
      {/* Background text watermark */}
      <span
        aria-hidden
        className="absolute -right-8 top-10 text-[clamp(8rem,22vw,22rem)] font-black uppercase text-text-secondary-500/10 opacity-10  leading-none select-none pointer-events-none"
      >
        SOON
      </span>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        <p className="text-xs tracking-[0.3em] uppercase text-text-secondary-500  mb-6">
          04 — Collaboration / Coming Soon
        </p>
        <h2 className="text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-none tracking-tight mb-16">
          Better Together.
          <br />
          <span className="text-text-secondary-500 ">Always.</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              title: "Team Boards",
              body: "Invite members to boards and keep everyone on the same page, always.",
            },
            {
              title: "Task Assignment",
              body: "Assign any card to a team member. Ownership is crystal clear.",
            },
            {
              title: "Shared Progress",
              body: "The whole team sees the same board. No more status update requests.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="border border-white/10 p-8 flex flex-col gap-4 hover:border-primary-500/30 transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-bold text-text-500">
                {item.title}
              </h3>
              <p className="text-secondary-500 font-light leading-relaxed">
                {item.body}
              </p>
              <span className="text-xs text-primary-500 mt-auto">
                Launching soon
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
