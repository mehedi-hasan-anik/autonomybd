import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./pages/Login";
import ProductType from "./pages/ProductType";

function App() {
  const history = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("token");
      history("/");
    }, 20 * 60 * 1000);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/product-type"
          element={
            <PrivateRoute>
              <ProductType />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
