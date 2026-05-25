import type { Metadata } from "next";
import { PLANNER_STRINGS } from "@/lib/constants";
import PlannerWizard from "@/components/wizard/PlannerWizard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: PLANNER_STRINGS.pageTitle,
  description: PLANNER_STRINGS.pageSubtitle,
};

export default function PlannerPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center pt-16">
        <PlannerWizard />
      </main>
      <Footer />
    </>
  );
}
