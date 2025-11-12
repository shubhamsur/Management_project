import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ isOpen, onClose }) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <aside className={`sidebar bg-dark text-white ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header p-3 d-flex align-items-center justify-content-between">
        <h5 className="mb-0">Management</h5>
        {/* small X button for mobile to close */}
        <button className="btn btn-sm btn-light d-md-none" onClick={onClose}>
          ✕
        </button>
      </div>

      <nav className="nav flex-column p-2">
        <Link className="nav-link text-white" to="/">Dashboard</Link>
        <Link className="nav-link text-white" to="/patients">Patients</Link>
        <Link className="nav-link text-white" to="/patientsipd">Patients IPD</Link>


        {/* Settings dropdown */}
        <div className="nav-item">
          <button
            className="nav-link text-white w-100 text-start btn btn-toggle"
            onClick={toggleSettings}
          >
            Settings
            <span className="float-end">{isSettingsOpen ? "▾" : "▸"}</span>
          </button>

          {isSettingsOpen && (
            <ul className="nav flex-column ms-3 mt-2">
              <li><Link className="nav-link text-white-50" to="/adddisease">Disease</Link></li>
              <li><Link className="nav-link text-white-50" to="/gender">Gender</Link></li>
              <li><Link className="nav-link text-white-50" to="/adddoctor">Add Doctor</Link></li>
              <li><Link className="nav-link text-white-50" to="/profile">Profile</Link></li>
              <li><Link className="nav-link text-white-50" to="/settings/password">Password</Link></li>
              <li><Link className="nav-link text-white-50" to="/settings/notifications">Notifications</Link></li>
              <li><Link className="nav-link text-white-50" to="/settings/privacy">Privacy</Link></li>
              <li><Link className="nav-link text-white-50" to="/settings/terms">Terms</Link></li>
              <li><Link className="nav-link text-white-50" to="/settings/help">Help</Link></li>
              <li><Link className="nav-link text-white-50" to="/settings/feedback">Feedback</Link></li>
              <li><Link className="nav-link text-white-50" to="/settings/about">About</Link></li>
              <li><Link className="nav-link text-white-50" to="/settings/contact">Contact</Link></li>
            </ul>
          )}
        </div>
      </nav>

      <div className="sidebar-footer p-3 mt-auto">
        <small>Version 1.0</small>
      </div>
    </aside>
  );
}
