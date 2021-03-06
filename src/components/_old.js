import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layouts/Layout-default"
import Image from "../components/image"
import SEO from "../components/seo"
import WellnessStarted from "../components/Home/WellnessStarted/WellnessStarted"

import Hero from "../components/Home/Hero/Hero"
import Vision from "../components/Home/Vision/Vision"
import Features from "../components/Home/Features/Features"
import Members from "../components/Home/Members/Members"
import Steps from "../components/Home/Steps/Steps"
import Footer from "../components/Footer/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Vision />
    <Features />
    <Members />
    <Steps />
    <WellnessStarted />
    <Footer />

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
