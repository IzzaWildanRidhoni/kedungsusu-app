"use client";

import Link from "next/link";
import ProductModalForm from "./components/ProductModalForm";
import ProductTable from "./components/ProductTable";
import { useRef, useState } from "react";

export default function ProductsPage() {
  const tableRef = useRef(null);
  const [editData, setEditData] = useState(null);

  const handleSuccess = () => {
    if (tableRef.current) {
      tableRef.current.reloadTable();
    }
    setEditData(null);
  };

  const handleEditClick = (product) => {
    setEditData(product);
    const modal = new bootstrap.Modal(document.getElementById("addProductModal"));
    modal.show();
  };
  return (
    <>
      <div className="container-fluid">
        <div className="card bg-light-info shadow-none position-relative overflow-hidden">
          <div className="card-body px-4 py-3">
            <div className="row align-items-center">
              <div className="col-9">
                <h4 className="fw-semibold mb-8">Product Management</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-muted " href="/">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Product Management
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="col-3">
                <div className="text-center mb-n5">
                  <img
                    src="/images/breadcrumb/ChatBc.png"
                    alt=""
                    className="img-fluid mb-n4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Column */}
            <div className="card">
              <div className="border-bottom title-part-padding">
                <div className="row">
                  <div className="col-6">
                    <h4 className="card-title mb-0">Product Management</h4>
                  </div>
                  <div className="col-6 d-flex justify-content-end ">
                    <button
                      id="btn-add-product"
                      className="btn btn-info d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#addProductModal"
                      onClick={() => setEditData(null)}
                    >
                      <i className="ti ti-users text-white me-1 fs-5" /> Add
                      Product
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <ProductTable ref={tableRef} onEdit={handleEditClick} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductModalForm
        onSuccess={handleSuccess}
        editData={editData}
        onClose={() => setEditData(null)}
      />
    </>
  );
}
