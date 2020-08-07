import React from "react"
import "./_hero.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "top-employee.png" }) {
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
            <div className="hero-employee__title-wrap">
              <h2 className="hero-employee__title">
                It’s not borrowing; <br/>
                It’s your money!
              </h2>
              <div className="hero-employee__sub-title">Access Your money when you want it</div>
            </div>

            <div className="hero-employee__apps">
              <div className="hero-employee__apps-note">Download the app soon</div>
              <div className="hero-employee__apps-list">
                <div className="hero-employee__apps-item">
                  <a href="#3">
                    <img src={"/images/Employee/btn-app.svg"} alt="img" width={129}/>
                  </a>
                </div>
                <div className="hero-employee__apps-item">
                  <a href="#3">
                    <img src={"/images/Employee/btn-gp.svg"} alt="img" width={129}/>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="hero-employee__box-decor">
        <Img fixed={data.placeholderImage.childImageSharp.fixed}  />
      </div>
    </section>
  )
}

export default Hero
