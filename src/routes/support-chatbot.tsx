import { createFileRoute } from "@tanstack/react-router";
import { SupportChatbotDashboard } from "@/components/support-chatbot/SupportChatbotDashboard";

export const Route = createFileRoute("/support-chatbot")({
  head: () => ({
    meta: [
      { title: "Support Chatbot Console | Software Vala" },
      {
        name: "description",
        content:
          "Manage support chatbots: bot training, live chat inbox, automation rules, multi-language, Android integration and analytics.",
      },
      { property: "og:title", content: "Support Chatbot Console | Software Vala" },
      {
        property: "og:description",
        content: "Bot training, live chat inbox, automation rules and chatbot analytics.",
      },
    ],
  }),
  component: SupportChatbotDashboard,
});
