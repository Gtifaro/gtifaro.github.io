import React from "react";
import "./utils/styles.css"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HeaderContainer from "./components/header/Header"
import Todo from "./components/Todo/Todo";

export default function App() {
  return (
    <div className="App">
      <Router>
        <HeaderContainer/>
        <Routes>
          <Route path="/About" element={<Todo/>}></Route>
          <Route path="/Skills" element={<Todo/>}></Route>
          <Route path="/Contact" element={<Todo/>}></Route>
          <Route path="/Work" element={<Todo/>}></Route>
          <Route path="/Extra" element={<Todo/>}></Route>
          <Route path="/" element={<Todo/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}