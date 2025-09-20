import { ProjectsSection } from "@/components/projects-section"
import { PageTransition } from "@/components/page-transition"

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-transparent">
        <ProjectsSection />
      </main>
    </PageTransition>
  )
}
