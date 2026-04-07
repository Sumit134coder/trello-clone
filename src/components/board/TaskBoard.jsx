"use client";

import { useState } from "react";
import dummyBoardData from "@/constants/json/dummyBoardData.json";
import TaskCard from "./TaskCard";
import Link from "next/link";
import AddTaskButton from "./AddTaskButton";
import { AddTaskModal } from "../common/modals/AddTaskModal";

const project = {
  name: "Brand Redesign",
  slug: "brand-redesign",
  status: "In Progress",
};


const TaskBoard = () => {
  const [isAddCardModalOpen, setAddCardModalOpen] = useState(false);
  const [activeList, setActiveList] = useState(null);

  const openModal = () => setAddCardModalOpen(true);
  const closeModal = () => {
    setActiveList(null);
    setAddCardModalOpen(false);
  };

  const totalTasks = dummyBoardData.reduce((acc, l) => acc + l.cards.length, 0);
  const doneTasks =
    dummyBoardData.find((l) => l.name === "Done")?.cards.length ?? 0;

  return (
    <div className="min-h-screen bg-primary-500 text-text-500 flex flex-col">
      {/* ══ SUB-HEADER — Board chrome ════════════════════════════════════════ */}
      <div className="border-b border-text-500/8 bg-primary-500 sticky top-0 z-40">
        {/* Breadcrumb + title row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 md:px-10 pt-6 pb-4">
          {/* Left */}
          <div className="flex flex-col gap-2">
            <nav aria-label="Breadcrumb" className="flex items-center gap-3">
              <Link
                href="/projects"
                className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-text-500/25 hover:text-text-500/50 transition-colors"
              >
                Projects
              </Link>
              <span className="text-text-500/15 font-mono text-[0.6rem]">
                /
              </span>
              <Link
                href={`/projects/${project.slug}`}
                className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-text-500/25 hover:text-text-500/50 transition-colors"
              >
                {project.name}
              </Link>
              <span className="text-text-500/15 font-mono text-[0.6rem]">
                /
              </span>
              <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-text-500/45">
                Board
              </span>
            </nav>

            <div className="flex items-center gap-4">
              <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight text-text-500">
                {project.name}
              </h1>
              <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25 border border-text-500/12 px-2 py-0.5">
                {doneTasks}/{totalTasks} done
              </span>
            </div>
          </div>

          {/* Right — board actions */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* View toggle */}
            <div
              className="flex border border-text-500/12"
              role="group"
              aria-label="View mode"
            >
              {[
                {
                  label: "Board",
                  active: true,
                  icon: (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      aria-hidden
                    >
                      <rect
                        x="0.6"
                        y="0.6"
                        width="3.5"
                        height="11.8"
                        rx="0.3"
                        stroke="currentColor"
                        strokeWidth="1.1"
                      />
                      <rect
                        x="5.9"
                        y="0.6"
                        width="3.5"
                        height="7.5"
                        rx="0.3"
                        stroke="currentColor"
                        strokeWidth="1.1"
                      />
                      <rect
                        x="11.2"
                        y="0.6"
                        width="1"
                        height="1"
                        rx="0"
                        fill="none"
                        stroke="none"
                      />
                    </svg>
                  ),
                },
                {
                  label: "List",
                  active: false,
                  icon: (
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      aria-hidden
                    >
                      <line
                        x1="0.6"
                        y1="2.5"
                        x2="12.4"
                        y2="2.5"
                        stroke="currentColor"
                        strokeWidth="1.1"
                      />
                      <line
                        x1="0.6"
                        y1="6.5"
                        x2="12.4"
                        y2="6.5"
                        stroke="currentColor"
                        strokeWidth="1.1"
                      />
                      <line
                        x1="0.6"
                        y1="10.5"
                        x2="12.4"
                        y2="10.5"
                        stroke="currentColor"
                        strokeWidth="1.1"
                      />
                    </svg>
                  ),
                },
              ].map((v) => (
                <button
                  key={v.label}
                  aria-label={`${v.label} view`}
                  aria-pressed={v.active}
                  className={`
                    flex items-center gap-2 px-4 py-2.5
                    font-mono text-[0.55rem] tracking-widest uppercase
                    transition-all duration-150
                    ${
                      v.active
                        ? "bg-text-500 text-primary-500"
                        : "text-text-500/30 hover:text-text-500/55 hover:bg-secondary-500"
                    }
                  `}
                >
                  {v.icon}
                  <span className="hidden sm:block">{v.label}</span>
                </button>
              ))}
            </div>

            {/* Filter */}
            <button
              aria-label="Filter tasks"
              className="
                flex items-center gap-2
                border border-text-500/12 text-text-500/35
                font-mono text-[0.55rem] tracking-widest uppercase
                px-4 py-2.5
                hover:border-text-500/30 hover:text-text-500/60
                transition-all duration-200
              "
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <line
                  x1="1"
                  y1="3"
                  x2="11"
                  y2="3"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
                <line
                  x1="3"
                  y1="6"
                  x2="9"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
                <line
                  x1="5"
                  y1="9"
                  x2="7"
                  y2="9"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
              </svg>
              Filter
            </button>

            {/* Add task */}
            <AddTaskButton
              variant="default"
              openModal={openModal}
              setActiveList={setActiveList}
            />
          </div>
        </div>

        {/* Member filter strip */}
        <div className="flex items-center gap-3 px-6 md:px-10 pb-4 overflow-x-auto scrollbar-none">
          <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25 shrink-0">
            Assignee
          </span>
          {["All", "AL", "JD", "SR"].map((f) => (
            <button
              key={f}
              aria-pressed={f === "All"}
              className={`
                shrink-0 font-mono text-[0.55rem] tracking-widest uppercase
                border px-3 py-1.5 transition-all duration-150
                ${
                  f === "All"
                    ? "bg-text-500 text-primary-500 border-text-500"
                    : "border-text-500/12 text-text-500/35 hover:border-text-500/30 hover:text-text-500/60"
                }
              `}
            >
              {f}
            </button>
          ))}
          <div className="flex-1" />
          <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/20 shrink-0">
            {totalTasks} tasks total
          </span>
        </div>
      </div>

      {/* ══ BOARD CANVAS ═════════════════════════════════════════════════════ */}
      <main
        className="flex-1 overflow-x-auto px-6 md:px-10 py-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-text-500/10"
        aria-label="Project board"
      >
        <div className="flex gap-5 h-full min-w-max pb-6">
          {dummyBoardData.map((list) => (
            <section
              key={list.id}
              aria-labelledby={`list-${list.id}-heading`}
              className="flex flex-col gap-3 w-72 shrink-0"
            >
              {/* List header */}
              <header className="flex items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-3">
                  {/* Color dot */}
                  <span
                    className={`w-2 h-2 rounded-full ${list.color}`}
                    aria-hidden
                  />
                  <h2
                    id={`list-${list.id}-heading`}
                    className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-text-500/60 font-semibold"
                  >
                    {list.name}
                  </h2>
                  <span className="font-mono text-[0.5rem] tracking-widest text-text-500/20 border border-text-500/10 px-2 py-0.5">
                    {list.cards.length}
                  </span>
                </div>

                {/* Add card to list */}
                <AddTaskButton
                  list={list.name}
                  variant="list-header"
                  openModal={openModal}
                  setActiveList={setActiveList}
                />
              </header>

              {/* Cards */}
              <div
                className="flex flex-col gap-2"
                role="list"
                aria-label={`${list.name} tasks`}
              >
                {list.cards.map((card) => (
                  <div key={card.id} role="listitem">
                    <TaskCard
                      card={card}
                      listName={list.name}
                      projectSlug={project.slug}
                    />
                  </div>
                ))}

                {/* Drop zone / Add card ghost */}

                <AddTaskButton
                  list={list.name}
                  variant="column-button"
                  openModal={openModal}
                  setActiveList={setActiveList}
                />
              </div>
            </section>
          ))}

          {/* Add new list */}
          <div className="flex flex-col gap-3 w-72 shrink-0">
            <div className="px-1 h-[26px]" />{" "}
            {/* spacer to align with list headers */}
            <button
              aria-label="Add a new list"
              className="
                flex flex-col items-center justify-center gap-3
                border border-dashed border-text-500/10
                hover:border-text-500/25 hover:bg-secondary-500/30
                py-10
                font-mono text-[0.6rem] tracking-[0.2em] uppercase
                text-text-500/20 hover:text-text-500/45
                transition-all duration-200
                group
              "
            >
              <span
                aria-hidden
                className="
                  w-8 h-8 flex items-center justify-center
                  border border-text-500/15 group-hover:border-text-500/35
                  text-text-500/25 group-hover:text-text-500/55
                  text-lg font-light leading-none
                  transition-all duration-200
                "
              >
                +
              </span>
              Add List
            </button>
          </div>
        </div>

      </main>
      
        <AddTaskModal
          isOpen={isAddCardModalOpen}
          onClose={closeModal}
          defaultList={activeList}
        />
    </div>
  );
};

export default TaskBoard;
