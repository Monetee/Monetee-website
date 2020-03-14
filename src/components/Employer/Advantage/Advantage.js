import React from "react"
import './_advantage.scss'

const Members = () => {

  return (
    <section  className="advantage">
      <div className="container">
        <h3 className="advantage__title">The Monetee advantage</h3>
        <div className="advantage__note">Our platform integrates seamlessly with payroll processes and exposes no financial risk and no cash flow impact; we cover salary advances with payments taken directly from salary. </div>
        <div className="advantage__list">
          <div className="advantage__item">
            <div className="advantage__item-ico">
              <img src={"/images/Employer/ico1.png"} alt="img"/>
            </div>
            <div className="advantage__item-title">Instantly Reduce Turnover</div>
            <div className="advantage__item-note">Turnover costs are crazy. Reduce emloyee turnover by an average of 47%</div>
          </div>
          <div className="advantage__item">
            <div className="advantage__item-ico">
              <img src={"/images/Employer/ico2.png"} alt="img"/>
            </div>
            <div className="advantage__item-title">Immediately Fill Open Positions</div>
            <div className="advantage__item-note">Increase your applicant pool 3x by paying employees on their first day on the job</div>
          </div>
          <div className="advantage__item">
            <div className="advantage__item-ico">
              <img src={"/images/Employer/ico3.png"} alt="img"/>
            </div>
            <div className="advantage__item-title">Promote Financial Wellness</div>
            <div className="advantage__item-note">Help your employees pay bills on time and reduce financial stress.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Members
