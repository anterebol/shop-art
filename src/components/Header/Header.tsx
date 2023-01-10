import instagram from '../../assets/contacts/instagram.svg';
import facebook from '../../assets/contacts/facebook.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { INSTAGRAM_LINK, FACEBOOK_LINK } from '../../constants/links';
import { pathes } from '../../constants/url';

const { about, portfolio, shop, blog } = pathes;
import './header.css';
import { Link } from '../Link/Link';
import { useEffect } from 'react';
export const Header = () => {
  const { hash } = useLocation();
  useEffect(() => {
    console.log(hash);
  }, [hash]);
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
                  </li>
                  <li className="has-children">
                    <a href="#" className="nav-link">
                      Shop
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <NavLink
                          to={'/' + 'shop' + '#' + 'art'}
                          className={['nav-link', hash === '#art' ? 'active-link' : ''].join(' ')}
                        >
                          Art
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to={'/' + 'shop' + '#' + 'nature'}
                          className={['nav-link', hash === '#nature' ? 'active-link' : ''].join(
                            ' '
                          )}
                        >
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
                        <Link icon={instagram} text="Instagram" link={INSTAGRAM_LINK} />
                      </li>
                      <li>
                        <Link icon={facebook} text="Facebook" link={FACEBOOK_LINK} />
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
