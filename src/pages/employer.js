import React from "react"

import Layout from "../components/Layouts/Layout-default"
import SEO from "../components/seo"
import Hero from "../components/Employer/Hero/Hero"
import WellnessStarted from "../components/Home/WellnessStarted/WellnessStarted"
import Advantage from "../components/Employer/Advantage/Advantage"
import Vision from "../components/Employer/Vision/Vision"
import Members from "../components/Employer/Members/Members"
import Integration from "../components/Employer/Integration/Integration"

const EmployerPage = () => (
  <Layout>
    <SEO title="Employer" />
    <Hero />
    <Advantage />
    <Vision />
    <Integration />
    <Members />
    <WellnessStarted/>
  </Layout>
)

export default EmployerPage
