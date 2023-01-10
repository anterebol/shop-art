import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { useLocation } from 'react-router-dom';
import './fullPage.css';
import { useEffect } from 'react';

// const addClass = (path) => {
//   const pathArr = [];
//   switch (path) {
//     case '/':
//       return;
//     case '/portfolio':
//       pathArr.push('main-portfolio');
//   }
//   pathArr.push('container');
//   return pathArr.join(' ');
// };

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
      <main className={pathname === '/' ? '' : 'container px-0'}>{children}</main>
      <div className="down"></div>
      <Footer />
    </>
  );
};
