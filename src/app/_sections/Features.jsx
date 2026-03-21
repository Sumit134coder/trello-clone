import React from 'react'

const Features = () => {
  return (
     <section
        id="features"
        className="px-6 md:px-12 py-28 md:py-40 border-b border-white/10"
      >
        <div className="max-w-350 mx-auto w-full">
          <p className="text-xs tracking-[0.3em] uppercase text-secondary-500 mb-6">
            03 — Key Features
          </p>
          <h2 className="text-[clamp(3rem,8vw,8rem)] text-secondary-500/20 font-black uppercase leading-none tracking-tight mb-20">
            Built For
            <br />
            <span className="text-primary-500">Real</span> Work.
          </h2>

          <ul className="divide-y divide-white/10">
            {[
              {
                num: "→",
                feature: "Create & manage project boards",
                detail:
                  "Spin up a board per project in seconds. Archive when done.",
              },
              {
                num: "→",
                feature: "Define workflow with lists",
                detail:
                  "Add as many stages as your process needs. Name them your way.",
              },
              {
                num: "→",
                feature: "Task cards with descriptions & deadlines",
                detail:
                  "Pack every card with context so nothing gets lost or misunderstood.",
              },
              {
                num: "→",
                feature: "Move tasks between lists",
                detail:
                  "Drag and drop incoming — visual progress that updates in real time.",
              },
              {
                num: "→",
                feature: "Track project progress visually",
                detail: "See the full picture instantly. No report needed.",
              },
            ].map((item) => (
              <li
                key={item.feature}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-7 hover:pl-4 transition-all duration-200"
              >
                <div className="flex items-center gap-6">
                  <span className="text-primary-500 text-lg shrink-0">
                    {item.num}
                  </span>
                  <span className="text-lg md:text-2xl font-semibold text-text-500 group-hover:text-primary-500 transition-colors">
                    {item.feature}
                  </span>
                </div>
                <p className="text-text-secondary-500  text-sm md:text-base font-light max-w-xs text-right hidden md:block">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
  )
}

export default Features