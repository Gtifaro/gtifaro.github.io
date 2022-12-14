import React from "react";
import "./utils/styles.css"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HeaderContainer from "./components/Header/Header"
import AboutContainer from "./components/About/About"
import SkillsContainer from "./components/Skills/Skills"
import WorkContainer from "./components/Work/Work"
import ContactContainer from "./components/Contact/Contact"
import BlogContainer from "./components/Blog/Blog"
import HomeContainer from "./components/Home/Home"

export default function App() {
  return (
    <div className="App">
      <Router>
        <HeaderContainer/>
        <Routes>
          <Route path="/About" element={<AboutContainer/>}></Route>
          <Route path="/Skills" element={<SkillsContainer/>}></Route>
          <Route path="/Contact" element={<ContactContainer/>}></Route>
          <Route path="/Work" element={<WorkContainer/>}></Route>
          <Route path="/Blog" element={<BlogContainer/>}></Route>
          <Route path="/" element={<HomeContainer/>}></Route>
          <Route path="/index.html" element={<HomeContainer/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}