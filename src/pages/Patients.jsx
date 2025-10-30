import React from 'react';
import { useNavigate } from "react-router-dom";

function Patients() {

    const navigate = useNavigate();

    const openForm = () => {
      navigate("/addpatients"); 
    };
  return (
    <div>
      <h2>Patient List</h2>

      <div className="text-end">
        <button type="button" className="btn btn-primary" onClick={openForm}>
            Add Patient
            </button>
      </div>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>#</th><th>Name</th><th>Age</th><th>Condition</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>John Doe</td><td>30</td><td>Flu</td></tr>
          <tr><td>2</td><td>Jane Smith</td><td>40</td><td>Fracture</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Patients;
