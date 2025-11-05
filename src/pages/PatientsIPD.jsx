import React, { useState } from "react";

export default function PatientsIPD() {
  const [diseaseName, setDiseaseName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (diseaseName.trim() === "") {
      setMessage("⚠️ Please enter a disease name.");
      return;
    }
    setMessage(`✅ Disease "${diseaseName}" added successfully!`);
    setDiseaseName("");
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">Add IPD Details</h4>

        {/* Alert Message */}
        {message && (
          <div
            className={`alert ${
              message.includes("⚠️") ? "alert-warning" : "alert-success"
            }`}
          >
            {message}
          </div>
        )}

        {/* FORM START */}
        <form id="ipdFromsubmit" onSubmit={handleSubmit}>
          <div className="card-body">
            {/* OPD ID */}
            <div className="row opd_id">
              <div className="form-group col-md-4">
                <label htmlFor="sr_no">Sr.#</label>
                <input
                  type="text"
                  id="sr_no"
                  name="sr_no"
                  defaultValue="12345"
                  className="form-control"
                  disabled
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="opd_id">Search OPD ID:</label>
                <input
                  type="text"
                  id="opd_id"
                  name="opd_id"
                  className="form-control text-center"
                />
              </div>

              <div className="form-group col-md-4">
                <label htmlFor="ipd">IPD:</label>
                <input
                  type="text"
                  id="ipd"
                  name="ipd"
                  defaultValue="54321"
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
                      disabled
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" className="form-control" disabled>
                      <option value="">NONE</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
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
                      disabled
                    />
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="form-group">
                    <label htmlFor="days">Days:</label>
                    <select id="days" name="days" className="form-control" disabled>
                      <option value="Year">Year</option>
                      <option value="Month">Month</option>
                      <option value="Day">Day</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="father_husband_name">Father/Husband Name:</label>
                    <input
                      type="text"
                      id="father_husband_name"
                      name="father_husband_name"
                      className="form-control"
                      disabled
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input type="text" id="date" name="date" className="form-control" disabled />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" className="form-control" disabled />
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
                    <label htmlFor="refDr">Referred By Dr:</label>
                    <select className="form-control" name="refDr" id="refDr">
                      <option value="">NONE</option>
                      <option value="Dr. Kanti Batham">डॉ. कांति बाथम</option>
                      <option value="Dr. Shekhar Raghuvanshi">डॉ. शेखर रघुवंशी</option>
                      <option value="Dr. Rishi Chaubey">डॉ. ऋषि चौबे</option>
                      <option value="Dr. Brajesh Rajput">डॉ. ब्रजेश राजपूत</option>
                      <option value="Dr. Kamakshi Gehlot">डॉ. कामाक्षी गहलोत</option>
                      <option value="Dr. Rishi Sahu">डॉ. ऋषि साहू</option>
                      <option value="Dr. Virendra Singh Raag">डॉ. वीरेंद्र सिंह राग</option>
                      <option value="Dr. Ayushi Agrawal">डॉ. आयुषी अग्रवाल</option>
                      <option value="Dr. Shweta Raghuvan">डॉ. श्वेता रघुवन</option>
                      <option value="Dr. Poonam Gaur">डॉ. पूनम गौर</option>
                      <option value="Dr. Jai Singh Kushwaha">डॉ. जय सिंह कुशवाह</option>
                      <option value="Dr. Shubham Mahto">डॉ. शुभम महतो</option>
                      <option value="Dr. Shailendra Yadav">डॉ. शैलेन्द्र यादव</option>
                      <option value="Dr. Vishakha Rajput">डॉ. विशाखा राजपूत</option>
                      <option value="Dr. Aashi Chaure">डॉ. आशी चौरे</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="mlc_pmlc">MLC/PMLC:</label>
                    <select id="mlc_pmlc" name="mlc_pmlc" className="form-control" disabled>
                      <option value="NONE">None</option>
                      <option value="MLC">MLC</option>
                      <option value="PMLC">PMLC</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="wardnumber">Ward Number:</label>
                    <input type="number" className="form-control" id="wardnumber" name="wardnumber" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="wardType">Ward Type:</label>
                    <select id="wardType" name="wardType" className="form-control">
                      <option value="">None</option>
                      <option value="MALE WARD">MALE WARD</option>
                      <option value="FEMALE WARD">FEMALE WARD</option>
                      <option value="MCH WARD">MCH WARD</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="charges">Charges:</label>
                    <select id="charges" name="charges" className="form-control">
                      <option value="">NONE</option>
                      <option value="PAID">PAID</option>
                      <option value="FREE">FREE</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="charge_amount">Charge Amount:</label>
                    <input type="text" id="charge_amount" name="charge_amount" className="form-control" disabled />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="opdamount">OPD Amount:</label>
                    <input type="text" id="opdamount" name="opdamount" className="form-control" disabled />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-info me-2">Save</button>
              <button type="button" id="pdfprint" className="btn btn-warning">Print</button>
            </div>
          </div>
        </form>
        {/* FORM END */}
      </div>
    </div>
  );
}
