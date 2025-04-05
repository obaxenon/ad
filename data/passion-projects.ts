import type { PassionProject } from "@/types/passion-project"

export const passionProjects: PassionProject[] = [
  {
    id: "ai-workflow-generator",
    title: "AI Workflow Generator",
    description:
      "A tool similar to make.com that allows users to create automated workflows powered by AI without coding.",
    image: "/images/ai-workflow.png",
    demoUrl: "/demos/ai-workflow-generator",
  },
  {
    id: "python-uno-game",
    title: "UNO Delight",
    description: "A browser-based implementation of the classic UNO card game built with Python and WebAssembly.",
    image: "/images/uno-game.png",
    demoUrl: "/demos/python-uno-game",
  },
  {
    id: "python-surf-game",
    title: "Surfer Pro",
    description: "An offline-like surfing game built with Python, featuring realistic physics and engaging gameplay.",
    image: "/images/surf-game.png",
    demoUrl: "/demos/python-surf-game",
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support Chatbot",
    description:
      "A plug-and-play AI chatbot solution for eCommerce websites that can be easily integrated to provide customer support.",
    image: "/images/ai-chatbot.png",
    demoUrl: "/demos/ai-chatbot",
  },
]

