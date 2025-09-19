import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import DashBoard from './Test';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DashBoard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
