import React from "react"
import "./_benefits.scss"

const Benefits = () => {

  return (
    <section className="about-benefits container">
      <div className="about-benefits__box">

        <h3 className="about-benefits__title">FinTech benefits</h3>
        <div className="about-benefits__note">improve the situation of both employees by:</div>

        <div className="about-benefits__list">
          <div className="about-benefits__item">
            <div className="about-benefits__item-num">01</div>
            <div className="about-benefits__item-note">providing solutions for the pressing day-to-day crises typically
              faced by employees.
            </div>
          </div>
          <div className="about-benefits__item">
            <div className="about-benefits__item-num">02</div>
            <div className="about-benefits__item-note">providing lower-cost products to employees than market
              alternatives, due to the potential for employer subsidization of benefits and the FinTech partner’s lower
              cost base and access to the employer’s payroll system for income data and repayment.
            </div>
          </div>
          <div className="about-benefits__item">
            <div className="about-benefits__item-num">03</div>
            <div className="about-benefits__item-note">providing some credit-damaged or credit-invisible employees with
              access to traditional financial products, thus increasing “financial inclusion” and reducing or
              eliminating
              reliance on high-cost short-term solutions like payday loans, bank overdrafts and other “alternative”
              financial products.
            </div>
          </div>
        </div>
        <div className="about-benefits__footer">
          Source:The Power of the Salary Link, (Baker and Kumar, 2018)
        </div>
      </div>

    </section>
  )
}

export default Benefits
