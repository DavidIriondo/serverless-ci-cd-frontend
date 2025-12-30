import { render } from 'preact';
import './style.css';
import { Router } from 'preact-router';
import { ServicesPage } from "./pages/Service/ServicePage.jsx";

export function App() {
  return (
    <Router>
      <ServicesPage path="/" />
    </Router>
  )
}

render(<App />, document.getElementById('app'));
