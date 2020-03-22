import React from "react"

import Layout from "../components/Layouts/Layout-default"
import SEO from "../components/seo"
import Hero from "../components/About/Hero/Hero"
import WellnessStarted from "../components/Home/WellnessStarted/WellnessStarted"
import Sponsored from "../components/About/Sponsored/Sponsored"
import Benefits from "../components/About/Benefits/Benefits"
import InfoCard from "../components/About/InfoCard/InfoCard"
import Members from "../components/About/Members/Members"
import Features from "../components/About/Features/Features"

const AboutUsPage = () => (
  <Layout>
    <SEO title="AboutUs"/>
    <Hero/>
    <Sponsored/>
    <Benefits/>
    <InfoCard/>
    <Members/>
    <Features/>
    <WellnessStarted/>
  </Layout>
)

export default AboutUsPage
