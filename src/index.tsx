import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const app = () => {
  return <App />;
};
const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(app());
