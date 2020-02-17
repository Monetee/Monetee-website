import React from "react"
import "./_vision.scss"

const Vision = () => {
  return (
    <section className="vision">
      <div className="container">

        <div className="vision__row">
          <div className="vision__decision">
            <h4>Our Vision statement</h4>

            <div className="vision__decision-note">
              A world where people have access to make sophisticated, informed,
              and advantageous financial decisions.
            </div>

            <div className="vision__decision-decor">
              <img className="vision__decision-decor-img" src={`images/man.jpg`} srcSet={`images/man@2x.jpg 2x`} alt="img"/>
              <img className="vision__decision-decor-img2" src={`images/waves.svg`} alt="img"/>
            </div>
          </div>

          <div className="vision__employer">

            <div className="vision__employer-calendar">
              <img className="vision__employer-calendar-decor" src={`images/calendar@2x.jpg`}/>
              <img className="vision__employer-calendar-decor2" src={`images/decor2.png`} srcSet={`images/decor2@2x.png 2x`}/>
              <h3 className="vision__employer-calendar-title">Help your Employees</h3>
              <div className="vision__employer-calendar-info">
                The Technological revolution has given us the ability to
                communicate instantaneously across entire continents, explore
                distant planets, 3D print bone implants, yet salary remit takes 30
                days. <b>Not any more!</b>
              </div>
            </div>

            <div className="vision__employer-box">
              <h3 className="vision__employer-title">Employer of the year</h3>
              <div className="vision__employer-note">
                <p>
                  Greatly boost employee productivity, reduce absenteeism and
                  Reduce recruitment costs replacing unmotivated employees and
                  enhance your corporate image by Expanding your employee benefits
                  package with a salary advance feature.
                </p>

                <p>
                  In doing so, we guarantee improvement in financial wellbeing and
                  productivity, and an increase in employee retention.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Vision
