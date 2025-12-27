import { render } from 'preact';
import './style.css';

import { ServicesPage } from "./pages/Service/ServicePage.jsx";

export function App() {
  return <ServicesPage />;
}

render(<App />, document.getElementById('app'));
