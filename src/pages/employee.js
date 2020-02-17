import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layouts/Layout-default"
import SEO from "../components/seo"

const EmployeePage = () => (
  <Layout>
    <SEO title="Employee" />
    <h1>Employee page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default EmployeePage
