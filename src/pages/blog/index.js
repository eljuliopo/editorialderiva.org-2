/** @jsx jsx */
import { jsx, Themed, Box, Divider } from "theme-ui"
import { graphql } from "gatsby"
import { PostListA1 } from "../../components/postlist"
import React from "react"

export default function Blog(props) {
  const posts = props.data.allContentfulBlogPost.nodes
  return (
    <React.Fragment>
      <Box sx={{ maxWidth: "blog", mx: "auto", px: 3 }}>
        <Themed.h1>BLOG</Themed.h1>
        <Divider />
      </Box>
      <PostListA1 posts={posts} />
    </React.Fragment>
  )
}

export const query = graphql`
  query BlogRollQuery {
    allContentfulBlogPost {
      nodes {
        id
        title
        date(formatString: "D MMMM YYYY", locale: "es")
        description
      }
    }
  }
`
