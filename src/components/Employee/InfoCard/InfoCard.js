import React from "react"

const Features = () => {

  return (
    <section className="info-card container">
      <div className="info-card__box">
        <div className="info-card__cover">
          <img className="info-card__cover-img" src={`/images/Employee/infobox.jpg`} srcSet={`/images/Employee/infobox@2x.jpg 2x`} alt="cover"/>
        </div>
        <div className="info-card__content">
          <div className="info-card__box-in">
            <h3 className="info-card__title">
              Everyone deserves
              a financial <br/>  education.
            </h3>
            <div className="info-card__note">
              Regardless of your background or income level, financially informed individuals are better able to take control of their circumstances, improve their quality of life, and ensure a more stable future for themselves and their families.

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
