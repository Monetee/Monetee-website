import React from "react"
import "./_sponsored.scss"

const Features = () => {

  return (
    <section className="about-sponsored container">
      <div className="about-sponsored__box">

        <div className="about-sponsored__decor">
          <img className="about-sponsored__cover-img" src={`/images/About/sponsored.jpg`} alt="cover"/>
        </div>

        <div className="about-sponsored__note">
          <h3 className="about-sponsored__title">Employer-sponsored financial products </h3>
          <div className="about-sponsored__info">are more efficient than market alternatives and provide clear and compelling benefits to employees:</div>

          <div className="about-sponsored__list">
            <div className="about-sponsored__list-item">
              <div className="about-sponsored__list-title">Inclusivity.</div>
              <div className="about-sponsored__list-note">The FinTech products could be used by a much wider range of employees— many of whom are credit-damaged or credit-invisible—who could not access traditional financial products in the market.</div>
            </div>
            <div className="about-sponsored__list-item">
              <div className="about-sponsored__list-title">Cost.</div>
              <div className="about-sponsored__list-note">The FinTech products provided under the plans were much less expensive than the alternatives available for most low-income employees in the market.</div>
            </div>
          </div>
          <div className="about-sponsored__footer">
            Source:The Power of the Salary Link, (Baker and Kumar, 2018)
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
