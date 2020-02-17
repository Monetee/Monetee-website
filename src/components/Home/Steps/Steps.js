import React from "react"
import "./_steps.scss"

const Steps = () => {
  return (
    <section className="steps">
      <div className="container">
        <ul className="steps__list">
          <li className="steps__item">
            <div className="steps__item-num">01</div>
            <div className="steps__item-title">Adverse Business impact</div>
            <div className="steps__item-note">
              <b>Poor financial wellbeing</b> costs UK employers <b>£1.56bn</b> each year through absenteeism and presenteeism. (<a href="#3">Source: Aegon</a>)
            </div>
          </li>
          <li className="steps__item">
            <div className="steps__item-num">02</div>
            <div className="steps__item-title">Building a future?</div>
            <div className="steps__item-note">
              <b>17 million</b> work-age Brits have <b>less than £100</b> in savings. (<a href="#3">Source: Money Advice Service</a>)
            </div>
          </li>
          <li className="steps__item">
            <div className="steps__item-num">03</div>
            <div className="steps__item-title">Surviving</div>
            <div className="steps__item-note">
              <b>30% of employees</b> surveyed largely agree they are just <b>‘getting by’</b> financially. (<a href="#3">Source: Aegon</a>)
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Steps
