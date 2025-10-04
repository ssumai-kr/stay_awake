import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import DashBoard from './pages/Dashboard';
import Layout from './Layout/Layout';
import DataSet from './pages/DataSet';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dataset" element={<DataSet />} />
        <Route path="/errorMonitoring" element={<div>Monitoring Page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
