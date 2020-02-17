import React from "react"
import { Element } from "react-scroll"
import "./_wellnessStarted.scss"
import Form from './WellnessForm'

const WellnessStarted = () => {
  return (
    <Element className="wellness" name="wellnessStarted">
      <div className="wellness__box">
        <div className="container">
          <h2 className="wellness__title">
            Help your employees - Net your wellness™
          </h2>
          <p className="wellness__note">
            We explore distant planets, 3D print bone implants, yet salary remit
            takes 30days. Not any more. Better financial health benefits everyone.
            what are you waiting for...
          </p>
          <div className="wellness__form">
            <Form btnLabel="Get Started" />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default WellnessStarted
