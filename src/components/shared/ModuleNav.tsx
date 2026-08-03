import { Link } from "@tanstack/react-router";
import { LayoutDashboard, Headphones, UserCog, Contact, ShieldCheck, Bot, Blocks, Sparkles } from "lucide-react";

const items = [
  { to: "/", label: "Command Center", icon: LayoutDashboard },
  { to: "/support", label: "Support Ops", icon: Headphones },
  { to: "/support-agent", label: "Agent Workspace", icon: UserCog },
  { to: "/sales-crm", label: "Sales CRM", icon: Contact },
  { to: "/sales-support-manager", label: "Manager Console", icon: ShieldCheck },
  { to: "/support-chatbot", label: "Chatbot", icon: Bot },
  { to: "/support-chatbot-blueprint", label: "Chatbot Blueprint", icon: Blocks },
  { to: "/internal-support-ai", label: "Internal Support AI", icon: Sparkles },
] as const;

export function ModuleNav() {
  return (
    <nav
      aria-label="Sales & Support modules"
      className="sticky top-0 z-50 flex w-full items-center gap-1 overflow-x-auto border-b border-border/60 bg-background/80 px-3 py-2 backdrop-blur"
    >
      {items.map(({ to, label, icon: Icon }) => (
        <Link
          key={to}
          to={to}
          activeOptions={{ exact: to === "/" }}
          className="flex shrink-0 items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          activeProps={{ className: "bg-primary/15 text-primary" }}
        >
          <Icon className="h-3.5 w-3.5" />
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default ModuleNav;
