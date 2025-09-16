import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Test from './Test';

function App() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
