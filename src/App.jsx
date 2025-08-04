import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LinearAuditLanding from "./components/linearauditlandingpage";
import ContactUsPage from "./components/contactuspage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LinearAuditLanding />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
