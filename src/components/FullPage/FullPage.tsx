import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const FullPage = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
