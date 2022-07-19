import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./pages/Login";
import ProductType from "./pages/ProductType";
export const userContext = createContext();

function App() {
  const [token, setToken] = useState(null);

  return (
    <userContext.Provider value={[token, setToken]}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/product-type" element={
          <PrivateRoute>
            <ProductType />
          </PrivateRoute>
        } />
      </Routes>
    </userContext.Provider>
  );
}

export default App;
