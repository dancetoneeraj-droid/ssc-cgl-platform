import type { Metadata } from "next";
import { DashboardHome } from "@/components/dashboard-home";

export const metadata: Metadata = {
  title: "Study",
};

export default function HomePage() {
  return <DashboardHome />;
}
