import React from "react"
import "./_hero.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {

  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "About/about-img1@2x.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      img2: file(relativePath: { eq: "About/about-img2@2x.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      img3: file(relativePath: { eq: "About/about-img3@2x.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      img4: file(relativePath: { eq: "About/about-img4@2x.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      img5: file(relativePath: { eq: "About/about-img5@2x.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 700) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <section className="hero-about">
      <div className="container">
        <div className="hero-about__title">
          Our mission <br/>
          <span>To increase the GNP & GNH of employers and employees</span>
        </div>
        <div className="hero-about__gallery">
          <div className="hero-about__gallery-col">
            <div className="hero-about__gallery-item hero-about__gallery-item--w1">
              <Img fluid={data.img1.childImageSharp.fluid} />
            </div>
            <div className="hero-about__gallery-item">
              <Img fluid={data.img4.childImageSharp.fluid} />
            </div>
          </div>
          <div className="hero-about__gallery-col2">
            <div className="hero-about__gallery-item">
              <Img fluid={data.img2.childImageSharp.fluid} />
            </div>
          </div>
          <div className="hero-about__gallery-col hero-about__gallery-col--last">
            <div className="hero-about__gallery-item hero-about__gallery-item--w2">
              <Img fluid={data.img5.childImageSharp.fluid} />
            </div>
            <div className="hero-about__gallery-item">
              <Img fluid={data.img3.childImageSharp.fluid} />
            </div>
          </div>
        </div>
        <div className="hero-about__note">
          Monetee is a Financial technology company that improves employees’ financial education & wellness. Organisations of every size from startups, public companies & educational institutions can benefit from our financial wellness innovations.
        </div>
      </div>
    </section>
  )
}

export default Hero
