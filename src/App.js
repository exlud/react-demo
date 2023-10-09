import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Lab from './pages/Lab';
import Logging from './pages/Logging';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound'
import RoleContext from './component/Role'

function App() {
  const [logged, setLogged] = useState(false);
  const ctx = {logged, setLogged};
  console.log({logged});

  return (
    <RoleContext.Provider value={ctx}>
    <Router>
      <Routes>
      <Route path="/login" element={<Logging />} />
      <Route path="/" strict element={<Welcome />} />
      <Route path="/lab" strict element={<Lab />} />
      <Route path="*" strict element={<NotFound />} />
    </Routes>
    </Router>
    </RoleContext.Provider>
  );
};

export default App;
