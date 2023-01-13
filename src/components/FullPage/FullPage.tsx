import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import './fullPage.css';
import { useEffect } from 'react';

export const FullPage = ({ children }: { children: JSX.Element }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    const body = document.getElementsByTagName('body');
    if (pathname === '/portfolio') {
      body[0].classList.add('portfolio');
    } else {
      body[0].classList.remove('portfolio');
    }
  }, [pathname]);
  return (
    <>
      <Header />
      {/* <main className={'page-portfolio'}>{children}</main> */}
      <main className={pathname === '/' ? '' : 'page-portfolio'}>{children}</main>
      <div className="down"></div>
      <Footer />
    </>
  );
};
