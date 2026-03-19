import React from "react";

export const FinalCTA = () => {
  return (
    <section
      id="cta"
      className="px-6 md:px-12 py-36 md:py-52 flex flex-col items-center text-center"
    >
      <p className="text-xs tracking-[0.3em] uppercase text-secondary-500  mb-8">
        Start Today — It&apos;s Free
      </p>

      <h2 className="text-[clamp(3.5rem,11vw,11rem)] font-black uppercase leading-none tracking-tight mb-10 max-w-5xl">
        Your First Board
        <br />
        Is One Click
        <br />
        <span className="text-text-light-500">Away.</span>
      </h2>

      <p className="text-secondary-500 text-lg max-w-xl font-light leading-relaxed mb-14">
        Getting started takes under a minute. Create a board, add some lists,
        and drop in your first tasks. That&apos;s it — you&apos;re organised.
      </p>

      <a
        href="/signup"
        className="inline-block bg-primary-500 text-tertiary-500 font-black text-sm tracking-[0.2em] uppercase px-12 py-5 hover:bg-text-light-500 hover:scale-105 transition-all duration-200"
      >
        Create Your Free Board →
      </a>
    </section>
  );
};
