"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import useAuthStore from "../../../../stores/authStore";

export default function RegisterPage() {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

  const setAuth = useAuthStore((state) => state.setAuth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/api/register`, formData);

      const token = response.data.data.token;
      const user = response.data.data.user;

      Cookies.set("token", token, { expires: 7 });

      setAuth({
        user: user,
        role: user.role,
        permissions: user.permissions,
      });

      router.push("/");
    } catch (err) {
      if (err.response?.data?.data) {
        setErrors(err.response.data.data);
      } else {
        alert("Register failed: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <div className="position-relative overflow-hidden radial-gradient min-vh-100">
        <div className="position-relative z-index-5">
          <div className="row">
            <div className="col-xl-7 col-xxl-8">
              <a
                href="/"
                className="text-nowrap logo-img d-block px-4 py-9 w-100"
              >
                <Image
                  src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg"
                  width={180}
                  height={30}
                  alt="logo"
                />
              </a>
              <div
                className="d-none d-xl-flex align-items-center justify-content-center"
                style={{ height: "calc(100vh - 80px)" }}
              >
                <Image
                  src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/login-security.svg"
                  alt=""
                  className="img-fluid"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="col-xl-5 col-xxl-4">
              <div className="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4">
                <div className="col-sm-8 col-md-6 col-xl-9">
                  <h2 className="mb-3 fs-7 fw-bolder">Register</h2>
                  <p className="mb-9">Register to create an account</p>
                  <form onSubmit={handleRegister}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email address</label>
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        name="password"
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-8 mb-4 rounded-2"
                      disabled={loading}
                    >
                      {loading ? "Registering..." : "Sign Up"}
                    </button>
                    <div className="d-flex align-items-center">
                      <p className="fs-4 mb-0 text-dark">
                        Already have an account?
                      </p>
                      <Link
                        className="text-primary fw-medium ms-2"
                        href="/login"
                      >
                        Sign In
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
