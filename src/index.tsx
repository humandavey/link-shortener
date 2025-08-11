import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './pages/App.tsx'
import Link from './pages/Link.tsx';

createRoot(document.getElementById('root')!).render(
  <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Link />} />
      </Routes>
    </Router>
)
