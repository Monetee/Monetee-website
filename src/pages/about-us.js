import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layouts/Layout-default"
import SEO from "../components/seo"
import Hero from "../components/About/Hero/Hero"
import WellnessStarted from "../components/Home/WellnessStarted/WellnessStarted"
import Sponsored from "../components/About/Sponsored/Sponsored"

const AboutUsPage = () => (
  <Layout>
    <SEO title="AboutUs" />
    <Hero />
    <Sponsored />
    <WellnessStarted/>
  </Layout>
)

export default AboutUsPage
