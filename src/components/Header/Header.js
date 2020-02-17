import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { scroller } from "react-scroll"
import "./_header.scss"
import LogoImg from "../../images/logo.svg"
import "react-sticky-header/styles.css"
import StickyHeader from "react-sticky-header"
import HamburgerMenu from "react-hamburger-menu"
import { slide as Menu } from "react-burger-menu"
import MediaQuery from "react-responsive"
import ArrowSvg from "../../images/svg/arrow.svg"

function goToAnchor(el) {
  el.preventDefault()
  scroller.scrollTo("wellnessStarted", {
    duration: 500,
    delay: 50,
    smooth: true,
    offset: 50,
  })
}

class Header extends React.Component {
  state = {
    sticky: false,
    mobileMenuOpen: false,
  }

  onSticky = sticky => {
    this.setState(state => ({
      sticky: sticky,
    }))
  }

  componentDidMount() {
    if (
      document
        .querySelector("header.ReactStickyHeader_root")
        .classList.contains("is-sticky")
    ) {
      this.setState(state => ({
        sticky: true,
      }))
    }
  }

  handleMobileMenuClick() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    })
  }

  render() {
    // dynamic class for header
    const headerClasses = ["header"]
    if (this.state.sticky) {
      headerClasses.push("is-sticky")
    }

    const VM = this

    const eventMobileMenu = function(state) {
      if (!state.isOpen) {
        VM.setState({
          mobileMenuOpen: false,
        })
      }
    }

    return (
      <div className="wrap-header">
        <MediaQuery maxWidth={767}>
          <Menu
            isOpen={this.state.mobileMenuOpen}
            onStateChange={eventMobileMenu}
            className="mobile-menu"
            right
          >
            <li className="mobile-menu__item">
              <Link to="/employer" className={"mobile-menu__link"}>
                Employer
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link to="/employee" className={"mobile-menu__link"}>
                Employee
              </Link>
            </li>
            <li className="mobile-menu__item">
              <Link to="/about-us" className={"mobile-menu__link"}>
                About us
              </Link>
            </li>
          </Menu>
        </MediaQuery>

        <StickyHeader
          stickyOffset={-20}
          headerOnly={true}
          onSticky={this.onSticky}
          header={
            <header className={headerClasses.join(" ")}>
              <div className={"container header__row"}>
                <div className="header__nav">
                  <h1 className="header__nav-logo">
                    <Link to="/">
                      <img src={LogoImg} alt={this.props.siteTitle} />
                    </Link>
                  </h1>
                  <ul className="header__nav-list">
                    <li className="header__nav-item">
                      <Link to="/employer" className={"header__nav-link"}>
                        Employer
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link to="/employee" className={"header__nav-link"}>
                        Employee
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link to="/about-us" className={"header__nav-link"}>
                        About us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header__aside">
                  <a
                    className="ui-btn size--small theme--primary"
                    href="#3"
                    tabIndex="0"
                    onClick={goToAnchor}
                  >
                    <span className="ui-btn__box" tabIndex="-1">
                      Get Started
                      <img src={ArrowSvg} alt="arrow" className="ico-arrow" />
                    </span>
                  </a>
                </div>
                <MediaQuery maxWidth={767}>
                  <HamburgerMenu
                    isOpen={this.state.mobileMenuOpen}
                    menuClicked={this.handleMobileMenuClick.bind(this)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color="black"
                    borderRadius={0}
                    animationDuration={0.5}
                    className="header__nav-hamburger"
                  />
                </MediaQuery>
              </div>
            </header>
          }
        />
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
