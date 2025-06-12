"use client";

import Link from "next/link";
import UserModalForm from "./components/UserModalForm";
import UserTable from "./components/UserTable";
import { useRef } from "react";

export default function UsersPage() {
  const tableRef = useRef(null);

  const handleSuccessAddUser = () => {
    if (tableRef.current) {
      tableRef.current.reloadTable();
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="card bg-light-info shadow-none position-relative overflow-hidden">
          <div className="card-body px-4 py-3">
            <div className="row align-items-center">
              <div className="col-9">
                <h4 className="fw-semibold mb-8">User Management</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-muted " href="/">
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      User Management
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
                    <h4 className="card-title mb-0">User Management</h4>
                  </div>
                  <div className="col-6 d-flex justify-content-end ">
                    <button
                      id="btn-add-user"
                      className="btn btn-info d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#addUserModal"
                    >
                      <i className="ti ti-users text-white me-1 fs-5" /> Add
                      User
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <UserTable ref={tableRef} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserModalForm onSuccess={handleSuccessAddUser} />
    </>
  );
}
