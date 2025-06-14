"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const ProductModalForm = ({ onSuccess, editData = null, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // ⏳ Isi form saat editData berubah
  useEffect(() => {
    if (editData) {
      setForm({
        name: editData.name || "",
        description: editData.description || "",
        price: editData.price || "",
        image_url: editData.image_url || "",
      });
      setErrors({});
    } else {
      setForm({ name: "", description: "", price: "", image_url: "" });
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.description) newErrors.description = "Description is required";
    if (!form.price) newErrors.price = "Price is required";
    if (!form.image_url) newErrors.image_url = "Image URL is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    const token = Cookies.get("token");

    try {
      if (editData) {
        await axios.put(`${API_URL}/api/products/${editData.id}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        await axios.post(`${API_URL}/api/products`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }

      setForm({ name: "", description: "", price: "", image_url: "" });
      setErrors({});
      document.getElementById("btn-close").click();

      if (onSuccess) onSuccess();
    } catch (err) {
      if (err.response?.data?.data) {
        setErrors(err.response.data.data); // validasi backend
      } else {
        alert("Error adding product: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal fade"
      id="addProductModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="addProductModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-center">
            <h5 className="modal-title">
              {editData ? "Edit Product" : "Add Product"}
            </h5>
            <button
              type="button"
              id="btn-close"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="description"
                      className={`form-control ${
                        errors.description ? "is-invalid" : ""
                      }`}
                      placeholder="Description"
                      value={form.description}
                      onChange={handleChange}
                    />
                    {errors.description && (
                      <div className="invalid-feedback">{errors.description}</div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="number"
                      name="price"
                      className={`form-control ${
                        errors.price ? "is-invalid" : ""
                      }`}
                      placeholder="Price"
                      value={form.price}
                      onChange={handleChange}
                    />
                    {errors.price && (
                      <div className="invalid-feedback">{errors.price}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="image_url"
                      className={`form-control ${
                        errors.image_url ? "is-invalid" : ""
                      }`}
                      placeholder="Image URL"
                      value={form.image_url}
                      onChange={handleChange}
                    />
                    {errors.image_url && (
                      <div className="invalid-feedback">{errors.image_url}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-4"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  type="button"
                  className="btn btn-danger rounded-pill px-4"
                  data-bs-dismiss="modal"
                >
                  Discard
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModalForm;
