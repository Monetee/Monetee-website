import React from "react"
import "./_features.scss"

const Features = () => {
  return (
    <section className="features">
      <div className="features__box">
        <div className="features__box-decor1">
          <img src={`images/card@2x.jpg`} alt="img"/>
        </div>
        <div className="features__box-decor2">
          <img src={`images/decor@2x.png`} alt="img"/>
        </div>
        <div className="container">
          <div className="features__box-in">
            <h3 className="features__title">
              Partner with the first<br/>  provider in the industry
            </h3>
            <ul className="features__list">
              <li className="features__item">
                <h4 className="features__item-title">
                  <span>
                    The only fully comprehensive solution
                  </span>
                </h4>
                <div className="features__item-note">
                  Based on extensive experience, Monetee's proven strategy helps you realize immediate value ensuring
                  long-term success
                </div>
              </li>
              <li className="features__item">
                <h4 className="features__item-title">
                  <span>
                    No change to your payroll process
                  </span>
                </h4>
                <div className="features__item-note">
                  Integration is minimal with no changes to your current payroll timing and process
                </div>
              </li>
              <li className="features__item">
                <h4 className="features__item-title">
                  <span>
                    Available to 100% of your workforce
                  </span>
                </h4>
                <div className="features__item-note">
                  Keep your entire workforce happy and engaged with the only solution that can be offered to 100% of your workforce
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
