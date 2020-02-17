import React from "react"
import "./_footer.scss"
import LogoImg from "../../images/logo-white.svg"
import { Link } from "gatsby"

const Footer = ({ props, siteTitle }) => {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__logo">
          <Link to="/" className="footer__logo-link">
            <img src={LogoImg} alt={siteTitle}/>
          </Link>
        </div>
        <div className="footer__menu">
          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <Link to="/employer" className="footer__menu-link">Employer</Link>
            </li>
            <li className="footer__menu-item">
              <Link to="/employee" className="footer__menu-link">Employee</Link>
            </li>
            <li className="footer__menu-item">
              <Link to="/about-us" className="footer__menu-link">About us</Link>
            </li>
            <li className="footer__menu-item">
              <Link to="/" className="footer__menu-link">Terms of Use</Link>
            </li>
            <li className="footer__menu-item">
              <Link to="/" className="footer__menu-link">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__main">
        <div className="container footer__main-box">
          <div className="footer__copy">
            © Copyright {new Date().getFullYear()} &nbsp;
            <a href="#3">Monetee</a>
          </div>
          <div className="footer__creater">
            Design by &nbsp;
            <a href="https://jakobsze.com" rel="noopener noreferrer" target="_blank">
              Jakobsze.com
            </a>
          </div>
          {` `}

        </div>
      </div>

    </footer>
  )
}

export default Footer
