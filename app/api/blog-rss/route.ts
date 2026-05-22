import { NextResponse } from "next/server"

export const runtime = 'edge'

const HASHNODE_GQL = "https://gql.hashnode.com"
const BLOG_HOST = "blog.sanskarjaiswal.dev"

const QUERY = `{
  publication(host: "${BLOG_HOST}") {
    posts(first: 4) {
      edges {
        node {
          title
          brief
          slug
          publishedAt
          url
        }
      }
    }
  }
}`

export async function GET() {
  try {
    const res = await fetch(HASHNODE_GQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY }),
    })

    if (!res.ok) throw new Error(`${res.status}`)

    const json = await res.json()
    const edges = json?.data?.publication?.posts?.edges ?? []

    const posts = edges.map(({ node }: {
      node: { title: string; brief: string; slug: string; publishedAt: string; url: string }
    }) => ({
      title: node.title,
      excerpt: node.brief?.slice(0, 150) + (node.brief?.length > 150 ? "…" : ""),
      date: node.publishedAt ? new Date(node.publishedAt).toISOString().split("T")[0] : undefined,
      link: node.url,
    }))

    return NextResponse.json(posts, {
      headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=3600" },
    })
  } catch {
    return NextResponse.json({ error: "unavailable" }, { status: 503 })
  }
}
