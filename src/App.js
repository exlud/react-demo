import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';

import Hub from './pages/Hub'
import Tide from './pages/Tide';
import Md from './pages/Md'
import NotFound from './pages/NotFound'
import Lab from './pages/Lab';


function App() {

  return (
    <>
     <Router>
      <Routes>
      
      <Route path="/" strict element={<Hub />} />
      <Route path="/tide" strict element={<Tide />} />
      <Route path="/md" strict element={<Md />} />
      <Route path="/lab/:site" element={<Lab />} />
      <Route path="*" element={<NotFound page="404"/>} />
    </Routes>
    </Router>
    </>

  );
};

export default App;
