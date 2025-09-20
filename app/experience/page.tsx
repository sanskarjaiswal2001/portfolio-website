import { ExperienceSection } from "@/components/experience-section"
import { PageTransition } from "@/components/page-transition"

export default function ExperiencePage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-transparent">
        <ExperienceSection />
      </main>
    </PageTransition>
  )
}
