import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  // isOpen true => visible (desktop expanded or mobile overlay)
  return (
    <aside className={`sidebar bg-dark text-white ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header p-3 d-flex align-items-center justify-content-between">
        <h5 className="mb-0">Hospital Management</h5>
        {/* small X button for mobile to close */}
        <button className="btn btn-sm btn-light d-md-none" onClick={onClose}>
          ✕
        </button>
      </div>

      <nav className="nav flex-column p-2">
        <Link className="nav-link text-white" to="/">Dashboard</Link>
        <Link className="nav-link text-white" to="/patients">Patients</Link>
        <Link className="nav-link text-white" to="/settings">Settings</Link>
      </nav>

      <div className="sidebar-footer p-3 mt-auto">
        <small>Version 1.0</small>
      </div>
    </aside>
  );
}
