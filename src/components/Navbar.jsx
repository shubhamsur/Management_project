import React from "react";

export default function Navbar({ onToggle }) {
  return (
    <nav className="navbar navbar-light bg-light shadow-sm px-3">
      <div className="d-flex align-items-center w-100">
        {/* Hamburger - visible on small screens */}
        <button
          className="btn btn-outline-primary d-md-none me-2"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Desktop toggle - visible on md+ */}
        <button
          className="btn btn-outline-primary d-none d-md-inline-block me-3"
          onClick={onToggle}
          aria-label="Toggle sidebar desktop"
        >
          ☰
        </button>

        <span className="navbar-brand mb-0 h5">Dashboard</span>

        <div className="ms-auto">
          <button className="btn btn-sm btn-outline-secondary">Logout</button>
        </div>
      </div>
    </nav>
  );
}
