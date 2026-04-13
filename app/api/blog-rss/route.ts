import { NextResponse } from "next/server"

const HASHNODE_GQL = "https://gql.hashnode.com"
const BLOG_HOST = "blog.sanskarjaiswal.dev"

const QUERY = `{
  publication(host: "${BLOG_HOST}") {
    posts(first: 6) {
      edges {
        node {
          title
          brief
          slug
          publishedAt
          url
          tags {
            name
          }
        }
      }
    }
  }
}`

export async function GET() {
  try {
    const response = await fetch(HASHNODE_GQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY }),
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error("Failed to fetch from Hashnode API")
    }

    const json = await response.json()
    const edges = json?.data?.publication?.posts?.edges || []

    const posts = edges.map((edge: { node: { title: string; brief: string; publishedAt: string; url: string; tags?: { name: string }[] } }) => {
      const node = edge.node
      const firstTag = node.tags?.[0]?.name
      return {
        title: node.title,
        excerpt: node.brief.length > 160 ? node.brief.substring(0, 160) + "..." : node.brief,
        date: new Date(node.publishedAt).toISOString().split("T")[0],
        link: node.url,
        category: firstTag || undefined,
      }
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 })
  }
}
