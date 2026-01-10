import { portfolioData } from "@/data/data";
import ExperienceClient from "./ExperienceClient";

export function generateStaticParams() {
  // Use English keys as the source of truth for IDs
  return portfolioData.en.experience.map((job: any) => ({
    id: job.id,
  }));
}

export default function ExperiencePage() {
  return <ExperienceClient />;
}
