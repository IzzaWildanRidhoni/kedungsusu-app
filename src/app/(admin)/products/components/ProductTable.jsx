// components/UserTable.js
import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import $ from "jquery";

const ProductTable = forwardRef((props, ref) => {
  const tableRef = useRef(null);
  const tableInstance = useRef(null);

  const fetchData = async () => {
    const token = Cookies.get("token");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const products = response.data.data;

    if ($.fn.DataTable.isDataTable(tableRef.current)) {
      tableInstance.current.clear().rows.add(products).draw();
    } else {
      tableInstance.current = $(tableRef.current).DataTable({
        data: products,
        columns: [
          { data: "id", title: "No" },
          { data: "name", title: "Name" },
          { data: "description", title: "Description" },
          { data: "price", title: "Price" },
          { data: "image_url", title: "Image" },
          {
            data: null,
            title: "Actions",
            orderable: false,
            searchable: false,
            render: (data, type, row) => `
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
        if (confirm("Yakin ingin menghapus product ini?")) {
          try {
            await axios.delete(
              `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`,
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
            `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          const productData = response.data.data;
          if (props.onEdit) {
            props.onEdit(productData);
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

export default ProductTable;
