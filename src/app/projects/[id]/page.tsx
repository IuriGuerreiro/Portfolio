import { portfolioData } from "@/data/data";
import ProjectClient from "./ProjectClient";

export function generateStaticParams() {
  // Use English keys as the source of truth for IDs
  return Object.keys(portfolioData.en.projects).map((id) => ({
    id: id,
  }));
}

export default function ProjectPage() {
  return <ProjectClient />;
}