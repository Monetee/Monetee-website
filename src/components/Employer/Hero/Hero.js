import React from "react"
import "./_hero.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "top-header@2x.png" }) {
        childImageSharp {
          fixed(quality: 80, width: 706) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <section className="hero-employer">
      <div className="container">
        <div className="hero-employer__box">
          <div className="hero-employer__box-main">
            <h2 className="hero-employer__title">Employer</h2>
            <div className="hero-employer__note">
              <p> Monetee accelerates an employee’s journey from debt to savings, and thereby improving an employees productivity, happiness, financial and mental wellbeing.</p>
              <p>With Monetee, you immediately reduce your employee turnover, reclaiming countless hours spent recruiting, hiring, and onboarding, all without needing to implement a complicated system.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-employer__box-decor">
        <Img fluid={data.placeholderImage.childImageSharp.fixed}  />
      </div>
    </section>
  )
}

export default Hero
