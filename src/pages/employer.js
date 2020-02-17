import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layouts/Layout-default"
import SEO from "../components/seo"

const EmployerPage = () => (
  <Layout>
    <SEO title="Employer" />
    <h1>Employer page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default EmployerPage
