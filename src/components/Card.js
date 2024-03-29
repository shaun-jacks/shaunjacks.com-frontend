import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

const CardWrapper = styled.article`
  max-width: 800px;
  max-height: 250px;
  margin: 2em 0em;
  overflow: ellipsis;
`

const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-hbox-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.25s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .image {
    flex: 1;
    margin-right: 1em;
    z-index: 1;
  }
  .info {
    flex: 2;
    max-height: 100%;
  }

  @media (max-width: 506px) {
     {
      max-height: 122px;
    }
    .info p {
      overflow: ellipsis;
    }
  }
`
const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: slategray;
  &:hover {
    text-decoration: none;
    pointer: cursor;
  }
`
// width: "300px", height: "200px", margin: "1em"

const Card = ({ post }) => {
  let { date, title, author, tags } = post.frontmatter
  let { excerpt, timeToRead } = post
  let featuredImage

  if (post.frontmatter.featuredImage) {
    featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid
  }
  let { slug } = post.fields

  return (
    <CardWrapper>
      <StyledLink to={slug}>
        <CardContent>
          <div className="image">
            <Link to={slug}>
              {featuredImage && (
                <Image
                  fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                />
              )}
            </Link>
          </div>
          <div className="info">
            <h3 style={{ marginBottom: rhythm(0.1) }}>{title}</h3>
            <small style={{ marginBottom: rhythm(0.1), overflow: "ellipsis" }}>
              {excerpt}
            </small>
            <br />
            <small>
              <strong>{timeToRead} min read</strong> - {date}
            </small>
          </div>
        </CardContent>
      </StyledLink>
    </CardWrapper>
  )
}

export default Card
