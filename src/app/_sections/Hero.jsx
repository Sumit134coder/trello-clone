import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 pt-40 pb-20 border-b border-white/10">
      <div className="max-w-350 mx-auto w-full">
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.3em] uppercase text-primary-500 mb-8">
          Task Management, Reimagined
        </p>

        {/* Giant headline */}
        <h1
          className="font-black uppercase leading-[0.88] tracking-tight text-[clamp(4rem,14vw,14rem)] text-text-500 mb-12"
          style={{ fontStretch: "condensed" }}
        >
          Work
          <br />
          <span className="text-primary-500">Flows</span>
          <br />
          Here.
        </h1>

        {/* Sub-row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-t border-white/10 pt-10">
          <p className="max-w-lg text-base md:text-lg text-text-secondary-500  leading-relaxed font-light">
            TaskFlow gives your team one place to plan, track, and finish every
            project — using boards, lists, and cards that make progress
            impossible to miss.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#cta" className="btn btn_primary">
              Get Started — Free
            </a>
            <a href="#features" className="btn btn_light">
              See Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
