import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import FormBuilder from "./pages/FormBuilder";
import * as FormViewer from "./pages/FormViewer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/form-builder/:id?" element={<FormBuilder />} />
        <Route path="/form/:id" element={<FormViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
