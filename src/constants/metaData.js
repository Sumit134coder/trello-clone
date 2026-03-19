export const metaData = {
  home: {
    title: "TaskFlow | Organize Your Tasks Efficiently",
    description:
      "TaskFlow is a simple and powerful task management platform to organize boards, lists, and cards. Manage projects efficiently and boost productivity.",

    keywords: [
      "task management",
      "kanban board",
      "trello alternative",
      "project management",
      "productivity tool",
    ],

    authors: [{ name: "TaskFlow Team" }],

    openGraph: {
      title: "TaskFlow - Simple Task Management",
      description:
        "Organize projects using boards, lists, and cards with TaskFlow.",
      url: "https://taskflow.com",
      siteName: "TaskFlow",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "TaskFlow Task Management App",
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "TaskFlow - Task Management Made Simple",
      description:
        "Organize tasks, collaborate with teams, and boost productivity.",
      images: ["/og-image.png"],
    },

    robots: {
      index: true,
      follow: true,
    },
  },
};
