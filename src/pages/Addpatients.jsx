import React from "react";
import { useNavigate } from "react-router-dom";

function Addpatients() {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Add User Form</h4>
      </div>

      <div className="card p-3">
        <form id="submitdata" method="POST">
          {/* OPD ID Section */}
          <div className="card-body">
            {/* OPD ID Section */}
            <div className="row">
              <div className="form-group col-md-3">
                <label htmlFor="sr_no">Sr.#</label>
                <input
                  type="number"
                  id="sr_no"
                  name="sr_no"
                  className="form-control"
                  disabled
                />
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="opd_id">OPD ID:</label>
                <input
                  type="text"
                  id="opd_id"
                  name="opd_id"
                  className="form-control"
                  disabled
                />
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="date">Date:</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  className="form-control"
                  disabled
                />
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="time">Time:</label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  className="form-control"
                  disabled
                />
              </div>
            </div>

            {/* Personal Information */}
            <div className="mt-4 col-md-12">
              <h4>Personal Information</h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="patient_name">Patient's Name:</label>
                    <input
                      type="text"
                      id="patient_name"
                      name="patient_name"
                      className="form-control"
                    />
                    <span className="text-danger small nameErr"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" className="form-control">
                      <option value="">NONE</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="text-danger small genderErr"></span>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      className="form-control"
                    />
                    <span className="text-danger small ageErr"></span>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="days">Days:</label>
                    <select id="days" name="days" className="form-control">
                      <option value="Year">Year</option>
                      <option value="Month">Month</option>
                      <option value="Day">Day</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="father_husband_name">
                      Father/Husband Name:
                    </label>
                    <input
                      type="text"
                      id="father_husband_name"
                      name="father_husband_name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="mobile_no">Mobile No:</label>
                    <input
                      type="text"
                      id="mobile_no"
                      name="mobile_no"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="area">Area:</label>
                    <select id="area" name="area" className="form-control">
                      <option value="">NONE</option>
                      <option value="RURAL">Rural</option>
                      <option value="URBAN">Urban</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="caste">Caste:</label>
                    <input
                      type="text"
                      id="caste"
                      name="caste"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Official Information */}
            <div className="mt-4 col-md-12">
              <h4>Official Information</h4>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="disease">Disease:</label>
                    <select id="disease" name="disease" className="form-control">
                      <option value="">NONE</option>
                      <option value="General Medicine">सामान्य चिकित्सा</option>
                      <option value="ANC Checkup">एएनसी जांच</option>
                      <option value="RTA & Accident">आर.टी. एवं दुर्घटना</option>
                      <option value="Poisoning">जहर</option>
                      <option value="Orthopedics">आर्थोपेडिक्स</option>
                      <option value="Anti Rabies">एंटी रेबीज</option>
                    </select>
                    <span className="text-danger small diseaseErr"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="mlc_pmlc">MLC/PMLC:</label>
                    <select
                      id="mlc_pmlc"
                      name="mlc_pmlc"
                      className="form-control"
                    >
                      <option value="NONE">None</option>
                      <option value="MLC">MLC</option>
                      <option value="PMLC">PMLC</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="charges">Charges:</label>
                    <select id="charges" name="charges" className="form-control">
                      <option value="">NONE</option>
                      <option value="PAID">PAID</option>
                      <option value="FREE">FREE</option>
                    </select>
                    <span className="text-danger small chargetypeErr"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="charge_amount">Charge Amount:</label>
                    <input
                      type="text"
                      id="charge_amount"
                      name="charge_amount"
                      className="form-control"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="text-center mt-4">
              <button type="button" id="newEntry" className="btn btn-warning me-2">
                New Patient
              </button>
              <button type="submit" className="btn btn-success me-2">
                Save
              </button>
              <button type="button" className="btn btn-info">
                Print PDF
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addpatients;
