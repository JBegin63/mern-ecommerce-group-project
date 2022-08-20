import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Component imports
import LoginAndRegistration from "./Components/LoginAndRegistration/LoginAndRegistration";
import Dashboard from "./Components/Dashboard/Dashboard";
import AdminLoginForm from "./Components/AdminLoginForm/AdminLoginForm";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import DisplayProduct from "./Components/DisplayProduct/DisplayProduct";
import ProtectedAdminRoute from "./Components/ProtectedRoute/ProtectedAdminRoute";
import Checkout from "./Components/Checkout/Checkout";

// page imports
import AdminDashboard from "./pages/AdminDashboard";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";
import AdminHeader from "./Components/Header/AdminHeader";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/admin" element={<AdminLoginForm />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <ProtectedAdminRoute>
                  <AdminHeader />
                  <AdminDashboard />
                </ProtectedAdminRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/new"
            element={
              <ProtectedRoute>
                <ProtectedAdminRoute>
                  <AdminHeader />
                  <CreateProduct />
                </ProtectedAdminRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/edit/:id"
            element={
              <ProtectedRoute>
                <ProtectedAdminRoute>
                  <AdminHeader />
                  <UpdateProduct />
                </ProtectedAdminRoute>
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <Header />
                <DisplayProduct />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<LoginAndRegistration />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Header />
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/checkout/:id" element={<Checkout />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
