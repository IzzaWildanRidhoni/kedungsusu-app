"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Sidebar from "../../../components/layout/Sidebar";
import Headers from "../../../components/layout/Header";

export default function AdminLayout({ children }) {
  const router = useRouter();

  //get token
  const token = Cookies.get("token");

  // ketika token tidak ada, redirect ke login
  useEffect(() => {
    if (!token) {
      router.replace("/login");
    }
  }, []);

  return (
    <>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-theme="blue_theme"
        data-layout="vertical"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <Sidebar />
        <div className="body-wrapper">
          <Headers />
          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </>
  );
}
