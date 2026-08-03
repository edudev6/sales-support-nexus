import { createFileRoute } from "@tanstack/react-router";
import SupportAgentDashboard from "@/components/salespages/SupportAgentDashboard";

export const Route = createFileRoute("/support-agent")({
  head: () => ({
    meta: [
      { title: "Support Agent Workspace | Software Vala" },
      {
        name: "description",
        content:
          "Agent workspace for assigned tickets, live chats, response times and personal support performance metrics.",
      },
      { property: "og:title", content: "Support Agent Workspace | Software Vala" },
      {
        property: "og:description",
        content: "Assigned tickets, live chats and personal support performance for agents.",
      },
    ],
  }),
  component: SupportAgentDashboard,
});
