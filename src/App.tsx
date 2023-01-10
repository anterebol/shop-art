import { Routes, Route } from 'react-router-dom';
import './App.css';
import { FullPage } from './components/FullPage/FullPage';
import { Portfolio } from './pages/Portfolio/Portfolio';
import { pathes } from './constants/url';
import { About } from './pages/About/About';
import { Shop } from './pages/Shop/Shop';
import { Blog } from './pages/Current/Blog';

const { shop, about, blog, portfolio } = pathes;
function App() {
  return (
    <Routes>
      <Route
        path={about}
        element={
          <FullPage>
            <About />
          </FullPage>
        }
      ></Route>
      <Route
        path={portfolio}
        element={
          <FullPage>
            <Portfolio />
          </FullPage>
        }
      ></Route>
      <Route
        path={shop}
        element={
          <FullPage>
            <Shop shopType="art" />
          </FullPage>
        }
      ></Route>
      <Route
        path={blog}
        element={
          <FullPage>
            <Blog />
          </FullPage>
        }
      ></Route>
    </Routes>
  );
}

export default App;
