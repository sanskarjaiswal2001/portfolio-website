import { NextResponse } from "next/server"
import { XMLParser } from "fast-xml-parser"

export async function GET() {
  try {
    const response = await fetch("https://blog.sanskarjaiswal.dev/rss.xml", {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Portfolio-Site/1.0)",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch RSS feed")
    }

    const xmlText = await response.text()

    const parser = new XMLParser({ ignoreAttributes: false, ignoreDeclaration: true })
    const parsed = parser.parse(xmlText)

    const items = parsed?.rss?.channel?.item || []

    const posts = (Array.isArray(items) ? items : [items]).map((item: any) => {
      const title = (item.title && String(item.title)) || ""
      const description = (item.description && String(item.description)) || ""
      const link = (item.link && String(item.link)) || ""
      const pubDate = (item.pubDate && String(item.pubDate)) || ""
      const category = (item.category && String(item.category)) || undefined

      // Remove HTML tags and strip hashtags like #tag from excerpts and category
      const cleanExcerpt = description.replace(/<[^>]*>/g, "").replace(/#\w+/g, "").trim()

      const excerptShort = (cleanExcerpt.length > 150 ? cleanExcerpt.substring(0, 150) + "..." : cleanExcerpt)

      const cleanCategory = category ? category.replace(/#\w+/g, "").trim() : undefined

      return {
        title: title.trim(),
        excerpt: excerptShort,
        date: pubDate ? new Date(pubDate).toISOString().split("T")[0] : undefined,
        link: link.trim(),
        category: cleanCategory,
      }
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching RSS feed:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}
