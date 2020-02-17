import React from "react"

import Layout from "../components/Layouts/Layout-default"
import SEO from "../components/seo"
import WellnessStarted from "../components/Home/WellnessStarted/WellnessStarted"

import Hero from "../components/Home/Hero/Hero"
import Vision from "../components/Home/Vision/Vision"
import Features from "../components/Home/Features/Features"
import Members from "../components/Home/Members/Members"
import Steps from "../components/Home/Steps/Steps"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Vision />
    <Features />
    <Members />
    <Steps />
    <WellnessStarted />
  </Layout>
)

export default IndexPage
