import { Routes, Route } from 'react-router-dom';
import Home from './Templates/Home'
import ProductPage from './Templates/ProductPage'

function App() {
  return (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
