import React from "react"
import "./_protect.scss"

const Features = () => {

  return (
    <section className="protect-emp container">
      <div className="protect-emp__box">

        <div className="protect-emp__decor">
          <img className="protect-emp__cover-img" src={`/images/Employee/shield.jpg`} alt="cover"/>
        </div>

        <div className="protect-emp__note">
          Protect your staff from Payday loans in your organisation. <br/>
          Stop your staff being targeted
        </div>
      </div>
    </section>
  )
}

export default Features
