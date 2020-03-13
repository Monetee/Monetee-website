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
    <section className="hero-employee">
      <div className="container">
        <div className="hero-employee__box">
          <div className="hero-employee__box-main">
            <h2 className="hero-employee__title">Employee</h2>
            <div className="hero-employee__note">
              Monetee accelerates an employee’s journey from debt to savings, and thereby improving an employees productivity, happiness, financial and mental wellbeing. With Monetee, you immediately reduce your employee turnover, reclaiming countless hours spent recruiting, hiring, and onboarding, all without needing to implement a complicated system.
            </div>
          </div>
        </div>
      </div>
      <div className="hero-employee__box-decor">
        <Img fluid={data.placeholderImage.childImageSharp.fixed}  />
      </div>
    </section>
  )
}

export default Hero
