"use client";

import { useEffect, useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import $ from "jquery";
import Link from "next/link";

export default function UsersPage() {
  const tableRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      const [{ default: dt }] = await Promise.all([
        import("datatables.net-bs5"),
        import("datatables.net-bs5/css/dataTables.bootstrap5.min.css"), // CSS aman
      ]);

      const token = Cookies.get("token");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const users = response.data.data;

      $(tableRef.current).DataTable({
        data: users,
        columns: [
          { data: "id", title: "No" },
          { data: "name", title: "Name" },
          { data: "email", title: "Email" },
          {
            data: "roles",
            title: "Role",
            render: (data) => data?.map((r) => r.name).join(", ") || "-",
          },
          {
            data: null,
            title: "Actions",
            orderable: false,
            searchable: false,
            render: (data, type, row) => `
              <a href="/admin/users/${row.id}" class="btn btn-sm btn-info me-1">
                  <i class="ti ti-eye"></i>
              </a>
              <a href="/admin/users/${row.id}/edit" class="btn btn-sm btn-warning me-1">
                  <i class="ti ti-pencil"></i>
              </a>
              <button class="btn btn-sm btn-danger delete-btn" data-id="${row.id}">
                  <i class="ti ti-trash"></i>
              </button>
            `,
          },
        ],
        destroy: true,
      });

      $(tableRef.current).on("click", ".delete-btn", async function () {
        const id = $(this).data("id");
        if (confirm("Yakin ingin menghapus user ini?")) {
          try {
            await axios.delete(
              `${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            alert("Berhasil dihapus.");
            location.reload();
          } catch (err) {
            alert("Gagal menghapus.");
          }
        }
      });
    };

    init();

    return () => {
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        $(tableRef.current).DataTable().destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="card bg-light-info shadow-none position-relative overflow-hidden">
          <div className="card-body px-4 py-3">
            <div className="row align-items-center">
              <div className="col-9">
                <h4 className="fw-semibold mb-8">Manage Users</h4>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a className="text-muted " href="index.html">
                        Dashboard
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Manage Users
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
                <h4 className="card-title mb-0">User Management</h4>
              </div>
              <div className="card-body">
                <table
                  ref={tableRef}
                  className="table table-bordered table-striped"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
