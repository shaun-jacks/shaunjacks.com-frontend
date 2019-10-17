import React from "react"
import "../global.css"
import GitHubButton from "react-github-btn"
import Layout from "../templates/Layout"
import shaun from "../images/shaun-avatar.png"
import { FaLinkedinIn } from "react-icons/fa"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(props => <a {...props} />)`
  margin-left: 1em;
  padding: 0.25em;
  padding-bottom: 0em;
  justify-content: center;
  align-content: center;
  background-color: #2867b2;
  color: white;
  width: 10%;
  height: 30px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background-color: #28679f;
  }
`

export default () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "2rem 0",
          padding: "1.5rem",
          textAlign: "center",
          background: "var(--bgAccentContainer)",
        }}
      >
        <img
          style={{
            flex: "1",
            margin: "0.5rem 1rem",
            borderRadius: "12px",
            maxWidth: "200px",
          }}
          src={shaun}
        />
        <div style={{ marginTop: "1em" }}>
          <h2>Hi! I'm Shaun</h2>
          <p>
            As a curious soul, I value continual learning and am passionate
            about full stack development. I bring 3+ years experience- ranging
            from low level embedded systems to both frontend and backend
            services.
          </p>
          <div
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <GitHubButton
              href="https://github.com/shaun-jacks"
              data-size="large"
              aria-label="Follow @shaun-jacks on GitHub"
            >
              Github
            </GitHubButton>
            <StyledLink
              style={{ color: "white" }}
              href="https://linkedin.com/in/shaun-jackson/"
            >
              <FaLinkedinIn />
            </StyledLink>
          </div>
        </div>
      </div>
    </Layout>
  )
}
