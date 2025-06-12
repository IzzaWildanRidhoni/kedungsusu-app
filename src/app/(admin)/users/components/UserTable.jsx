// components/UserTable.js
import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import $ from "jquery";

const UserTable = forwardRef((props, ref) => {
  const tableRef = useRef(null);
  const tableInstance = useRef(null);

  const fetchData = async () => {
    const token = Cookies.get("token");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const users = response.data.data;

    if ($.fn.DataTable.isDataTable(tableRef.current)) {
      tableInstance.current.clear().rows.add(users).draw();
    } else {
      tableInstance.current = $(tableRef.current).DataTable({
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
              <button class="btn btn-sm btn-warning edit-btn" data-id="${row.id}">
                  <i class="ti ti-pencil"></i>
              </button>
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
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            alert("Berhasil dihapus.");
            fetchData(); // refresh table after delete
          } catch (err) {
            alert("Gagal menghapus.");
          }
        }
      });

      $(tableRef.current).on("click", ".edit-btn", async function () {
        const id = $(this).data("id");
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/users/${id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          const userData = response.data.data;
          if (props.onEdit) {
            props.onEdit(userData);
          }
        } catch (err) {
          alert("Gagal mengedit.");
        }
      });
    }
  };

  useEffect(() => {
    (async () => {
      await Promise.all([
        import("datatables.net-bs5"),
        import("datatables.net-bs5/css/dataTables.bootstrap5.min.css"),
      ]);
      fetchData();
    })();

    return () => {
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        $(tableRef.current).DataTable().destroy();
      }
    };
  }, []);

  useImperativeHandle(ref, () => ({
    reloadTable: fetchData,
  }));

  return (
    <table
      ref={tableRef}
      className="table table-bordered table-striped"
      style={{ width: "100%" }}
    />
  );
});

export default UserTable;
