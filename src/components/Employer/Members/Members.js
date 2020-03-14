import React from "react"

const Members = () => {

  return (
    <section  className="members">
      <div className="container">
        <div className="members__box">
          <div className="members__box-info members__box-info--s2">
            <div className="members__box-info-in">
              <h4 className="section-title">People are More Than Numbers</h4>
              <div className="members__box-note">
                Take time to appreciate employees and they will reciprocate in a thousand ways
              </div>
              <div className="members__box-user">
                <img className="members__box-ico" src={`/images/Employer/userpic.jpg`} srcSet={`/images/Employer/userpic@2x.jpg 2x`} alt="ico"/>
                <div className="members__box-user-info">
                  <div className="members__box-user-title">Bob Nelson</div>
                  <div className="members__box-user-note">Bestselling Author</div>
                </div>
              </div>
            </div>
          </div>
          <div className="members__box-decor members__box-decor--s3">
            <img src={`/images/Employer/member.jpg`} srcSet={`/images/Employer/member@2x.jpg 2x`} alt="ico"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Members
