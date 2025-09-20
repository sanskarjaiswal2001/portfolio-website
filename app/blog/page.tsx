import { BlogSection } from "@/components/blog-section"
import { PageTransition } from "@/components/page-transition"

export default function BlogPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-transparent">
        <BlogSection />
      </main>
    </PageTransition>
  )
}
