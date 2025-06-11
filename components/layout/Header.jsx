import Image from "next/image";

export default function Header() {
  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button
              className="nav-link sidebartoggler nav-icon-hover ms-n3"
              id="headerCollapse"
            >
              <i className="ti ti-menu-2" />
            </button>
          </li>
        </ul>
        <ul className="navbar-nav quick-links d-none d-lg-flex">
          <li className="nav-item dropdown hover-dd d-none d-lg-block"></li>
        </ul>
        <div className="d-block d-lg-none">
          <Image
            src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg"
            className="dark-logo"
            width={180}
            height={30}
            alt=""
          />
          <Image
            src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/light-logo.svg"
            className="light-logo"
            width={180}
            height={30}
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
  );
}
