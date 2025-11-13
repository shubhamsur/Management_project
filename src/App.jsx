import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Addpatients from "./pages/Addpatients";
import AddDisease from "./pages/AddDisease";
import Gender from "./pages/Gender";
import Adddoctor from "./pages/Adddoctor";
import PatientsIPD from "./pages/PatientsIPD";
import Profile from "./pages/profile";
import Addhospital from "./pages/Registerhospital.jsx";
import AdminDashboard from "./pages/AdminDashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard.jsx";
import UserDashboard from "./pages/UserDashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./style.css";

// ✅ Updated ProtectedRoute
function ProtectedRoute({ children, allowedRoles }) {
  const { user, loading } = useAuth(); // assume your AuthContext supports loading

  // Show loading while user data is being fetched
  if (loading) {
    console.log("Auth loading...");
    return <div>Loading...</div>;
  }

  console.log("🔍 ProtectedRoute check");
  console.log("User object:", user);
  console.log("Allowed roles:", allowedRoles);

  if (!user) {
    console.warn("❌ No user found — redirecting to login");
    return <Navigate to="/login" replace />;
  }

  const userRole = user.role ? user.role.toLowerCase() : "unknown";
  console.log("User role:", userRole);

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    console.warn(
      `🚫 Access denied — Role '${userRole}' not in allowed roles [${allowedRoles.join(", ")}]`
    );
    return <Navigate to="/unauthorized" replace />;
  }

  console.log("✅ Access granted");

  console.log('children',children);
  return children;
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, loading } = useAuth();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Show loading until auth state is ready
  if (loading) {
    return <div>Loading...</div>;
  }

  // If not logged in, show only auth routes
  if (!user) {
    console.log("👤 Not logged in, showing public routes");
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerhospital" element={<Addhospital />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  console.log("👤 Logged in as:", user);

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? "expanded" : "collapsed"}`}>
        <Navbar onToggle={toggleSidebar} />
        <div className="page-container">
          <Routes>
            {/* Dashboards by role */}
            <Route
              path="/"
              element={
                <ProtectedRoute allowedRoles={["admin", "superadmin", "user"]}>
                  {user.role?.toLowerCase() === "admin" ? (
                    <AdminDashboard />
                  ) : user.role?.toLowerCase() === "superadmin" ? (
                    <SuperAdminDashboard />
                  ) : (
                    <UserDashboard />
                  )}
                </ProtectedRoute>
              }
            />

            {/* Common routes */}
            <Route
              path="/patients"
              element={
                <ProtectedRoute allowedRoles={["admin", "superadmin", "user"]}>
                  <Patients />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute allowedRoles={["admin", "superadmin", "user"]}>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute allowedRoles={["admin", "superadmin", "user"]}>
                  <Profile />
                </ProtectedRoute>
              }
            />

            {/* Admin & SuperAdmin routes */}
            <Route
              path="/addpatients"
              element={
                <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                  <Addpatients />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adddisease"
              element={
                <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                  <AddDisease />
                </ProtectedRoute>
              }
            />
            <Route
              path="/gender"
              element={
                <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                  <Gender />
                </ProtectedRoute>
              }
            />
            <Route
              path="/patientsipd"
              element={
                <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                  <PatientsIPD />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adddoctor"
              element={
                <ProtectedRoute allowedRoles={["admin", "superadmin"]}>
                  <Adddoctor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addhospital"
              element={
                <ProtectedRoute allowedRoles={["superadmin"]}>
                  <Addhospital />
                </ProtectedRoute>
              }
            />

            <Route
              path="/superadmin"
              element={
                <ProtectedRoute allowedRoles={["superadmin"]}>
                  <SuperAdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Unauthorized route */}
            <Route path="/unauthorized" element={<h3>🚫 Access Denied</h3>} />

            {/* Catch-all */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
