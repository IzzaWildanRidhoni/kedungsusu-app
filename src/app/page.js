"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login"); // hindari flash dengan replace
    } else {
      setIsCheckingAuth(false); // token ditemukan, lanjut render
    }
  }, []);

  if (isCheckingAuth) {
    // tampilkan loading atau kosong agar tidak flicker
    return (
      <>
        <div className="preloader">
          <img
            src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/favicon.ico"
            alt="loader"
            className="lds-ripple img-fluid"
          />
        </div>
        {/* Preloader */}
        <div className="preloader">
          <img
            src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/favicon.ico"
            alt="loader"
            className="lds-ripple img-fluid"
          />
        </div>
      </>
    );
  }

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
            <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
              <ul id="sidebarnav">
                {/* ============================= */}
                {/* Home */}
                {/* ============================= */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Home</span>
                </li>
                {/* =================== */}
                {/* Dashboard */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="index.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-aperture" />
                    </span>
                    <span className="hide-menu">Modern</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="index2.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-shopping-cart" />
                    </span>
                    <span className="hide-menu">eCommerce</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="index3.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-currency-dollar" />
                    </span>
                    <span className="hide-menu">NFT</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="index4.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-cpu" />
                    </span>
                    <span className="hide-menu">Crypto</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="index5.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-activity-heartbeat" />
                    </span>
                    <span className="hide-menu">General</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="index6.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-playlist" />
                    </span>
                    <span className="hide-menu">Music</span>
                  </a>
                </li>
                {/* ============================= */}
                {/* Apps */}
                {/* ============================= */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Apps</span>
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
                    href="apps-kanban.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-layout-kanban" />
                    </span>
                    <span className="hide-menu">Kanban</span>
                  </a>
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
                    href="app-email.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-mail" />
                    </span>
                    <span className="hide-menu">Email</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="app-notes.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-notes" />
                    </span>
                    <span className="hide-menu">Notes</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="app-contact.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-phone" />
                    </span>
                    <span className="hide-menu">Contact Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="app-contact2.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-list-details" />
                    </span>
                    <span className="hide-menu">Contact List</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="app-invoice.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-file-text" />
                    </span>
                    <span className="hide-menu">Invoice</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="page-user-profile.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-user-circle" />
                    </span>
                    <span className="hide-menu">User Profile</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-chart-donut-3" />
                    </span>
                    <span className="hide-menu">Blog</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a href="blog-posts.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Posts</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="blog-detail.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Details</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-basket" />
                    </span>
                    <span className="hide-menu">Ecommerce</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a href="eco-shop.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Shop</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="eco-shop-detail.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Details</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="eco-product-list.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">List</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="eco-checkout.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Checkout</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* ============================= */}
                {/* PAGES */}
                {/* ============================= */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">PAGES</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="page-pricing.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-currency-dollar" />
                    </span>
                    <span className="hide-menu">Pricing</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="page-faq.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-help" />
                    </span>
                    <span className="hide-menu">FAQ</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="page-account-settings.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-user-circle" />
                    </span>
                    <span className="hide-menu">Account Setting</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/landingpage/index.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-app-window" />
                    </span>
                    <span className="hide-menu">Landing Page</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-layout" />
                    </span>
                    <span className="hide-menu">Widgets</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a href="widgets-cards.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Cards</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="widgets-banners.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Banner</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="widgets-charts.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Charts</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="widgets-feeds.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Feed Widgets</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="widgets-apps.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Apps Widgets</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="widgets-data.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Data Widgets</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* ============================= */}
                {/* UI */}
                {/* ============================= */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">UI</span>
                </li>
                {/* =================== */}
                {/* UI Elements */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-layout-grid" />
                    </span>
                    <span className="hide-menu">UI Elements</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a href="ui-accordian.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Accordian</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-badge.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Badge</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-buttons.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Buttons</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-dropdowns.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Dropdowns</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-modals.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Modals</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-tab.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Tab</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="ui-tooltip-popover.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Tooltip &amp; Popover</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-notification.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Notification</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-progressbar.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Progressbar</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-pagination.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Pagination</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-typography.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Typography</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-bootstrap-ui.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bootstrap UI</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-breadcrumb.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Breadcrumb</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-offcanvas.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Offcanvas</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-lists.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Lists</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-grid.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Grid</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-carousel.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Carousel</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-scrollspy.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Scrollspy</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-spinner.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Spinner</span>
                      </a>
                    </li>
                    <li className="sidebar-item mb-3">
                      <a href="ui-link.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Link</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* ============================= */}
                {/* Cards */}
                {/* ============================= */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-cards" />
                    </span>
                    <span className="hide-menu">Cards</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a href="ui-cards.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Basic Cards</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-card-customs.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Custom Cards</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-card-weather.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Weather Cards</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="ui-card-draggable.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Draggable Cards</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* ============================= */}
                {/* Component */}
                {/* ============================= */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-components" />
                    </span>
                    <span className="hide-menu">Component</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="component-sweetalert.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Sweet Alert</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="component-nestable.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Nestable</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="component-noui-slider.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Noui slider</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="component-rating.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Rating</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="component-toastr.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Toastr</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* ============================= */}
                {/* Forms */}
                {/* ============================= */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Forms</span>
                </li>
                {/* =================== */}
                {/* Form Elements */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-file-text" />
                    </span>
                    <span className="hide-menu">Form Elements</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a href="form-inputs.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Forms Input</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="form-input-groups.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Input Groups</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="form-input-grid.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Input Grid</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="form-checkbox-radio.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Checkbox &amp; Radios</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="form-bootstrap-touchspin.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bootstrap Touchspin</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="form-bootstrap-switch.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bootstrap Switch</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="form-select2.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Select2</span>
                      </a>
                    </li>
                    <li className="sidebar-item mb-3">
                      <a href="form-dual-listbox.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Dual Listbox</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* =================== */}
                {/* Form Addons */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-qrcode" />
                    </span>
                    <span className="hide-menu">Form Addons</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a href="form-paginator.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Paginator</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="form-img-cropper.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Image Cropper</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="form-dropzone.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Dropzone</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="form-mask.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Form Mask</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="form-typeahead.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Form Typehead</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* =================== */}
                {/* Form Validation */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-alert-circle" />
                    </span>
                    <span className="hide-menu">Form Validation</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="form-bootstrap-validation.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bootstrap Validation</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="form-custom-validation.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Custom Validation</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* =================== */}
                {/* Form Pickers */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-file-pencil" />
                    </span>
                    <span className="hide-menu">Form Pickers</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="form-picker-colorpicker.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Colorpicker</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="form-picker-datetimepicker.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Datetimepicker</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="form-picker-bootstrap-rangepicker.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bootstrap Rangepicker</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="form-picker-bootstrap-datepicker.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bootstrap Datepicker</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="form-picker-material-datepicker.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Material Datepicker</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* =================== */}
                {/* Form Editor */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-dna" />
                    </span>
                    <span className="hide-menu">Form Editor</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="form-editor-ckeditor.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Ck Editor</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="form-editor-quill.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Quill Editor</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="form-editor-summernote.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Summernote Editor</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="form-editor-tinymce.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Tinymce Edtor</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* =================== */}
                {/* Form Input */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="form-basic.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-archive" />
                    </span>
                    <span className="hide-menu">Basic Form</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="form-vertical.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-box-align-left" />
                    </span>
                    <span className="hide-menu">Form Vertical</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="form-horizontal.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-box-align-bottom" />
                    </span>
                    <span className="hide-menu">Form Horizontal</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="form-actions.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-file-export" />
                    </span>
                    <span className="hide-menu">Form Actions</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="form-row-separator.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-separator-horizontal" />
                    </span>
                    <span className="hide-menu">Row Separator</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="form-bordered.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-border-outer" />
                    </span>
                    <span className="hide-menu">Form Bordered</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="form-detail.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-file-description" />
                    </span>
                    <span className="hide-menu">Form Detail</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="form-striped-row.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-file-analytics" />
                    </span>
                    <span className="hide-menu">Striped Rows</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="form-floating-input.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-file-dots" />
                    </span>
                    <span className="hide-menu">Form Floating Input</span>
                  </a>
                </li>
                {/* =================== */}
                {/* Form Wizard */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="form-wizard.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-files" />
                    </span>
                    <span className="hide-menu">Form Wizard</span>
                  </a>
                </li>
                {/* =================== */}
                {/* Form Repeater */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="form-repeater.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-topology-star-3" />
                    </span>
                    <span className="hide-menu">Form Repeater</span>
                  </a>
                </li>
                {/* ============================= */}
                {/* Tables */}
                {/* ============================= */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Tables</span>
                </li>
                {/* =================== */}
                {/* Bootstrap Table */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-layout-sidebar" />
                    </span>
                    <span className="hide-menu">Bootstrap Table</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a href="table-basic.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Basic Table</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="table-dark-basic.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Dark Basic Table</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="table-sizing.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Sizing Table</span>
                      </a>
                    </li>
                    <li className="sidebar-item mb-3">
                      <a
                        href="table-layout-coloured.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Coloured Table</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* =================== */}
                {/* Datatable */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-air-conditioning-disabled" />
                    </span>
                    <span className="hide-menu">Datatables</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="table-datatable-basic.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Basic Initialisation</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="table-datatable-api.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">API</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="table-datatable-advanced.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">
                          Advanced Initialisation
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* =================== */}
                {/* Table Jsgrid */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="table-jsgrid.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-border-top" />
                    </span>
                    <span className="hide-menu">Table Jsgrid</span>
                  </a>
                </li>
                {/* =================== */}
                {/* Table Responsive */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="table-responsive.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-border-style" />
                    </span>
                    <span className="hide-menu">Table Responsive</span>
                  </a>
                </li>
                {/* =================== */}
                {/* Table Footable */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="table-footable.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-border-none" />
                    </span>
                    <span className="hide-menu">Table Footable</span>
                  </a>
                </li>
                {/* =================== */}
                {/* Table Editable */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="table-editable.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-table-filled" />
                    </span>
                    <span className="hide-menu">Table Editable</span>
                  </a>
                </li>
                {/* =================== */}
                {/* Table Bootstrap */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="table-bootstrap.html"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-border-outer" />
                    </span>
                    <span className="hide-menu">Table Bootstrap</span>
                  </a>
                </li>
                {/* ============================= */}
                {/* Charts */}
                {/* ============================= */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Charts</span>
                </li>
                {/* =================== */}
                {/* Apex Chart */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-chart-pie" />
                    </span>
                    <span className="hide-menu">Apex Charts</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a href="chart-apex-line.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Line Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="chart-apex-area.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Area Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="chart-apex-bar.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Bar Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="chart-apex-pie.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Pie Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="chart-apex-radial.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Radial Chart</span>
                      </a>
                    </li>
                    <li className="sidebar-item mb-3">
                      <a href="chart-apex-radar.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Radar Chart</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* ============================= */}
                {/* Sample Pages */}
                {/* ============================= */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Sample Pages</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-file" />
                    </span>
                    <span className="hide-menu">Sample Pages</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a href="pages-animation.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Animation</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="pages-search-result.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Search Result</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="pages-gallery.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Gallery</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="pages-treeview.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Treeview</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="pages-block-ui.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Block-Ui</span>
                      </a>
                    </li>
                    <li className="sidebar-item mb-3">
                      <a
                        href="pages-session-timeout.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Session Timeout</span>
                      </a>
                    </li>
                  </ul>
                </li>
                {/* ============================= */}
                {/* Icons */}
                {/* ============================= */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Icons</span>
                </li>
                {/* =================== */}
                {/* Tabler Icon */}
                {/* =================== */}
                <li className="sidebar-item">
                  <a
                    className="sidebar-link sidebar-link"
                    href="icon-tabler.html"
                    aria-expanded="false"
                  >
                    <span className="rounded-3">
                      <i className="ti ti-archive" />
                    </span>
                    <span className="hide-menu">Tabler Icon</span>
                  </a>
                </li>
                {/* =================== */}
                {/* AUTH */}
                {/* =================== */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">AUTH</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link sidebar-link"
                    href="authentication-error.html"
                    aria-expanded="false"
                  >
                    <span className="rounded-3">
                      <i className="ti ti-alert-circle" />
                    </span>
                    <span className="hide-menu">Error</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-login" />
                    </span>
                    <span className="hide-menu">Login</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="authentication-login.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Side Login</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="authentication-login2.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Boxed Login</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-user-plus" />
                    </span>
                    <span className="hide-menu">Register</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="authentication-register.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Side Register</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="authentication-register2.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Boxed Register</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-rotate" />
                    </span>
                    <span className="hide-menu">Forgot Password</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="authentication-forgot-password.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Side Forgot Password</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="authentication-forgot-password2.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Boxed Forgot Password</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-zoom-code" />
                    </span>
                    <span className="hide-menu">Two Steps</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a
                        href="authentication-two-steps.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Side Two Steps</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        href="authentication-two-steps2.html"
                        className="sidebar-link"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Boxed Two Steps</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link sidebar-link"
                    href="authentication-maintenance.html"
                    aria-expanded="false"
                  >
                    <span className="rounded-3">
                      <i className="ti ti-settings" />
                    </span>
                    <span className="hide-menu">Maintenance</span>
                  </a>
                </li>
                {/* ============================= */}
                {/* OTHER */}
                {/* ============================= */}
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">OTHER</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-box-multiple" />
                    </span>
                    <span className="hide-menu">Menu Level</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level">
                    <li className="sidebar-item">
                      <a href="chart-apex-line.html" className="sidebar-link">
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Level 1</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a
                        className="sidebar-link has-arrow"
                        href="#"
                        aria-expanded="false"
                      >
                        <div className="round-16 d-flex align-items-center justify-content-center">
                          <i className="ti ti-circle" />
                        </div>
                        <span className="hide-menu">Level 1.1</span>
                      </a>
                      <ul aria-expanded="false" className="collapse two-level">
                        <li className="sidebar-item">
                          <a
                            href="chart-apex-line.html"
                            className="sidebar-link"
                          >
                            <div className="round-16 d-flex align-items-center justify-content-center">
                              <i className="ti ti-circle" />
                            </div>
                            <span className="hide-menu">Level 2</span>
                          </a>
                        </li>
                        <li className="sidebar-item">
                          <a
                            className="sidebar-link has-arrow"
                            href="#"
                            aria-expanded="false"
                          >
                            <div className="round-16 d-flex align-items-center justify-content-center">
                              <i className="ti ti-circle" />
                            </div>
                            <span className="hide-menu">Level 2.1</span>
                          </a>
                          <ul
                            aria-expanded="false"
                            className="collapse three-level"
                          >
                            <li className="sidebar-item">
                              <a
                                href="chart-apex-line.html"
                                className="sidebar-link"
                              >
                                <div className="round-16 d-flex align-items-center justify-content-center">
                                  <i className="ti ti-circle" />
                                </div>
                                <span className="hide-menu">Level 3</span>
                              </a>
                            </li>
                            <li className="sidebar-item">
                              <a
                                href="chart-apex-area.html"
                                className="sidebar-link"
                              >
                                <div className="round-16 d-flex align-items-center justify-content-center">
                                  <i className="ti ti-circle" />
                                </div>
                                <span className="hide-menu">Level 3.1</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link link-disabled"
                    href="#"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-ban" />
                    </span>
                    <span className="hide-menu">Disabled</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a className="sidebar-link" href="#" aria-expanded="false">
                    <span className="d-flex">
                      <i className="ti ti-star" />
                    </span>
                    <div className="lh-base">
                      <span className="hide-menu">SubCaption</span>
                      <span className="hide-menu fs-2">
                        This is the sutitle
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link justify-content-between"
                    href="#"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <span className="d-flex">
                        <i className="ti ti-award" />
                      </span>
                      <span className="hide-menu">Chip</span>
                    </div>
                    <div className="hide-menu">
                      <span className="badge rounded-circle bg-primary d-flex align-items-center justify-content-center round-20 p-0">
                        9
                      </span>
                    </div>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link justify-content-between"
                    href="#"
                    aria-expanded="false"
                  >
                    <div className="d-flex align-items-center gap-3">
                      <span className="d-flex">
                        <i className="ti ti-mood-smile" />
                      </span>
                      <span className="hide-menu">Outlined</span>
                    </div>
                    <span className="hide-menu badge rounded-pill border border-primary text-primary fs-2 py-1 px-2">
                      Outline
                    </span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="https://google.com/"
                    aria-expanded="false"
                  >
                    <span className="d-flex">
                      <i className="ti ti-star" />
                    </span>
                    <span className="hide-menu">External Link</span>
                  </a>
                </li>
              </ul>
              <div className="unlimited-access hide-menu bg-light-primary position-relative my-7 rounded">
                <div className="d-flex">
                  <div className="unlimited-access-title">
                    <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">
                      Unlimited Access
                    </h6>
                    <button className="btn btn-primary fs-2 fw-semibold lh-sm">
                      Signup
                    </button>
                  </div>
                  <div className="unlimited-access-img">
                    <img
                      src="/images/backgrounds/rocket.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </nav>
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
                <li className="nav-item dropdown hover-dd d-none d-lg-block">
                  <a
                    className="nav-link"
                    href="javascript:void(0)"
                    data-bs-toggle="dropdown"
                  >
                    Apps
                    <span className="mt-1">
                      <i className="ti ti-chevron-down" />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0">
                    <div className="row">
                      <div className="col-8">
                        <div className=" ps-7 pt-7">
                          <div className="border-bottom">
                            <div className="row">
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="app-chat.html"
                                    className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                  >
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
                                      <h6 className="mb-1 fw-semibold bg-hover-primary">
                                        Chat Application
                                      </h6>
                                      <span className="fs-2 d-block text-dark">
                                        New messages arrived
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="app-invoice.html"
                                    className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                  >
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
                                      <h6 className="mb-1 fw-semibold bg-hover-primary">
                                        Invoice App
                                      </h6>
                                      <span className="fs-2 d-block text-dark">
                                        Get latest invoice
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="app-contact2.html"
                                    className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                  >
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
                                      <h6 className="mb-1 fw-semibold bg-hover-primary">
                                        Contact Application
                                      </h6>
                                      <span className="fs-2 d-block text-dark">
                                        2 Unsaved Contacts
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="app-email.html"
                                    className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                  >
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
                                      <h6 className="mb-1 fw-semibold bg-hover-primary">
                                        Email App
                                      </h6>
                                      <span className="fs-2 d-block text-dark">
                                        Get new emails
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="page-user-profile.html"
                                    className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                  >
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
                                      <h6 className="mb-1 fw-semibold bg-hover-primary">
                                        User Profile
                                      </h6>
                                      <span className="fs-2 d-block text-dark">
                                        learn more information
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="app-calendar.html"
                                    className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                  >
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
                                      <h6 className="mb-1 fw-semibold bg-hover-primary">
                                        Calendar App
                                      </h6>
                                      <span className="fs-2 d-block text-dark">
                                        Get dates
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="app-contact.html"
                                    className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                  >
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
                                      <h6 className="mb-1 fw-semibold bg-hover-primary">
                                        Contact List Table
                                      </h6>
                                      <span className="fs-2 d-block text-dark">
                                        Add new contact
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="app-notes.html"
                                    className="d-flex align-items-center pb-9 position-relative text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                  >
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
                                      <h6 className="mb-1 fw-semibold bg-hover-primary">
                                        Notes Application
                                      </h6>
                                      <span className="fs-2 d-block text-dark">
                                        To-do and Daily tasks
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center py-3">
                            <div className="col-8">
                              <a
                                className="fw-semibold text-dark d-flex align-items-center lh-1 text-decoration-none"
                                href="#"
                              >
                                <i className="ti ti-help fs-6 me-2" />
                                Frequently Asked Questions
                              </a>
                            </div>
                            <div className="col-4">
                              <div className="d-flex justify-content-end pe-4">
                                <button className="btn btn-primary">
                                  Check
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 ms-n4">
                        <div className="position-relative p-7 border-start h-100">
                          <h5 className="fs-5 mb-9 fw-semibold">Quick Links</h5>
                          <ul className="">
                            <li className="mb-3">
                              <a
                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                href="page-pricing.html"
                              >
                                Pricing Page
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                href="authentication-login.html"
                              >
                                Authentication Design
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                href="authentication-register.html"
                              >
                                Register Now
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                href="authentication-error.html"
                              >
                                404 Error Page
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                href="app-notes.html"
                              >
                                Notes App
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                href="page-user-profile.html"
                              >
                                User Application
                              </a>
                            </li>
                            <li className="mb-3">
                              <a
                                className="fw-semibold text-dark bg-hover-primary text-decoration-none text-decoration-none text-decoration-none text-decoration-none"
                                href="page-account-settings.html"
                              >
                                Account Settings
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown-hover d-none d-lg-block">
                  <a className="nav-link" href="app-chat.html">
                    Chat
                  </a>
                </li>
                <li className="nav-item dropdown-hover d-none d-lg-block">
                  <a className="nav-link" href="app-calendar.html">
                    Calendar
                  </a>
                </li>
                <li className="nav-item dropdown-hover d-none d-lg-block">
                  <a className="nav-link" href="app-email.html">
                    Email
                  </a>
                </li>
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
                    <li className="nav-item">
                      <a
                        className="nav-link notify-badge nav-icon-hover"
                        href="javascript:void(0)"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight"
                        aria-controls="offcanvasRight"
                      >
                        <i className="ti ti-basket" />
                        <span className="badge rounded-pill bg-danger fs-2">
                          2
                        </span>
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link nav-icon-hover"
                        href="javascript:void(0)"
                        id="drop2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-bell-ringing" />
                        <div className="notification bg-primary rounded-circle" />
                      </a>
                      <div
                        className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                        aria-labelledby="drop2"
                      >
                        <div className="d-flex align-items-center justify-content-between py-3 px-7">
                          <h5 className="mb-0 fs-5 fw-semibold">
                            Notifications
                          </h5>
                          <span className="badge bg-primary rounded-4 px-3 py-1 lh-sm">
                            5 new
                          </span>
                        </div>
                        <div className="message-body" data-simplebar="">
                          <a
                            href="javascript:void(0)"
                            className="py-6 px-7 d-flex align-items-center dropdown-item"
                          >
                            <span className="me-3">
                              <img
                                src="/images/profile/user-1.jpg"
                                alt="user"
                                className="rounded-circle"
                                width={48}
                                height={48}
                              />
                            </span>
                            <div className="w-75 d-inline-block v-middle">
                              <h6 className="mb-1 fw-semibold">
                                Roman Joined the Team!
                              </h6>
                              <span className="d-block">Congratulate him</span>
                            </div>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="py-6 px-7 d-flex align-items-center dropdown-item"
                          >
                            <span className="me-3">
                              <img
                                src="/images/profile/user-2.jpg"
                                alt="user"
                                className="rounded-circle"
                                width={48}
                                height={48}
                              />
                            </span>
                            <div className="w-75 d-inline-block v-middle">
                              <h6 className="mb-1 fw-semibold">New message</h6>
                              <span className="d-block">
                                Salma sent you new message
                              </span>
                            </div>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="py-6 px-7 d-flex align-items-center dropdown-item"
                          >
                            <span className="me-3">
                              <img
                                src="/images/profile/user-3.jpg"
                                alt="user"
                                className="rounded-circle"
                                width={48}
                                height={48}
                              />
                            </span>
                            <div className="w-75 d-inline-block v-middle">
                              <h6 className="mb-1 fw-semibold">
                                Bianca sent payment
                              </h6>
                              <span className="d-block">
                                Check your earnings
                              </span>
                            </div>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="py-6 px-7 d-flex align-items-center dropdown-item"
                          >
                            <span className="me-3">
                              <img
                                src="/images/profile/user-4.jpg"
                                alt="user"
                                className="rounded-circle"
                                width={48}
                                height={48}
                              />
                            </span>
                            <div className="w-75 d-inline-block v-middle">
                              <h6 className="mb-1 fw-semibold">
                                Jolly completed tasks
                              </h6>
                              <span className="d-block">
                                Assign her new tasks
                              </span>
                            </div>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="py-6 px-7 d-flex align-items-center dropdown-item"
                          >
                            <span className="me-3">
                              <img
                                src="/images/profile/user-5.jpg"
                                alt="user"
                                className="rounded-circle"
                                width={48}
                                height={48}
                              />
                            </span>
                            <div className="w-75 d-inline-block v-middle">
                              <h6 className="mb-1 fw-semibold">
                                John received payment
                              </h6>
                              <span className="d-block">
                                $230 deducted from account
                              </span>
                            </div>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="py-6 px-7 d-flex align-items-center dropdown-item"
                          >
                            <span className="me-3">
                              <img
                                src="/images/profile/user-1.jpg"
                                alt="user"
                                className="rounded-circle"
                                width={48}
                                height={48}
                              />
                            </span>
                            <div className="w-75 d-inline-block v-middle">
                              <h6 className="mb-1 fw-semibold">
                                Roman Joined the Team!
                              </h6>
                              <span className="d-block">Congratulate him</span>
                            </div>
                          </a>
                        </div>
                        <div className="py-6 px-7 mb-1">
                          <button className="btn btn-outline-primary w-100">
                            {" "}
                            See All Notifications{" "}
                          </button>
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
                            <a
                              href="authentication-login.html"
                              className="btn btn-outline-primary"
                            >
                              Log Out
                            </a>
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
              <div className="col-lg-8 d-flex align-items-strech">
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
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-lg-12 col-md-6 col-sm-12">
                    {/* Yearly Breakup */}
                    <div className="card overflow-hidden">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-8">
                            <h5 className="card-title mb-9 fw-semibold">
                              Yearly Breakup
                            </h5>
                            <h4 className="fw-semibold mb-3">$36,358</h4>
                            <div className="d-flex align-items-center mb-3">
                              <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                <i className="ti ti-arrow-up-left text-success" />
                              </span>
                              <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                              <p className="fs-3 mb-0">last year</p>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="me-4">
                                <span className="round-8 bg-primary rounded-circle me-2 d-inline-block" />
                                <span className="fs-2">2023</span>
                              </div>
                              <div>
                                <span className="round-8 bg-light-primary rounded-circle me-2 d-inline-block" />
                                <span className="fs-2">2023</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="d-flex justify-content-center">
                              <div id="breakup" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 col-sm-12">
                    {/* Monthly Earnings */}
                    <div className="card">
                      <div className="card-body">
                        <div className="row alig n-items-start">
                          <div className="col-8">
                            <h5 className="card-title mb-9 fw-semibold">
                              {" "}
                              Monthly Earnings{" "}
                            </h5>
                            <h4 className="fw-semibold mb-3">$6,820</h4>
                            <div className="d-flex align-items-center pb-1">
                              <span className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                                <i className="ti ti-arrow-down-right text-danger" />
                              </span>
                              <p className="text-dark me-1 fs-3 mb-0">+9%</p>
                              <p className="fs-3 mb-0">last year</p>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="d-flex justify-content-end">
                              <div className="text-white bg-secondary rounded-circle p-6 d-flex align-items-center justify-content-center">
                                <i className="ti ti-currency-dollar fs-6" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="earning" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  Row 2 */}
            <div className="row">
              {/* Employee Salary */}
              <div className="col-lg-4 d-flex align-items-strech">
                <div className="card w-100">
                  <div className="card-body">
                    <div>
                      <h5 className="card-title fw-semibold mb-1">
                        Employee Salary
                      </h5>
                      <p className="card-subtitle mb-0">Every month</p>
                      <div id="salary" className="mb-7 pb-8" />
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="bg-light-primary rounded me-8 p-8 d-flex align-items-center justify-content-center">
                            <i className="ti ti-grid-dots text-primary fs-6" />
                          </div>
                          <div>
                            <p className="fs-3 mb-0 fw-normal">Salary</p>
                            <h6 className="fw-semibold text-dark fs-4 mb-0">
                              $36,358
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="bg-light rounded me-8 p-8 d-flex align-items-center justify-content-center">
                            <i className="ti ti-grid-dots text-muted fs-6" />
                          </div>
                          <div>
                            <p className="fs-3 mb-0 fw-normal">Profit</p>
                            <h6 className="fw-semibold text-dark fs-4 mb-0">
                              $5,296
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project */}
              <div className="col-lg-4">
                <div className="row">
                  {/* Customers */}
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body pb-0 mb-xxl-4 pb-1">
                        <p className="mb-1 fs-3">Customers</p>
                        <h4 className="fw-semibold fs-7">36,358</h4>
                        <div className="d-flex align-items-center mb-3">
                          <span className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                            <i className="ti ti-arrow-down-right text-danger" />
                          </span>
                          <p className="text-dark fs-3 mb-0">+9%</p>
                        </div>
                      </div>
                      <div id="customers" />
                    </div>
                  </div>
                  {/* Projects */}
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <p className="mb-1 fs-3">Projects</p>
                        <h4 className="fw-semibold fs-7">78,298</h4>
                        <div className="d-flex align-items-center mb-3">
                          <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                            <i className="ti ti-arrow-up-left text-success" />
                          </span>
                          <p className="text-dark fs-3 mb-0">+9%</p>
                        </div>
                        <div id="projects" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Comming Soon */}
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-7 pb-2">
                      <div className="me-3 pe-1">
                        <img
                          src="/images/profile/user-1.jpg"
                          className="shadow-warning rounded-2"
                          alt=""
                          width={72}
                          height={72}
                        />
                      </div>
                      <div>
                        <h5 className="fw-semibold fs-5 mb-2">
                          {" "}
                          Super awesome, Vue coming soon!{" "}
                        </h5>
                        <p className="fs-3 mb-0">22 March, 2023</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <ul className="hstack mb-0">
                        <li className="ms-n8">
                          <a href="javascript:void(0)" className="me-1">
                            <img
                              src="/images/profile/user-2.jpg"
                              className="rounded-circle border border-2 border-white"
                              width={44}
                              height={44}
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="ms-n8">
                          <a href="javascript:void(0)" className="me-1">
                            <img
                              src="/images/profile/user-3.jpg"
                              className="rounded-circle border border-2 border-white"
                              width={44}
                              height={44}
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="ms-n8">
                          <a href="javascript:void(0)" className="me-1">
                            <img
                              src="/images/profile/user-4.jpg"
                              className="rounded-circle border border-2 border-white"
                              width={44}
                              height={44}
                              alt=""
                            />
                          </a>
                        </li>
                        <li className="ms-n8">
                          <a href="javascript:void(0)" className="me-1">
                            <img
                              src="/images/profile/user-5.jpg"
                              className="rounded-circle border border-2 border-white"
                              width={44}
                              height={44}
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                      <a
                        href="#"
                        className="bg-light rounded py-1 px-8 d-flex align-items-center text-decoration-none"
                      >
                        <i className="ti ti-message-2 fs-6 text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Selling Products */}
              <div className="col-lg-4 d-flex align-items-strech">
                <div className="card bg-primary border-0 w-100">
                  <div className="card-body pb-0">
                    <h5 className="fw-semibold mb-1 text-white card-title">
                      {" "}
                      Best Selling Products{" "}
                    </h5>
                    <p className="fs-3 mb-3 text-white">Overview 2023</p>
                    <div className="text-center mt-3">
                      <img
                        src="/images/backgrounds/piggy.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card mx-2 mb-2 mt-n2">
                    <div className="card-body">
                      <div className="mb-7 pb-1">
                        <div className="d-flex justify-content-between align-items-center mb-6">
                          <div>
                            <h6 className="mb-1 fs-4 fw-semibold">
                              MaterialPro
                            </h6>
                            <p className="fs-3 mb-0">$23,568</p>
                          </div>
                          <div>
                            <span className="badge bg-light-primary text-primary fw-semibold fs-3">
                              55%
                            </span>
                          </div>
                        </div>
                        <div
                          className="progress bg-light-primary"
                          style={{ height: 4 }}
                        >
                          <div
                            className="progress-bar w-50"
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-6">
                          <div>
                            <h6 className="mb-1 fs-4 fw-semibold">
                              Flexy Admin
                            </h6>
                            <p className="fs-3 mb-0">$23,568</p>
                          </div>
                          <div>
                            <span className="badge bg-light-secondary text-secondary fw-bold fs-3">
                              20%
                            </span>
                          </div>
                        </div>
                        <div
                          className="progress bg-light-secondary"
                          style={{ height: 4 }}
                        >
                          <div
                            className="progress-bar bg-secondary w-25"
                            role="progressbar"
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  Row 3 */}
            <div className="row">
              {/* Weekly Stats */}
              <div className="col-lg-4 d-flex align-items-strech">
                <div className="card w-100">
                  <div className="card-body">
                    <h5 className="card-title fw-semibold">Weekly Stats</h5>
                    <p className="card-subtitle mb-0">Average sales</p>
                    <div id="stats" className="my-4" />
                    <div className="position-relative">
                      <div className="d-flex align-items-center justify-content-between mb-7">
                        <div className="d-flex">
                          <div className="p-6 bg-light-primary rounded me-6 d-flex align-items-center justify-content-center">
                            <i className="ti ti-grid-dots text-primary fs-6" />
                          </div>
                          <div>
                            <h6 className="mb-1 fs-4 fw-semibold">Top Sales</h6>
                            <p className="fs-3 mb-0">Johnathan Doe</p>
                          </div>
                        </div>
                        <div className="bg-light-primary badge">
                          <p className="fs-3 text-primary fw-semibold mb-0">
                            +68
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-7">
                        <div className="d-flex">
                          <div className="p-6 bg-light-success rounded me-6 d-flex align-items-center justify-content-center">
                            <i className="ti ti-grid-dots text-success fs-6" />
                          </div>
                          <div>
                            <h6 className="mb-1 fs-4 fw-semibold">
                              Best Seller
                            </h6>
                            <p className="fs-3 mb-0">MaterialPro Admin</p>
                          </div>
                        </div>
                        <div className="bg-light-success badge">
                          <p className="fs-3 text-success fw-semibold mb-0">
                            +68
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                          <div className="p-6 bg-light-danger rounded me-6 d-flex align-items-center justify-content-center">
                            <i className="ti ti-grid-dots text-danger fs-6" />
                          </div>
                          <div>
                            <h6 className="mb-1 fs-4 fw-semibold">
                              Most Commented
                            </h6>
                            <p className="fs-3 mb-0">Ample Admin</p>
                          </div>
                        </div>
                        <div className="bg-light-danger badge">
                          <p className="fs-3 text-danger fw-semibold mb-0">
                            +68
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Top Performers */}
              <div className="col-lg-8 d-flex align-items-strech">
                <div className="card w-100">
                  <div className="card-body">
                    <div className="d-sm-flex d-block align-items-center justify-content-between mb-7">
                      <div className="mb-3 mb-sm-0">
                        <h5 className="card-title fw-semibold">
                          Top Performers
                        </h5>
                        <p className="card-subtitle mb-0">Best Employees</p>
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
                    <div className="table-responsive">
                      <table className="table align-middle text-nowrap mb-0">
                        <thead>
                          <tr className="text-muted fw-semibold">
                            <th scope="col" className="ps-0">
                              Assigned
                            </th>
                            <th scope="col">Project</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Budget</th>
                          </tr>
                        </thead>
                        <tbody className="border-top">
                          <tr>
                            <td className="ps-0">
                              <div className="d-flex align-items-center">
                                <div className="me-2 pe-1">
                                  <img
                                    src="/images/profile/user-1.jpg"
                                    className="rounded-circle"
                                    width={40}
                                    height={40}
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <h6 className="fw-semibold mb-1">
                                    Sunil Joshi
                                  </h6>
                                  <p className="fs-2 mb-0 text-muted">
                                    Web Designer
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0 fs-3">Elite Admin</p>
                            </td>
                            <td>
                              <span className="badge fw-semibold py-1 w-85 bg-light-primary text-primary">
                                Low
                              </span>
                            </td>
                            <td>
                              <p className="fs-3 text-dark mb-0">$3.9K</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <div className="d-flex align-items-center">
                                <div className="me-2 pe-1">
                                  <img
                                    src="/images/profile/user-2.jpg"
                                    className="rounded-circle"
                                    width={40}
                                    height={40}
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <h6 className="fw-semibold mb-1">John Deo</h6>
                                  <p className="fs-2 mb-0 text-muted">
                                    {" "}
                                    Web Developer{" "}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0 fs-3">Flexy Admin</p>
                            </td>
                            <td>
                              <span className="badge fw-semibold py-1 w-85 bg-light-warning text-warning">
                                Medium
                              </span>
                            </td>
                            <td>
                              <p className="fs-3 text-dark mb-0">$24.5K</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <div className="d-flex align-items-center">
                                <div className="me-2 pe-1">
                                  <img
                                    src="/images/profile/user-3.jpg"
                                    className="rounded-circle"
                                    width={40}
                                    height={40}
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <h6 className="fw-semibold mb-1">
                                    Nirav Joshi
                                  </h6>
                                  <p className="fs-2 mb-0 text-muted">
                                    Web Manager
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0 fs-3">Material Pro</p>
                            </td>
                            <td>
                              <span className="badge fw-semibold py-1 w-85 bg-light-info text-info">
                                High
                              </span>
                            </td>
                            <td>
                              <p className="fs-3 text-dark mb-0">$12.8K</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="ps-0">
                              <div className="d-flex align-items-center">
                                <div className="me-2 pe-1">
                                  <img
                                    src="/images/profile/user-4.jpg"
                                    className="rounded-circle"
                                    width={40}
                                    height={40}
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <h6 className="fw-semibold mb-1">
                                    Yuvraj Sheth
                                  </h6>
                                  <p className="fs-2 mb-0 text-muted">
                                    {" "}
                                    Project Manager{" "}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0 fs-3">Xtreme Admin</p>
                            </td>
                            <td>
                              <span className="badge fw-semibold py-1 w-85 bg-light-success text-success">
                                Low
                              </span>
                            </td>
                            <td>
                              <p className="fs-3 text-dark mb-0">$4.8K</p>
                            </td>
                          </tr>
                          <tr>
                            <td className="border-0 ps-0">
                              <div className="d-flex align-items-center">
                                <div className="me-2 pe-1">
                                  <img
                                    src="/images/profile/user-5.jpg"
                                    className="rounded-circle"
                                    width={40}
                                    height={40}
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <h6 className="fw-semibold mb-1">
                                    Micheal Doe
                                  </h6>
                                  <p className="fs-2 mb-0 text-muted">
                                    {" "}
                                    Content Writer{" "}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="border-0">
                              <p className="mb-0 fs-3">
                                Helping Hands WP Theme
                              </p>
                            </td>
                            <td className="border-0">
                              <span className="badge fw-semibold py-1 w-85 bg-light-danger text-danger">
                                High
                              </span>
                            </td>
                            <td className="border-0">
                              <p className="fs-3 text-dark mb-0">$9.3K</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
      {/*  Shopping Cart */}
      <div
        className="offcanvas offcanvas-end shopping-cart"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header py-4">
          <h5
            className="offcanvas-title fs-5 fw-semibold"
            id="offcanvasRightLabel"
          >
            Shopping Cart
          </h5>
          <span className="badge bg-primary rounded-4 px-3 py-1 lh-sm">
            5 new
          </span>
        </div>
        <div className="offcanvas-body h-100 px-4 pt-0" data-simplebar="">
          <ul className="mb-0">
            <li className="pb-7">
              <div className="d-flex align-items-center">
                <img
                  src="/images/products/product-1.jpg"
                  width={95}
                  height={75}
                  className="rounded-1 me-9 flex-shrink-0"
                  alt=""
                />
                <div>
                  <h6 className="mb-1">Supreme toys cooker</h6>
                  <p className="mb-0 text-muted fs-2">Kitchenware Item</p>
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <h6 className="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                    <div className="input-group input-group-sm w-50">
                      <button
                        className="btn border-0 round-20 minus p-0 bg-light-success text-success "
                        type="button"
                        id="add1"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <input
                        type="text"
                        className="form-control round-20 bg-transparent text-muted fs-2 border-0  text-center qty"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="add1"
                        defaultValue={1}
                      />
                      <button
                        className="btn text-success bg-light-success  p-0 round-20 border-0 add"
                        type="button"
                        id="addo2"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="pb-7">
              <div className="d-flex align-items-center">
                <img
                  src="/images/products/product-2.jpg"
                  width={95}
                  height={75}
                  className="rounded-1 me-9 flex-shrink-0"
                  alt=""
                />
                <div>
                  <h6 className="mb-1">Supreme toys cooker</h6>
                  <p className="mb-0 text-muted fs-2">Kitchenware Item</p>
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <h6 className="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                    <div className="input-group input-group-sm w-50">
                      <button
                        className="btn border-0 round-20 minus p-0 bg-light-success text-success "
                        type="button"
                        id="add2"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <input
                        type="text"
                        className="form-control round-20 bg-transparent text-muted fs-2 border-0  text-center qty"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="add2"
                        defaultValue={1}
                      />
                      <button
                        className="btn text-success bg-light-success  p-0 round-20 border-0 add"
                        type="button"
                        id="addon34"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="pb-7">
              <div className="d-flex align-items-center">
                <img
                  src="/images/products/product-3.jpg"
                  width={95}
                  height={75}
                  className="rounded-1 me-9 flex-shrink-0"
                  alt=""
                />
                <div>
                  <h6 className="mb-1">Supreme toys cooker</h6>
                  <p className="mb-0 text-muted fs-2">Kitchenware Item</p>
                  <div className="d-flex align-items-center justify-content-between mt-2">
                    <h6 className="fs-2 fw-semibold mb-0 text-muted">$250</h6>
                    <div className="input-group input-group-sm w-50">
                      <button
                        className="btn border-0 round-20 minus p-0 bg-light-success text-success "
                        type="button"
                        id="add3"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <input
                        type="text"
                        className="form-control round-20 bg-transparent text-muted fs-2 border-0  text-center qty"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="add3"
                        defaultValue={1}
                      />
                      <button
                        className="btn text-success bg-light-success  p-0 round-20 border-0 add"
                        type="button"
                        id="addon3"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="align-bottom">
            <div className="d-flex align-items-center pb-7">
              <span className="text-dark fs-3">Sub Total</span>
              <div className="ms-auto">
                <span className="text-dark fw-semibold fs-3">$2530</span>
              </div>
            </div>
            <div className="d-flex align-items-center pb-7">
              <span className="text-dark fs-3">Total</span>
              <div className="ms-auto">
                <span className="text-dark fw-semibold fs-3">$6830</span>
              </div>
            </div>
            <a
              href="eco-checkout.html"
              className="btn btn-outline-primary w-100"
            >
              Go to shopping cart
            </a>
          </div>
        </div>
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
      {/*  Customizer */}
      <button
        className="btn btn-primary p-3 rounded-circle d-flex align-items-center justify-content-center customizer-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <i
          className="ti ti-settings fs-7"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Settings"
        />
      </button>
      <div
        className="offcanvas offcanvas-end customizer"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        data-simplebar=""
      >
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
          <h4
            className="offcanvas-title fw-semibold"
            id="offcanvasExampleLabel"
          >
            Settings
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body p-4">
          <div className="theme-option pb-4">
            <h6 className="fw-semibold fs-4 mb-1">Theme Option</h6>
            <div className="d-flex align-items-center gap-3 my-3">
              <a
                href="javascript:void(0)"
                onClick={() => toggleTheme("/css/style.min.css")}
                className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 light-theme text-dark"
              >
                <i className="ti ti-brightness-up fs-7 text-primary" />
                <span className="text-dark">Light</span>
              </a>
              <a
                href="javascript:void(0)"
                onClick={() => toggleTheme("/css/style-dark.min.css")}
                className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 dark-theme text-dark"
              >
                <i className="ti ti-moon fs-7 " />
                <span className="text-dark">Dark</span>
              </a>
            </div>
          </div>
          <div className="theme-direction pb-4">
            <h6 className="fw-semibold fs-4 mb-1">Theme Direction</h6>
            <div className="d-flex align-items-center gap-3 my-3">
              <a
                href="index.html"
                className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2"
              >
                <i className="ti ti-text-direction-ltr fs-6 text-primary" />
                <span className="text-dark">LTR</span>
              </a>
              <a
                href="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/html/rtl/index.html"
                className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2"
              >
                <i className="ti ti-text-direction-rtl fs-6 text-dark" />
                <span className="text-dark">RTL</span>
              </a>
            </div>
          </div>
          <div className="theme-colors pb-4">
            <h6 className="fw-semibold fs-4 mb-1">Theme Colors</h6>
            <div className="d-flex align-items-center gap-3 my-3">
              <ul className="list-unstyled mb-0 d-flex gap-3 flex-wrap change-colors">
                <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
                  <a
                    href="javascript:void(0)"
                    className="rounded-circle position-relative d-block customizer-bgcolor skin1-bluetheme-primary active-theme "
                    onClick={() => toggleTheme("/css/style.min.css")}
                    data-color="blue_theme"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="BLUE_THEME"
                  >
                    <i className="ti ti-check text-white d-flex align-items-center justify-content-center fs-5" />
                  </a>
                </li>
                <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
                  <a
                    href="javascript:void(0)"
                    className="rounded-circle position-relative d-block customizer-bgcolor skin2-aquatheme-primary "
                    onClick={() => toggleTheme("/css/style-aqua.min.css")}
                    data-color="aqua_theme"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="AQUA_THEME"
                  >
                    <i className="ti ti-check  text-white d-flex align-items-center justify-content-center fs-5" />
                  </a>
                </li>
                <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
                  <a
                    href="javascript:void(0)"
                    className="rounded-circle position-relative d-block customizer-bgcolor skin3-purpletheme-primary"
                    onClick={() => toggleTheme("/css/style-purple.min.css")}
                    data-color="purple_theme"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="PURPLE_THEME"
                  >
                    <i className="ti ti-check  text-white d-flex align-items-center justify-content-center fs-5" />
                  </a>
                </li>
                <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
                  <a
                    href="javascript:void(0)"
                    className="rounded-circle position-relative d-block customizer-bgcolor skin4-greentheme-primary"
                    onClick={() => toggleTheme("/css/style-green.min.css")}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="GREEN_THEME"
                  >
                    <i className="ti ti-check  text-white d-flex align-items-center justify-content-center fs-5" />
                  </a>
                </li>
                <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
                  <a
                    href="javascript:void(0)"
                    className="rounded-circle position-relative d-block customizer-bgcolor skin5-cyantheme-primary"
                    onClick={() => toggleTheme("/css/style-cyan.min.css")}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="CYAN_THEME"
                  >
                    <i className="ti ti-check  text-white d-flex align-items-center justify-content-center fs-5" />
                  </a>
                </li>
                <li className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center justify-content-center">
                  <a
                    href="javascript:void(0)"
                    className="rounded-circle position-relative d-block customizer-bgcolor skin6-orangetheme-primary"
                    onClick={() => toggleTheme("/css/style-orange.min.css")}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="ORANGE_THEME"
                  >
                    <i className="ti ti-check  text-white d-flex align-items-center justify-content-center fs-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="layout-type pb-4">
            <h6 className="fw-semibold fs-4 mb-1">Layout Type</h6>
            <div className="d-flex align-items-center gap-3 my-3">
              <a
                href="index.html"
                className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2"
              >
                <i className="ti ti-layout-sidebar fs-6 text-primary" />
                <span className="text-dark">Vertical</span>
              </a>
              <a
                href="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/html/horizontal/index.html"
                className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2"
              >
                <i className="ti ti-layout-navbar fs-6 text-dark" />
                <span className="text-dark">Horizontal</span>
              </a>
            </div>
          </div>
          <div className="container-option pb-4">
            <h6 className="fw-semibold fs-4 mb-1">Container Option</h6>
            <div className="d-flex align-items-center gap-3 my-3">
              <a
                href="javascript:void(0)"
                className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 boxed-width text-dark"
              >
                <i className="ti ti-layout-distribute-vertical fs-7 text-primary" />
                <span className="text-dark">Boxed</span>
              </a>
              <a
                href="javascript:void(0)"
                className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 full-width text-dark"
              >
                <i className="ti ti-layout-distribute-horizontal fs-7" />
                <span className="text-dark">Full</span>
              </a>
            </div>
          </div>
          <div className="sidebar-type pb-4">
            <h6 className="fw-semibold fs-4 mb-1">Sidebar Type</h6>
            <div className="d-flex align-items-center gap-3 my-3">
              <a
                href="javascript:void(0)"
                className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 fullsidebar"
              >
                <i className="ti ti-layout-sidebar-right fs-7" />
                <span className="text-dark">Full</span>
              </a>
              <a
                href="javascript:void(0)"
                className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center text-dark sidebartoggler gap-2"
              >
                <i className="ti ti-layout-sidebar fs-7" />
                <span className="text-dark">Collapse</span>
              </a>
            </div>
          </div>
          <div className="card-with pb-4">
            <h6 className="fw-semibold fs-4 mb-1">Card With</h6>
            <div className="d-flex align-items-center gap-3 my-3">
              <a
                href="javascript:void(0)"
                className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 text-dark cardborder"
              >
                <i className="ti ti-border-outer fs-7" />
                <span className="text-dark">Border</span>
              </a>
              <a
                href="javascript:void(0)"
                className="rounded-2 p-9 customizer-box hover-img d-flex align-items-center gap-2 cardshadow"
              >
                <i className="ti ti-border-none fs-7" />
                <span className="text-dark">Shadow</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
