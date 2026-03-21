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
  login: {
    title: "Login | TaskFlow",
    description:
      "Login to TaskFlow to manage your boards, track tasks, and collaborate with your team efficiently.",

    robots: {
      index: false,
      follow: false,
    },

    openGraph: {
      title: "Login to TaskFlow",
      description:
        "Access your TaskFlow account and manage your projects بسهولة.",
      url: "https://taskflow.com/login",
      type: "website",
    },
  },
  register: {
    title: "Sign Up | TaskFlow",
    description:
      "Create a free TaskFlow account and start organizing your tasks using boards, lists, and cards.",

    robots: {
      index: false,
      follow: false,
    },

    openGraph: {
      title: "Create Your TaskFlow Account",
      description:
        "Sign up for TaskFlow and start managing your projects efficiently.",
      url: "https://taskflow.com/signup",
      type: "website",
    },
  },
  forgotPassword: {
    title: "Forgot Password | TaskFlow",
    description:
      "Reset your TaskFlow account password securely and regain access to your tasks and projects.",

    robots: {
      index: false,
      follow: false,
    },

    openGraph: {
      title: "Reset Your Password - TaskFlow",
      description:
        "Recover your TaskFlow account by resetting your password securely.",
      url: "https://taskflow.com/forgot-password",
      type: "website",
    },
  },
};
