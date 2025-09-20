import { ContactSection } from "@/components/contact-section"
import { PageTransition } from "@/components/page-transition"

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-transparent">
        <ContactSection />
      </main>
    </PageTransition>
  )
}
