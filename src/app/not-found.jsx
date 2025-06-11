import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div
        className="page-wrapper py-5"
        id="main-wrapper"
        data-layout="vertical"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <div className="position-relative overflow-hidden min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="col-lg-4">
                <div className="text-center">
                  <Image
                    src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/errorimg.svg"
                    alt=""
                    className="img-fluid"
                    width={300}
                    height={300}
                  />
                  <h1 className="fw-semibold mb-7 fs-9">Opps!!!</h1>
                  <h4 className="fw-semibold mb-7">Halaman tidak ditemukan</h4>
                  <Link className="btn btn-primary" href="/" role="button">
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
