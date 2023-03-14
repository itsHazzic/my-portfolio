import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home'
import Contact from './pages/contact'
import Project from './pages/project'

import Header from "./components/header";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
