import React from "react"
import './_advantage.scss'

const Members = () => {

  return (
    <section  className="advantage-employee">
      <div className="container">
        <h3 className="advantage-employee__title">Choose your Payday</h3>
        <div className="advantage-employee__note">Access your pay right after you’ve worked.</div>
        <div className="advantage-employee__list">
          <div className="advantage-employee__item">
            <div className="advantage-employee__item-ico">
              <img src={"/images/Employee/icon/i1.svg"} alt="img" width={109}/>
            </div>
            <div className="advantage-employee__item-title">No Need to Wait</div>
            <div className="advantage-employee__item-note">Your earnings are available to you in seconds!</div>
          </div>
          <div className="advantage-employee__item">
            <div className="advantage-employee__item-ico">
              <img src={"/images/Employee/icon/i2.svg"} alt="img" width={86}/>
            </div>
            <div className="advantage-employee__item-title">Keep Track</div>
            <div className="advantage-employee__item-note">Build your financial IQ & track your earnings in real-time.</div>
          </div>
          <div className="advantage-employee__item">
            <div className="advantage-employee__item-ico">
              <img src={"/images/Employee/icon/i3.svg"} width={68} alt="img"/>
            </div>
            <div className="advantage-employee__item-title">Invest</div>
            <div className="advantage-employee__item-note">Save & Grow your earnings in real-time with us.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Members
