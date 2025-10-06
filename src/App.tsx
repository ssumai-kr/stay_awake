import { Routes, Route } from "react-router-dom";
import Layout from "@/Layout/Layout";
import Home from "@/Home";
import DashBoard from "@/pages/Dashboard";
import DataChart from "./pages/DataChart";
import ErrorCard from "./components/ErrorCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/datachart" element={<DataChart />} />
        <Route path="/errorMonitoring" element={<ErrorCard />} />
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
