import React from "react"
import "./_feautres.scss"

const Features = () => {

  return (
    <section className="features-emp">
      <div className="container">
        <ul className="features-emp__list">
          <li className="features-emp__item">
            <div className="features-emp__item-top">THE CONSEQUENCE</div>
            <div className="features-emp__item-num">4.1</div>
            <div className="features-emp__item-note">Those with financial worries are 4.1 times more likely to be suffering from anxiety and panic attacks, and 4.6 times more likely to be suffering from depression.</div>
          </li>
          <li className="features-emp__item">
            <div className="features-emp__item-top">THE IMPACT</div>
            <div className="features-emp__item-num">9-13<sup>%</sup></div>
            <div className="features-emp__item-note">Financial wellbeing has a significant impact on absenteeism, productivity, engagement and retention. The impact is between 9-13% of total salary cost.</div>
          </li>
          <li className="features-emp__item">
            <div className="features-emp__item-top">MONEY WORRIES</div>
            <div className="features-emp__item-num">36<sup>%</sup></div>
            <div className="features-emp__item-note">36% of employees are worried about money. Money worries are significantly greater than the worries about career, health or relationships.</div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Features
