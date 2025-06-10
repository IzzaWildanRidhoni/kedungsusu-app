"use client";

import Link from "next/link";

export default function RegisterPage() {
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
                href="index.html"
                className="text-nowrap logo-img d-block px-4 py-9 w-100"
              >
                <img
                  src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg"
                  width={180}
                  alt=""
                />
              </a>
              <div
                className="d-none d-xl-flex align-items-center justify-content-center"
                style={{ height: "calc(100vh - 80px)" }}
              >
                <img
                  src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/login-security.svg"
                  alt=""
                  className="img-fluid"
                  width={500}
                />
              </div>
            </div>
            <div className="col-xl-5 col-xxl-4">
              <div className="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4">
                <div className="col-sm-8 col-md-6 col-xl-9">
                  <h2 className="mb-3 fs-7 fw-bolder">
                    Welcome to Kedung Susu
                  </h2>
                  <p className=" mb-9">
                    Manage your account and explore features
                  </p>
                  <form>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputtext"
                        aria-describedby="textHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <button
                      className="btn btn-primary w-100 py-8 mb-4 rounded-2"
                      id="register-btn"
                    >
                      Sign Up
                    </button>
                    <div className="d-flex align-items-center">
                      <p className="fs-4 mb-0 text-dark">
                        Already have an Account?
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
