import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchScores from "../pages/SearchScore";
import Dashboard from "../pages/Dashboard";
import Reports from "../pages/Report";
import Settings from "../pages/Settings";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/search" element={<SearchScores />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
  </Routes>
  );
};

export default AppRoutes;