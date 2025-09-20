import { AboutSection } from "@/components/about-section"
import { PageTransition } from "@/components/page-transition"

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-transparent">
        <AboutSection />
      </main>
    </PageTransition>
  )
}
