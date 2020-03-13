import React from "react"

import Layout from "../components/Layouts/Layout-default"
import SEO from "../components/seo"
import Hero from "../components/Employee/Hero/Hero"
import WellnessStarted from "../components/Home/WellnessStarted/WellnessStarted"
import Members from "../components/Employee/Members/Members"
import Steps from "../components/Employee/Steps/Steps"

const EmployeePage = () => (
  <Layout>
    <SEO title="Employee" />
    <Hero />
    <Steps />
    <Members />
    <WellnessStarted />
  </Layout>
)

export default EmployeePage
