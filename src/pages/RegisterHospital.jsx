// src/pages/RegisterHospital.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterHospital() {
  const [form, setForm] = useState({
    hospitalName: '',
    adminName: '',
    email: '',
    password: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await axios.post('http://localhost:8080/api/register-hospital', form);

      setSuccess(
        `Hospital "${res.data.hospital.name}" created successfully! 
         Database: ${res.data.hospital.dbName}`
      );

      setTimeout(() => {
        navigate('/login');
      }, 3000);

    } catch (err) {
      setError(
        err.response?.data?.message || 
        'Failed to register hospital. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-4 px-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-header bg-gradient  text-center py-4" style={{ background: 'linear-gradient(135deg, #0d6efd, #6610f2)' }}>
                <h3 className="mb-1 fw-semibold">Hospital Registration</h3>
                <p className="mb-0 fw-semibold">Create your hospital account & get your own database</p>
              </div>

              <div className="card-body p-4 p-md-5">

                {/* Success Alert */}
                {success && (
                  <div className="alert alert-success d-flex align-items-center" role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    <div>{success}</div>
                  </div>
                )}

                {/* Error Alert */}
                {error && (
                  <div className="alert alert-danger d-flex align-items-center" role="alert">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    <div>{error}</div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                  {/* Hospital Name */}
                  <div className="mb-3">
                    <label htmlFor="hospitalName" className="form-label fw-semibold">Hospital Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="hospitalName"
                      name="hospitalName"
                      value={form.hospitalName}
                      onChange={handleChange}
                      placeholder="e.g., Apollo Hospital Delhi"
                      required
                    />
                    <div className="invalid-feedback">Please enter hospital name.</div>
                  </div>

                  {/* Admin Name */}
                  <div className="mb-3">
                    <label htmlFor="adminName" className="form-label fw-semibold">Admin Full Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="adminName"
                      name="adminName"
                      value={form.adminName}
                      onChange={handleChange}
                      placeholder="e.g., Dr. Shubham Singh"
                      required
                    />
                    <div className="invalid-feedback">Please enter admin name.</div>
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="admin@hospital.com"
                      required
                    />
                    <div className="invalid-feedback">Please enter a valid email.</div>
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      minLength="6"
                      required
                    />
                    <div className="form-text text-muted">Minimum 6 characters</div>
                    <div className="invalid-feedback">Password must be at least 6 characters.</div>
                  </div>

                  {/* Phone */}
                  <div className="mb-4">
                    <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                    <div className="invalid-feedback">Please enter a valid phone number.</div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center"
                    style={{ background: 'linear-gradient(135deg, #0d6efd, #6610f2)', border: 'none' }}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Creating Hospital...
                      </>
                    ) : (
                      'Register Hospital'
                    )}
                  </button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-muted mb-0">
                    Already have a hospital?{' '}
                    <a href="/login" className="text-decoration-none fw-semibold text-primary">
                      Login here
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}