import React from "react"
import "./_vision.scss"

const Vision = () => {
  return (
    <section className="vision-emp">
      <div className="container">

        <div className="vision-emp__row">
          <div className="vision-emp__decision">
            <div className="vision-emp__decision-box">
              <h4 className="section-title">Net your wellness™</h4>
              <div className="vision-emp__decision-note">
                Over 500,000 private sector workers have taken time off due to their financial wellbeing, leading to a loss of over 4.2 million days of work
              </div>
              <div className="vision-emp__decision-info">
                (Source: Aegon)
              </div>
            </div>

            <div className="vision-emp__decision-decor">
              <img src={`/images/Employer/staff.jpg`} alt="img"/>
            </div>
          </div>

          <div className="vision-emp__employer">
            <div className="vision-emp__employer-box">
              <h3 className="vision-emp__employer-box-title">The pain of waiting & cycle of debt</h3>
              <div className="vision-emp__employer-box-decor">
                <img src={`/images/Employer/employer@2x.jpg`} alt="Employer"/>
              </div>

              <div className="vision-emp__employer-box-info">
                78% of workers agreed How a company treats its employees is one of the best indicators of its level of trustworthiness
              </div>
              <div className="vision-emp__employer-box-sub">
                (Source: Elderman)
              </div>



            </div>
            <div className="vision-emp__employer-info">
              <h3 className="vision-emp__employer-info-title">Your staff will love you for it</h3>
              <div className="vision-emp__employer-info-note">
                <p>
                  Technological revolution has given us the ability to communicate instantaneously across entire continents waiting to receive your pay at the end of the month has become archaic, attract and retain new talent into your team & join forward thinking businesses to improve the state of the nation’s financial health.
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
