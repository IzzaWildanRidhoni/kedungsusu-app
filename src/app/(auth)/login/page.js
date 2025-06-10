"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      const token = response.data.data.token;
      const user = response.data.data.user;

      // Simpan token dan user
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Set token untuk axios default header
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      router.push("/");
    } catch (error) {
      setErrorMsg(
        error?.response?.data?.message || "Terjadi kesalahan. Coba lagi."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <div className="position-relative overflow-hidden radial-gradient min-vh-100">
        <div className="position-relative z-index-5">
          <div className="row">
            <div className="col-xl-7 col-xxl-8">
              <a
                href="index.html"
                className="text-nowrap logo-img d-block px-4 py-9 w-100"
              >
                <Image
                  src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/logos/dark-logo.svg"
                  width={180}
                  height={30}
                  alt=""
                />
              </a>
              <div
                className="d-none d-xl-flex align-items-center justify-content-center"
                style={{ height: "calc(100vh - 80px)" }}
              >
                <Image
                  src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/backgrounds/login-security.svg"
                  alt=""
                  className="img-fluid"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="col-xl-5 col-xxl-4">
              <div className="authentication-login min-vh-100 bg-body row justify-content-center align-items-center p-4">
                <div className="col-sm-8 col-md-6 col-xl-9">
                  <h2 className="mb-3 fs-7 fw-bolder">
                    Welcome to Kedung Susu
                  </h2>
                  <p className="mb-9">
                    Manage your account and explore features
                  </p>

                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Username
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-8 mb-4 rounded-2"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "Sign In"}
                    </button>
                    <div className="d-flex align-items-center justify-content-center">
                      <p className="fs-4 mb-0 fw-medium">
                        Don't have an account?
                      </p>
                      <Link
                        className="text-primary fw-medium ms-2"
                        href="/register"
                      >
                        Create an account
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
