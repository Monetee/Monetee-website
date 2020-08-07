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
              <h3 className="promo-emp__box-title">Co-living expenses</h3>
              <div className="promo-emp__box-note">
                flatmates can be fun (most of the time ;) Use Monetee to smooth any unexpected bill payments & keep having fun.
              </div>
            </div>
            <div className="promo-emp__box-item">
              <h3 className="promo-emp__box-title is-smaller">Co-living expenses</h3>
              <div className="promo-emp__box-note is-smaller">
                Access your salary upon emergencies without the need to go through malign payday loan companies. By definition a loan reduces purchasing power we aim to eradicate Payday loans.
              </div>
            </div>
            <div className="promo-emp__box-item">
              <h3 className="promo-emp__box-title is-smaller">No usury to pay</h3>
              <div className="promo-emp__box-note is-smaller">
                A salary advance isn’t a loan, so there’s no interest. Just an easy to understand, low fee per withdrawal.
              </div>
            </div>
            <div className="promo-emp__box-item">
              <h3 className="promo-emp__box-title is-smaller">Better Money Habits</h3>
              <div className="promo-emp__box-note is-smaller">
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
