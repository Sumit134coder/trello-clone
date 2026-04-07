import TaskBoard from "@/components/board/TaskBoard";

export const metadata = {
  title: "Board — Brand Redesign — TaskFlow",
  description: "Kanban board for the Brand Redesign project.",
};

// ── Mock Data ─────────────────────────────────────────────────────────────────

export default function BoardPage() {
  return <TaskBoard />;
}
