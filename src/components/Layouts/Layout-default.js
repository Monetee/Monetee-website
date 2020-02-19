/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import ReactNotification from "react-notifications-component"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./_layout.scss"
import "react-notifications-component/dist/scss/notification.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ReactNotification />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="content-box">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
