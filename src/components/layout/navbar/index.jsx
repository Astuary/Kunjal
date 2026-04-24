import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Code, BookOpen, Key, Image } from 'react-feather'

import {NavbarElement, NavbarList, NavbarLogo} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                <span className="align-middle">{siteTitle}</span>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className="main-navigation">
            <NavbarList>
              <li><Link to="/" className="lined-link" activeClassName="active"> <User /> <span> About </span> </Link></li> 
              <li><Link to="/research" className="lined-link" activeClassName="active"> <Key /> <span> Research </span> </Link></li>  
              <li><Link to="/education" className="lined-link" activeClassName="active"> <BookOpen /> <span> Education </span> </Link></li>  
              <li><Link to="/works" className="lined-link" activeClassName="active"> <Briefcase /> <span> Experience </span> </Link></li>  
              <li><Link to="/repositories" className="lined-link" activeClassName="active"> <Code /> <span> Projects </span> </Link></li>  
              <li><Link to="/art" className="lined-link" activeClassName="active"> <Image /> <span> Art </span> </Link></li>  
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
