import { createFileRoute } from "@tanstack/react-router";
import SalesSupportDashboard from "@/components/salespages/SalesSupportDashboard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sales & Support Command Center | Software Vala" },
      {
        name: "description",
        content:
          "Software Vala Sales & Support command center: lead inbox, pipeline, tickets, SLA compliance, escalations and AI insights in one console.",
      },
      { property: "og:title", content: "Sales & Support Command Center | Software Vala" },
      {
        property: "og:description",
        content:
          "Unified sales and support operations console with leads, pipeline, tickets, SLA and AI insights.",
      },
    ],
  }),
  component: SalesSupportDashboard,
});
