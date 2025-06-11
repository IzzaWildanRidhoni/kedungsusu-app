"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import Sidebar from "./components/Sidebar";

export default function HomePage() {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

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
        <aside className="left-sidebar">
          {/* Sidebar scroll*/}
          <div>
            <div className="brand-logo d-flex align-items-center justify-content-between">
              <a href="index.html" className="text-nowrap logo-img">
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
              </a>
              <div
                className="close-btn d-lg-none d-block sidebartoggler cursor-pointer"
                id="sidebarCollapse"
              >
                <i className="ti ti-x fs-8 text-muted" />
              </div>
            </div>
            {/* Sidebar navigation*/}
            <Sidebar />
            <div className="fixed-profile p-3 bg-light-secondary rounded sidebar-ad mt-3">
              <div className="hstack gap-3">
                <div className="john-img">
                  <img
                    src="/images/profile/user-1.jpg"
                    className="rounded-circle"
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <div className="john-title">
                  <h6 className="mb-0 fs-4 fw-semibold">Mathew</h6>
                  <span className="fs-2 text-dark">Designer</span>
                </div>
                <button
                  className="border-0 bg-transparent text-primary ms-auto"
                  tabIndex={0}
                  type="button"
                  aria-label="logout"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="logout"
                >
                  <i className="ti ti-power fs-6" />
                </button>
              </div>
            </div>
            {/* End Sidebar navigation */}
          </div>
          {/* End Sidebar scroll*/}
        </aside>
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
                <li className="nav-item d-none d-lg-block">
                  <a
                    className="nav-link nav-icon-hover"
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="ti ti-search" />
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
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <div className="d-flex align-items-center justify-content-between">
                  <a
                    href="javascript:void(0)"
                    className="nav-link d-flex d-lg-none align-items-center justify-content-center"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobilenavbar"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    <i className="ti ti-align-justified fs-7" />
                  </a>
                  <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link nav-icon-hover"
                        href="javascript:void(0)"
                        id="drop2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-flag-en.svg"
                          alt=""
                          className="rounded-circle object-fit-cover round-20"
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                        aria-labelledby="drop2"
                      >
                        <div className="message-body" data-simplebar="">
                          <a
                            href="javascript:void(0)"
                            className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                          >
                            <div className="position-relative">
                              <img
                                src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-flag-en.svg"
                                alt=""
                                className="rounded-circle object-fit-cover round-20"
                              />
                            </div>
                            <p className="mb-0 fs-3">English (UK)</p>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                          >
                            <div className="position-relative">
                              <img
                                src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-flag-cn.svg"
                                alt=""
                                className="rounded-circle object-fit-cover round-20"
                              />
                            </div>
                            <p className="mb-0 fs-3">中国人 (Chinese)</p>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                          >
                            <div className="position-relative">
                              <img
                                src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-flag-fr.svg"
                                alt=""
                                className="rounded-circle object-fit-cover round-20"
                              />
                            </div>
                            <p className="mb-0 fs-3">français (French)</p>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item"
                          >
                            <div className="position-relative">
                              <img
                                src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-flag-sa.svg"
                                alt=""
                                className="rounded-circle object-fit-cover round-20"
                              />
                            </div>
                            <p className="mb-0 fs-3">عربي (Arabic)</p>
                          </a>
                        </div>
                      </div>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link pe-0"
                        href="javascript:void(0)"
                        id="drop1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="d-flex align-items-center">
                          <div className="user-profile-img">
                            <img
                              src="/images/profile/user-1.jpg"
                              className="rounded-circle"
                              width={35}
                              height={35}
                              alt=""
                            />
                          </div>
                        </div>
                      </a>
                      <div
                        className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                        aria-labelledby="drop1"
                      >
                        <div
                          className="profile-dropdown position-relative"
                          data-simplebar=""
                        >
                          <div className="py-3 px-7 pb-0">
                            <h5 className="mb-0 fs-5 fw-semibold">
                              User Profile
                            </h5>
                          </div>
                          <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                            <img
                              src="/images/profile/user-1.jpg"
                              className="rounded-circle"
                              width={80}
                              height={80}
                              alt=""
                            />
                            <div className="ms-3">
                              <h5 className="mb-1 fs-3">Mathew Anderson</h5>
                              <span className="mb-1 d-block text-dark">
                                Designer
                              </span>
                              <p className="mb-0 d-flex text-dark align-items-center gap-2">
                                <i className="ti ti-mail fs-4" />{" "}
                                info@modernize.com
                              </p>
                            </div>
                          </div>
                          <div className="message-body">
                            <a
                              href="page-user-profile.html"
                              className="py-8 px-7 mt-8 d-flex align-items-center"
                            >
                              <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                                <img
                                  src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-account.svg"
                                  alt=""
                                  width={24}
                                  height={24}
                                />
                              </span>
                              <div className="w-75 d-inline-block v-middle ps-3">
                                <h6 className="mb-1 bg-hover-primary fw-semibold">
                                  {" "}
                                  My Profile{" "}
                                </h6>
                                <span className="d-block text-dark">
                                  Account Settings
                                </span>
                              </div>
                            </a>
                            <a
                              href="app-email.html"
                              className="py-8 px-7 d-flex align-items-center"
                            >
                              <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                                <img
                                  src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-inbox.svg"
                                  alt=""
                                  width={24}
                                  height={24}
                                />
                              </span>
                              <div className="w-75 d-inline-block v-middle ps-3">
                                <h6 className="mb-1 bg-hover-primary fw-semibold">
                                  My Inbox
                                </h6>
                                <span className="d-block text-dark">
                                  Messages &amp; Emails
                                </span>
                              </div>
                            </a>
                            <a
                              href="app-notes.html"
                              className="py-8 px-7 d-flex align-items-center"
                            >
                              <span className="d-flex align-items-center justify-content-center bg-light rounded-1 p-6">
                                <img
                                  src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-tasks.svg"
                                  alt=""
                                  width={24}
                                  height={24}
                                />
                              </span>
                              <div className="w-75 d-inline-block v-middle ps-3">
                                <h6 className="mb-1 bg-hover-primary fw-semibold">
                                  My Task
                                </h6>
                                <span className="d-block text-dark">
                                  To-do and Daily Tasks
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="d-grid py-4 px-7 pt-8">
                            <div className="upgrade-plan bg-light-primary position-relative overflow-hidden rounded-4 p-4 mb-9">
                              <div className="row">
                                <div className="col-6">
                                  <h5 className="fs-4 mb-3 w-50 fw-semibold text-dark">
                                    Unlimited Access
                                  </h5>
                                  <button className="btn btn-primary text-white">
                                    Upgrade
                                  </button>
                                </div>
                                <div className="col-6">
                                  <div className="m-n4">
                                    <img
                                      src="/images/backgrounds/unlimited-bg.png"
                                      alt=""
                                      className="w-100"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
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

      {/*  Mobilenavbar */}
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex={-1}
        id="mobilenavbar"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <nav className="sidebar-nav scroll-sidebar">
          <div className="offcanvas-header justify-content-between">
            <img
              src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/favicon.ico"
              alt=""
              className="img-fluid"
            />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div
            className="offcanvas-body profile-dropdown mobile-navbar"
            data-simplebar=""
          >
            <ul id="sidebarnav">
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-apps" />
                  </span>
                  <span className="hide-menu">Apps</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level my-3">
                  <li className="sidebar-item py-2">
                    <a href="#" className="d-flex align-items-center">
                      <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                        <img
                          src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-chat.svg"
                          alt=""
                          className="img-fluid"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="d-inline-block">
                        <h6 className="mb-1 bg-hover-primary">
                          Chat Application
                        </h6>
                        <span className="fs-2 d-block fw-normal text-muted">
                          New messages arrived
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="sidebar-item py-2">
                    <a href="#" className="d-flex align-items-center">
                      <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                        <img
                          src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-invoice.svg"
                          alt=""
                          className="img-fluid"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="d-inline-block">
                        <h6 className="mb-1 bg-hover-primary">Invoice App</h6>
                        <span className="fs-2 d-block fw-normal text-muted">
                          Get latest invoice
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="sidebar-item py-2">
                    <a href="#" className="d-flex align-items-center">
                      <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                        <img
                          src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-mobile.svg"
                          alt=""
                          className="img-fluid"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="d-inline-block">
                        <h6 className="mb-1 bg-hover-primary">
                          Contact Application
                        </h6>
                        <span className="fs-2 d-block fw-normal text-muted">
                          2 Unsaved Contacts
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="sidebar-item py-2">
                    <a href="#" className="d-flex align-items-center">
                      <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                        <img
                          src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-message-box.svg"
                          alt=""
                          className="img-fluid"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="d-inline-block">
                        <h6 className="mb-1 bg-hover-primary">Email App</h6>
                        <span className="fs-2 d-block fw-normal text-muted">
                          Get new emails
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="sidebar-item py-2">
                    <a href="#" className="d-flex align-items-center">
                      <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                        <img
                          src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-cart.svg"
                          alt=""
                          className="img-fluid"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="d-inline-block">
                        <h6 className="mb-1 bg-hover-primary">User Profile</h6>
                        <span className="fs-2 d-block fw-normal text-muted">
                          learn more information
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="sidebar-item py-2">
                    <a href="#" className="d-flex align-items-center">
                      <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                        <img
                          src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-date.svg"
                          alt=""
                          className="img-fluid"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="d-inline-block">
                        <h6 className="mb-1 bg-hover-primary">Calendar App</h6>
                        <span className="fs-2 d-block fw-normal text-muted">
                          Get dates
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="sidebar-item py-2">
                    <a href="#" className="d-flex align-items-center">
                      <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                        <img
                          src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-lifebuoy.svg"
                          alt=""
                          className="img-fluid"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="d-inline-block">
                        <h6 className="mb-1 bg-hover-primary">
                          Contact List Table
                        </h6>
                        <span className="fs-2 d-block fw-normal text-muted">
                          Add new contact
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="sidebar-item py-2">
                    <a href="#" className="d-flex align-items-center">
                      <div className="bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                        <img
                          src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/svgs/icon-dd-application.svg"
                          alt=""
                          className="img-fluid"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="d-inline-block">
                        <h6 className="mb-1 bg-hover-primary">
                          Notes Application
                        </h6>
                        <span className="fs-2 d-block fw-normal text-muted">
                          To-do and Daily tasks
                        </span>
                      </div>
                    </a>
                  </li>
                  <ul className="px-8 mt-7 mb-4">
                    <li className="sidebar-item mb-3">
                      <h5 className="fs-5 fw-semibold">Quick Links</h5>
                    </li>
                    <li className="sidebar-item py-2">
                      <a className="fw-semibold text-dark" href="#">
                        Pricing Page
                      </a>
                    </li>
                    <li className="sidebar-item py-2">
                      <a className="fw-semibold text-dark" href="#">
                        Authentication Design
                      </a>
                    </li>
                    <li className="sidebar-item py-2">
                      <a className="fw-semibold text-dark" href="#">
                        Register Now
                      </a>
                    </li>
                    <li className="sidebar-item py-2">
                      <a className="fw-semibold text-dark" href="#">
                        404 Error Page
                      </a>
                    </li>
                    <li className="sidebar-item py-2">
                      <a className="fw-semibold text-dark" href="#">
                        Notes App
                      </a>
                    </li>
                    <li className="sidebar-item py-2">
                      <a className="fw-semibold text-dark" href="#">
                        User Application
                      </a>
                    </li>
                    <li className="sidebar-item py-2">
                      <a className="fw-semibold text-dark" href="#">
                        Account Settings
                      </a>
                    </li>
                  </ul>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="app-chat.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-message-dots" />
                  </span>
                  <span className="hide-menu">Chat</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="app-calendar.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-calendar" />
                  </span>
                  <span className="hide-menu">Calendar</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="app-email.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-mail" />
                  </span>
                  <span className="hide-menu">Email</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/*  Search Bar */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-lg">
          <div className="modal-content rounded-1">
            <div className="modal-header border-bottom">
              <input
                type="search"
                className="form-control fs-3"
                placeholder="Search here"
                id="search"
              />
              <span data-bs-dismiss="modal" className="lh-1 cursor-pointer">
                <i className="ti ti-x fs-5 ms-3" />
              </span>
            </div>
            <div className="modal-body message-body" data-simplebar="">
              <h5 className="mb-0 fs-5 p-1">Quick Page Links</h5>
              <ul className="list mb-0 py-2">
                <li className="p-1 mb-1 bg-hover-light-black">
                  <a href="#">
                    <span className="fs-3 text-black fw-normal d-block">
                      Modern
                    </span>
                    <span className="fs-3 text-muted d-block">
                      /dashboards/dashboard1
                    </span>
                  </a>
                </li>
                <li className="p-1 mb-1 bg-hover-light-black">
                  <a href="#">
                    <span className="fs-3 text-black fw-normal d-block">
                      Dashboard
                    </span>
                    <span className="fs-3 text-muted d-block">
                      /dashboards/dashboard2
                    </span>
                  </a>
                </li>
                <li className="p-1 mb-1 bg-hover-light-black">
                  <a href="#">
                    <span className="fs-3 text-black fw-normal d-block">
                      Contacts
                    </span>
                    <span className="fs-3 text-muted d-block">
                      /apps/contacts
                    </span>
                  </a>
                </li>
                <li className="p-1 mb-1 bg-hover-light-black">
                  <a href="#">
                    <span className="fs-3 text-black fw-normal d-block">
                      Posts
                    </span>
                    <span className="fs-3 text-muted d-block">
                      /apps/blog/posts
                    </span>
                  </a>
                </li>
                <li className="p-1 mb-1 bg-hover-light-black">
                  <a href="#">
                    <span className="fs-3 text-black fw-normal d-block">
                      Detail
                    </span>
                    <span className="fs-3 text-muted d-block">
                      /apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow
                    </span>
                  </a>
                </li>
                <li className="p-1 mb-1 bg-hover-light-black">
                  <a href="#">
                    <span className="fs-3 text-black fw-normal d-block">
                      Shop
                    </span>
                    <span className="fs-3 text-muted d-block">
                      /apps/ecommerce/shop
                    </span>
                  </a>
                </li>
                <li className="p-1 mb-1 bg-hover-light-black">
                  <a href="#">
                    <span className="fs-3 text-black fw-normal d-block">
                      Modern
                    </span>
                    <span className="fs-3 text-muted d-block">
                      /dashboards/dashboard1
                    </span>
                  </a>
                </li>
                <li className="p-1 mb-1 bg-hover-light-black">
                  <a href="#">
                    <span className="fs-3 text-black fw-normal d-block">
                      Dashboard
                    </span>
                    <span className="fs-3 text-muted d-block">
                      /dashboards/dashboard2
                    </span>
                  </a>
                </li>
                <li className="p-1 mb-1 bg-hover-light-black">
                  <a href="#">
                    <span className="fs-3 text-black fw-normal d-block">
                      Contacts
                    </span>
                    <span className="fs-3 text-muted d-block">
                      /apps/contacts
                    </span>
                  </a>
                </li>
                <li className="p-1 mb-1 bg-hover-light-black">
                  <a href="#">
                    <span className="fs-3 text-black fw-normal d-block">
                      Posts
                    </span>
                    <span className="fs-3 text-muted d-block">
                      /apps/blog/posts
                    </span>
                  </a>
                </li>
                <li className="p-1 mb-1 bg-hover-light-black">
                  <a href="#">
                    <span className="fs-3 text-black fw-normal d-block">
                      Detail
                    </span>
                    <span className="fs-3 text-muted d-block">
                      /apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow
                    </span>
                  </a>
                </li>
                <li className="p-1 mb-1 bg-hover-light-black">
                  <a href="#">
                    <span className="fs-3 text-black fw-normal d-block">
                      Shop
                    </span>
                    <span className="fs-3 text-muted d-block">
                      /apps/ecommerce/shop
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
