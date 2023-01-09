import instagram from '../../assets/contacts/instagram.svg';
import facebook from '../../assets/contacts/facebook.svg';
import { NavLink } from 'react-router-dom';
import { pathes } from '../../constants/url';

const { about, portfolio, shopArt, shopNature, blog } = pathes;
import './header.css';
import { Link } from '../Link/Link';
export const Header = () => {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="site-logo">
              <a href="index.html" className="text-black">
                <span className="text-primary">Brand</span>
              </a>
            </div>

            <div className="col-12">
              <nav className="site-navigation text-right ml-auto " role="navigation">
                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                  <li>
                    <NavLink to={about} className="nav-link">
                      About
                    </NavLink>
                    {/* <a href="#about" className="nav-link">
                      About
                    </a> */}
                  </li>
                  <li className="has-children">
                    <a href="#about-section" className="nav-link">
                      Shop
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <NavLink to={'/' + shopArt} className="nav-link">
                          Art
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={'/' + shopNature} className="nav-link">
                          Nature
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NavLink to={'/' + portfolio} className="nav-link">
                      Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={'/' + blog} className="nav-link">
                      Blog
                    </NavLink>
                  </li>
                  <li className="has-children">
                    <a href="#about-section" className="nav-link">
                      Contacts
                    </a>
                    <ul className="dropdown arrow-top contacts">
                      <li>
                        <Link icon={instagram} text="Instagram" link="https://www.instagram.com/" />
                      </li>
                      <li>
                        <Link icon={facebook} text="Facebook" link="https://www.facebook.com/" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="toggle-button d-inline-block d-lg-none">
              <a href="#" className="site-menu-toggle py-5 js-menu-toggle text-black">
                <span className="icon-menu h3"></span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
