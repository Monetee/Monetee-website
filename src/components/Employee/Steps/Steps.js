import React from "react"
import "./_steps.scss"

const Steps = () => {

  return (
    <section className="steps-emp">
      <div className="container">
        <h3 className="steps-emp__title">The four elements of financial wellness</h3>
        <div className="steps-emp__box">
          <ul className="steps-emp__list">
            <li className="steps-emp__item">
              <div className="steps-emp__item-num">1</div>
              <div className="steps-emp__item-note">Feeling in control</div>
            </li>
            <li className="steps-emp__item">
              <div className="steps-emp__item-num">2</div>
              <div className="steps-emp__item-note">Capacity to absorb a financial shock</div>
            </li>
            <li className="steps-emp__item">
              <div className="steps-emp__item-num">3</div>
              <div className="steps-emp__item-note">On track to meet goals</div>
            </li>
            <li className="steps-emp__item">
              <div className="steps-emp__item-num">4</div>
              <div className="steps-emp__item-note">Flexibility to make choices</div>
            </li>
          </ul>
          <div className="steps-emp__note">(Source:Consumer Financial Protection Bureau)</div>
        </div>
      </div>
    </section>
  )
}

export default Steps
