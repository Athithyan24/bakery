import "./App.css";
import Dashboard from "./dashboard";
import Products from "./Products";
import { CartProvider } from "./CartContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products/:category" element={<Products />} /> 
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
