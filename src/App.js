import React from "react";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import MailBody from "./MailBody/MailBody";
import MailList from "./MailBody/MailList";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app_body">
          <SideBar />
          <Routes>
            <Route path="/" element={<MailList />} />
            <Route path="/mail" element={<MailBody />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
