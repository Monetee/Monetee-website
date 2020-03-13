import React from "react"

const Members = () => {

  return (
    <section  className="members-">
      <div className="container">
        <div className="members__box">
          <div className="members__box-info members__box-info--s2">
            <div className="members__box-info-in">
              <h4 className="section-title">People are More Than Numbers</h4>

              <div className="members__box-note">
                Engaged, enthusiastic, and loyal employees are pivotal drivers of growth and health in any organization.
              </div>
              <div className="members__box-user">
                <img className="members__box-ico" src={`/images/Employee/userpic.jpg`} srcSet={`/images/Employee/userpic@2x.jpg 2x`} alt="ico"/>
                <div className="members__box-user-info">
                  <div className="members__box-user-title">Patrick Lencioni</div>
                  <div className="members__box-user-note">Bestselling Author</div>
                </div>
              </div>
            </div>
          </div>
          <div className="members__box-decor members__box-decor--s2">
            <img src={`/images/Employee/member.jpg`} srcSet={`/images/Employee/member@2x.jpg 2x`} alt="ico"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Members
