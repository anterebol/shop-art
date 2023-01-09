import './header.css';
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
                    <a href="#about" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="has-children">
                    <a href="#about-section" className="nav-link">
                      Shop
                    </a>
                    <ul className="dropdown arrow-top">
                      <li>
                        <a href="#art" className="nav-link">
                          Art
                        </a>
                      </li>
                      <li>
                        <a href="#nature" className="nav-link">
                          Nature
                        </a>
                      </li>
                      <li className="has-children">
                        <a href="#">More Links</a>
                        <ul className="dropdown">
                          <li>
                            <a href="#">Menu One</a>
                          </li>
                          <li>
                            <a href="#">Menu Two</a>
                          </li>
                          <li>
                            <a href="#">Menu Three</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="#portfolio" className="nav-link">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#contact-section" className="nav-link">
                      Contact
                    </a>
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
