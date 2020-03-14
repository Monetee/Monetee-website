import React from "react"

import Layout from "../components/Layouts/Layout-default"
import SEO from "../components/seo"
import Hero from "../components/Employee/Hero/Hero"
import WellnessStarted from "../components/Home/WellnessStarted/WellnessStarted"
import Members from "../components/Employee/Members/Members"
import Steps from "../components/Employee/Steps/Steps"
import Features from "../components/Employee/Features/Features"
import InfoCard from "../components/Employee/InfoCard/InfoCard"
import Promo from "../components/Employee/Promo/Promo"
import Protect from "../components/Employee/Protect/Protect"

const EmployeePage = () => (
  <Layout>
    <SEO title="Employee"/>
    <Hero/>
    <Promo/>
    <Features/>
    <InfoCard/>
    <Steps/>
    <Protect/>
    <Members/>
    <WellnessStarted/>
  </Layout>
)

export default EmployeePage
