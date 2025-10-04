import { Routes, Route } from 'react-router-dom';
import Layout from '@/Layout/Layout';
import Home from '@/Home';
import DashBoard from '@/pages/Dashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/errorMonitoring" element={<div>Monitoring Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
