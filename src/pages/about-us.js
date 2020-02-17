import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layouts/Layout-default"
import SEO from "../components/seo"

const AboutUsPage = () => (
  <Layout>
    <SEO title="AboutUs" />
    <h1>About Us page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutUsPage
