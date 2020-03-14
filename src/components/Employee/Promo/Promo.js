import React from "react"
import "./_promo.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Promo = () => {

  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "Employee/hero@2x.jpg" }) {
        childImageSharp {
          fixed(quality: 80, width: 779) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <section className="promo-emp">
      <div className="container">
        <div className="promo-emp__box">
          <div className="promo-emp__box-decor">
            <Img fluid={data.hero.childImageSharp.fixed}  />
          </div>
          <div className="promo-emp__box-main">
            <div className="promo-emp__box-item">
              <h3 className="promo-emp__box-title">Prevent vicious cycles of debt</h3>
              <div className="promo-emp__box-note">
                Access your salary upon emergencies without the need to go through malign payday loan companies. By definition a loan reduces purchasing power we aim to eradicate Payday loans.
              </div>
            </div>
            <div className="promo-emp__box-item">
              <h3 className="promo-emp__box-title">No usury to pay</h3>
              <div className="promo-emp__box-note">
                A salary advance isn’t a loan, so there’s no interest. Just an easy to understand, low fee per withdrawal.
              </div>
            </div>
            <div className="promo-emp__box-item">
              <h3 className="promo-emp__box-title">Better Money Habits</h3>
              <div className="promo-emp__box-note">
                More frequent pay periods can help improve budget management and avoid the need for an overdraft, credit card or payday loan.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Promo
