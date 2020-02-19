import React from "react"
import './_members.scss'

const Members = () => {
  return (
    <section  className="members">
      <div className="container">
        <div className="members__box">
          <div className="members__box-info">
            <h4 className="section-title">People are More Than Numbers</h4>

            <div className="members__box-note">
              Employees are a company's greatest asset - they're your competitive advantage. You want to attract and retain the best; provide them with encouragement, stimulus, and make them feel that they are an integral part of the company's mission.
            </div>
            <div className="members__box-user">
              <img className="members__box-ico" src={`images/userpic.jpg`} srcSet={`images/userpic@2x.jpg 2x`} alt="ico"/>
              <div className="members__box-user-info">
                <div className="members__box-user-title">Anne M. Mulcahy</div>
                <div className="members__box-user-note">Former CEO at Xerox</div>
              </div>
            </div>
          </div>
          <div className="members__box-decor">
            <img src={`images/employees.jpg`} srcSet={`images/employees@2x.jpg 2x`} alt="img"/>
          </div>
        </div>

        <div className="members__info">
          <div className="members__info-cover">
            <img className="members__info-cover-img" src={`images/i1.jpg`} srcSet={`images/i1@2x.jpg 2x`} alt="cover"/>
          </div>
          <div className="members__info-box">
            <div className="members__info-box-in">
              <h3 className="members__info-title">
                People are more than numbers
              </h3>
              <div className="members__info-note">
                Our employee benefits deliver a meaningful, positive impact on the lives of employees which allows them to live and not merely survive, to build a future and not merely be confined to a financial prison.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Members
