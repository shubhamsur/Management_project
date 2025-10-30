import React from 'react';

function Dashboard() {
  return (
    <div>
      <h2 className="mb-4">Welcome to Hospital Dashboard</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h5>Total Patients</h5>
            <h3>120</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h5>Doctors</h5>
            <h3>25</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h5>Appointments</h5>
            <h3>56</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
