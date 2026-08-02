## Important reality check first

This project is currently the **blank starter template**. I verified it: `src/routes/` contains only `__root.tsx` and a placeholder `index.tsx`, there are no layouts, no sidebar/topbar, no auth, no database, and no design tokens beyond the default shadcn greys. There is no other "Software Vala" project in this workspace either (I checked all 7 accessible projects).

So there is nothing here yet to "match exactly". The `sapphire-nexus-command` repo you linked **is** the Software Vala project (its README is the Software Vala Super Admin Command Center brief). Therefore, to satisfy "match the existing Software Vala UI exactly", the design system I use will be **Software Vala's own tokens and shell ported from that repo** — Sapphire / Graphite / Neon Cyan, 3D glass panels — not a new invented theme. I will port only the shell pieces the Sales & Support module needs (one layout, one sidebar, one topbar), no duplicates, no extra modules, no login page.

Note: the source repo is a Vite + React Router + Supabase app. This project is TanStack Start. Screens port over almost verbatim; routing and data access are re-expressed in TanStack Router + Lovable Cloud (no Prisma — Lovable Cloud is Postgres with generated typed clients).

## Scope: exactly what gets imported

From the source repo, the Sales & Support surface is these files (~90 components + pages), all of which come across:

```text
src/components/sales-support/          Lead Inbox, Conversion Pipeline, Sales Performance,
                                       Commission Board, Demo Dispatch, Escalation Tree,
                                       Communication Hub, Sales Script Console, AI Sales Copilot,
                                       Dashboard content, Sidebar, TopBar
  modules/                             Sales Leads, Sales Team, Support Tickets, Support Team,
                                       Live Chat, Call Center, Email Queue, Escalations,
                                       SLA Compliance, CRM Customers, AI Insights, Settings
src/components/sales-support-manager/  Assigned Leads, Sales Pipeline, Support Tickets,
                                       Escalations, SLA Alerts, Team Performance, Reports & Audit
src/components/support/                Omni-Channel Inbox, Ticket Inbox, Priority Queue,
                                       SLA Management, Customer 360, Canned Responses,
                                       Solution Wiki, Automation Rules, Approval Workflow,
                                       Quality Audit, Shift Availability, Support Analytics,
                                       Metrics, Notifications, System Logs, Token System +
                                       Command Center, Fraud Detection, AI Troubleshooter,
                                       AI Features, SafeAssist (agent/user/chat/security),
                                       Staff & Managers, Users & Partners, Performance
src/components/sales-crm/ + pages/sales-crm/   CRM Dashboard, Leads, Customers, Deals,
                                       Tasks & Follow-ups, Reports, Settings
src/components/support-chatbot-dashboard/, support-chatbot-wireframe/, internal-support-ai/
src/pages/SalesSupportDashboard.tsx, SupportDashboard.tsx, dashboards/SupportAgentDashboard.tsx
```

Excluded deliberately, per your instructions: `SalesCRMAuth*` pages (no author/extra login), every other module (franchise, reseller, developer, finance, SEO, influencer, demo, task, R&D, HR, legal, etc.), and the franchise/super-admin shells that merely embed sales/support views.

## Data layer — real, no mocks

Enable **Lovable Cloud** (Postgres + auth + storage + server functions) and create the Sales & Support schema in one migration, with grants, RLS, and a role table (`app_role` + `has_role`) for agent / manager / admin permissions:

- Sales: `leads`, `lead_activities`, `lead_sources`, `pipeline_stages`, `deals`, `customers`, `contacts`, `quotes`, `sales_targets`, `commissions`, `sales_scripts`, `demo_requests`, `tasks_followups`
- Support: `tickets`, `ticket_messages`, `ticket_attachments`, `sla_policies`, `sla_breaches`, `escalations`, `canned_responses`, `wiki_articles`, `automation_rules`, `approvals`, `quality_audits`, `shifts`, `agent_availability`, `support_tokens`, `chat_sessions`, `chat_messages`, `email_queue`, `call_logs`, `system_logs`, `notifications`, `fraud_flags`

Every screen reads and writes through TanStack Query + typed server functions against these tables. Realistic seed rows (Indian/global company names, plausible amounts, dates, SLA clocks) are inserted as literal `INSERT` statements in the migration — no `faker`, no hardcoded arrays in components, no fake fetch wrappers. AI features (Sales Copilot, AI Troubleshooter, AI Insights, SafeAssist, chatbot) run on the Lovable AI Gateway, which is a real API.

## Routing

```text
/                          → Sales & Support command center (module home)
/sales-support/*           sales dashboard, leads, pipeline, team, performance,
                           commissions, scripts, demos, copilot
/support/*                 inbox, tickets, priority queue, sla, escalations,
                           customer-360, canned-responses, wiki, automation,
                           approvals, quality, shifts, analytics, logs, tokens
/sales-crm/*               dashboard, leads, customers, deals, tasks, reports, settings
/support/chatbot, /support/internal-ai
```
One shared layout (`SalesSupportLayout`) with one sidebar and one topbar, wrapping all of it.

## Delivery order

1. Enable Lovable Cloud; Software Vala design tokens + glass UI primitives ported into `src/styles.css`.
2. Schema migration with grants, RLS, roles, and realistic seed data.
3. Layout, sidebar, topbar, routing skeleton (all routes exist and render).
4. Support side: inbox, tickets, priority queue, SLA, escalations, Customer 360, canned responses, wiki, automation, approvals, quality, shifts, tokens, analytics, logs, notifications, fraud.
5. Sales side: lead inbox, pipeline, team, performance, commissions, scripts, demo dispatch, communication hub.
6. Sales CRM sub-app: dashboard, leads, customers, deals, tasks, reports, settings.
7. AI surfaces: Sales Copilot, AI Insights, AI Troubleshooter, SafeAssist, support chatbot + internal support AI.
8. Manager views (SSM assigned leads, pipeline, tickets, escalations, SLA alerts, team performance, reports & audit), then a file-by-file diff against the source list to confirm zero feature loss.

## Technical notes

- Reads use route loaders + `ensureQueryData` with `useSuspenseQuery`; writes use server functions with Zod validation and `.middleware([requireSupabaseAuth])`.
- Server functions live in `*.functions.ts` thin wrappers; helpers in separate modules.
- Role checks are server-side via `has_role`, never client storage.
- Recharts for all analytics (already installed); sonner for toasts.
- Each route gets its own `head()` with unique title/description/OG tags.
- This is a large port — expect it to run across several build turns; each turn leaves the app in a working state.