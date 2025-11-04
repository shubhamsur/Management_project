import React, { useState } from "react";

export default function Gender() {
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
        <h4 className="mb-3">Add Gender</h4>

        {message && (
          <div
            className={`alert ${
              message.includes("⚠️") ? "alert-warning" : "alert-success"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="diseaseName" className="form-label">
              Gender:
            </label>
            <input
              type="text"
              id="diseaseName"
              name="diseaseName"
              value={diseaseName}
              onChange={(e) => setDiseaseName(e.target.value)}
              className="form-control"
              placeholder="Enter gender"
            />
          </div>

          <button type="submit" className="btn btn-success me-2">
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setDiseaseName("")}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
