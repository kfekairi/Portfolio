import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)
  return (
    <>
      <h1>This is my blog</h1>
      <p>all blog posts goes here</p>
      <ol>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li>
              <Link to={`/blog/${edge.node.slug}`}>
                <h1>{edge.node.title}</h1>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </>
  )
}
