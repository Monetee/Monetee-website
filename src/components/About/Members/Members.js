import React from "react"

const Members = () => {

  return (
    <section  className="members">
      <div className="container">
        <div className="members__box">
          <div className="members__box-info members__box-info--s2">
            <div className="members__box-info-in">
              <h4 className="section-title">Our Vision statement</h4>
              <div className="members__box-note">
                A world where people have access to make sophisticated, informed, and advantageous financial decisions.
              </div>
            </div>
          </div>
          <div className="members__box-decor members__box-decor--s4">
            <img src={`/images/About/bike.jpg`} srcSet={`/images/About/bike@2x.jpg 2x`} alt="ico"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Members
