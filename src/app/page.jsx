"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Sidebar from "./components/Sidebar";

export default function HomePage() {
  const router = useRouter();

  //get token
  const token = Cookies.get("token");

  // ketika token tidak ada, redirect ke login
  useEffect(() => {
    if (!token) {
      router.replace("/login");
    }
  }, []);

  return (
    <>
      {/*  Body Wrapper */}
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-theme="blue_theme"
        data-layout="vertical"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        {/* Sidebar Start */}
        <Sidebar />
        {/*  Sidebar End */}
        {/*  Main wrapper */}
        <div className="body-wrapper">
          {/*  Header Start */}
          <header className="app-header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link sidebartoggler nav-icon-hover ms-n3"
                    id="headerCollapse"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-menu-2" />
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav quick-links d-none d-lg-flex">
                <li className="nav-item dropdown hover-dd d-none d-lg-block"></li>
              </ul>
              <div className="d-block d-lg-none">
                <img
                  src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg"
                  className="dark-logo"
                  width={180}
                  alt=""
                />
                <img
                  src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/light-logo.svg"
                  className="light-logo"
                  width={180}
                  alt=""
                />
              </div>
              <button
                className="navbar-toggler p-0 border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="p-2">
                  <i className="ti ti-dots fs-7" />
                </span>
              </button>
            </nav>
          </header>
          {/*  Header End */}
          <div className="container-fluid">
            {/*  Owl carousel */}
            <div className="owl-carousel counter-carousel owl-theme">
              <div className="item">
                <div className="card border-0 zoom-in bg-light-primary shadow-none">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-user-male.svg"
                        width={50}
                        height={50}
                        className="mb-3"
                        alt=""
                      />
                      <p className="fw-semibold fs-3 text-primary mb-1">
                        {" "}
                        Employees{" "}
                      </p>
                      <h5 className="fw-semibold text-primary mb-0">96</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card border-0 zoom-in bg-light-warning shadow-none">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-briefcase.svg"
                        width={50}
                        height={50}
                        className="mb-3"
                        alt=""
                      />
                      <p className="fw-semibold fs-3 text-warning mb-1">
                        Clients
                      </p>
                      <h5 className="fw-semibold text-warning mb-0">3,650</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card border-0 zoom-in bg-light-info shadow-none">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-mailbox.svg"
                        width={50}
                        height={50}
                        className="mb-3"
                        alt=""
                      />
                      <p className="fw-semibold fs-3 text-info mb-1">
                        Projects
                      </p>
                      <h5 className="fw-semibold text-info mb-0">356</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card border-0 zoom-in bg-light-danger shadow-none">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-favorites.svg"
                        width={50}
                        height={50}
                        className="mb-3"
                        alt=""
                      />
                      <p className="fw-semibold fs-3 text-danger mb-1">
                        Events
                      </p>
                      <h5 className="fw-semibold text-danger mb-0">696</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card border-0 zoom-in bg-light-success shadow-none">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-speech-bubble.svg"
                        width={50}
                        height={50}
                        className="mb-3"
                        alt=""
                      />
                      <p className="fw-semibold fs-3 text-success mb-1">
                        Payroll
                      </p>
                      <h5 className="fw-semibold text-success mb-0">$96k</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="card border-0 zoom-in bg-light-info shadow-none">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-connect.svg"
                        width={50}
                        height={50}
                        className="mb-3"
                        alt=""
                      />
                      <p className="fw-semibold fs-3 text-info mb-1">Reports</p>
                      <h5 className="fw-semibold text-info mb-0">59</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  Row 1 */}
            <div className="row">
              <div className="col-lg-12 d-flex align-items-strech">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                      <div className="mb-3 mb-sm-0">
                        <h5 className="card-title fw-semibold">
                          Revenue Updates
                        </h5>
                        <p className="card-subtitle mb-0">Overview of Profit</p>
                      </div>
                      <div>
                        <select className="form-select">
                          <option value={1}>March 2023</option>
                          <option value={2}>April 2023</option>
                          <option value={3}>May 2023</option>
                          <option value={4}>June 2023</option>
                        </select>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-lg-8 col-md-8">
                        <div id="chart" />
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="d-flex align-items-center mb-4 pb-1">
                          <div className="p-8 bg-light-primary rounded-1 me-3 d-flex align-items-center justify-content-center">
                            <i className="ti ti-grid-dots text-primary fs-6" />
                          </div>
                          <div>
                            <h4 className="mb-0 fs-7 fw-semibold">
                              $63,489.50
                            </h4>
                            <p className="fs-3 mb-0">Total Earnings</p>
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-baseline mb-4">
                            <span className="round-8 bg-primary rounded-circle me-6" />
                            <div>
                              <p className="fs-3 mb-1">Earnings this month</p>
                              <h6 className="fs-5 fw-semibold mb-0">$48,820</h6>
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline mb-4 pb-1">
                            <span className="round-8 bg-secondary rounded-circle me-6" />
                            <div>
                              <p className="fs-3 mb-1">Expense this month</p>
                              <h6 className="fs-5 fw-semibold mb-0">$26,498</h6>
                            </div>
                          </div>
                          <div>
                            <button className="btn btn-primary w-100">
                              View Full Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dark-transparent sidebartoggler" />
        <div className="dark-transparent sidebartoggler" />
      </div>
    </>
  );
}
