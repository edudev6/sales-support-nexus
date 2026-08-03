import { createFileRoute } from "@tanstack/react-router";
import SupportChatbotWireframe from "@/components/support-chatbot-wireframe/SupportChatbotWireframe";

export const Route = createFileRoute("/support-chatbot-blueprint")({
  head: () => ({
    meta: [
      { title: "Support Chatbot Blueprint | Software Vala" },
      {
        name: "description",
        content:
          "Structural blueprint view of the support chatbot suite: dashboard, bot list, live chats, training, automation, languages, analytics, logs and settings.",
      },
      { property: "og:title", content: "Support Chatbot Blueprint | Software Vala" },
      {
        property: "og:description",
        content: "Blueprint view of the chatbot suite screens and navigation structure.",
      },
    ],
  }),
  component: SupportChatbotWireframe,
});
