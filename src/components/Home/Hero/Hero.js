import React from "react"
import "./_hero.scss"
import Form from '../WellnessStarted/WellnessForm'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__box">
          <div className="hero__box-main">
            <h2 className="hero__title">
              Money worries? Pay day is just a <b>click away!</b>
            </h2>
            <div className="hero__note">
              Monetee improve employees’ financial wellness, by making it easier
              to access their earned salary, save regularly and avoid more
              expensive forms of borrowing such as overdrafts and payday loans.
            </div>
            <div className="hero__wellness">
              <h3 className="hero__wellness-title">
                Help your employees <b>“Net their wellness” </b>
              </h3>
              <div className="hero__wellness-form">
                <Form btnLabel="GO" themeBorder={true} />
              </div>
            </div>
          </div>
          <div className="hero__box-decor">
            <img src={`images/hero.jpg`} alt="img"/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
