import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";
import useAuthStore from "../../../stores/authStore";

export default function Sidebar() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
  const router = useRouter();
  const token = Cookies.get("token");

  const { permissions } = useAuthStore();
  const clearAuth = useAuthStore((state) => state.clearAuth);

  // function logout
  const logoutHandler = async () => {
    try {
      await axios.post(
        `${API_URL}/api/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      Cookies.remove("token");

      clearAuth();

      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
      <ul id="sidebarnav">
        {/* Home Section */}
        <li className="nav-small-cap">
          <i className="ti ti-dots nav-small-cap-icon fs-4" />
          <span className="hide-menu">Home</span>
        </li>

        <li className="sidebar-item">
          <Link className="sidebar-link" href="/" aria-expanded="false">
            <span className="d-flex">
              <i className="ti ti-home" />
            </span>
            <span className="hide-menu">Dashboard</span>
          </Link>
        </li>

        {permissions.includes("user.read") && (
          <li className="sidebar-item">
            <Link className="sidebar-link" href="/users" aria-expanded="false">
              <span className="d-flex">
                <i className="ti ti-user" />
              </span>
              <span className="hide-menu">Manage Users</span>
            </Link>
          </li>
        )}

        {permissions.includes("product.read") && (
          <li className="sidebar-item">
            <Link
              className="sidebar-link"
              href="/products"
              aria-expanded="false"
            >
              <span className="d-flex">
                <i className="ti ti-box" />
              </span>
              <span className="hide-menu">Manage Products</span>
            </Link>
          </li>
        )}

        {permissions.includes("order.read") && (
          <li className="sidebar-item">
            <Link className="sidebar-link" href="/orders" aria-expanded="false">
              <span className="d-flex">
                <i className="ti ti-shopping-cart" />
              </span>
              <span className="hide-menu">Manage Orders</span>
            </Link>
          </li>
        )}

        {/* Others Section */}
        <li className="nav-small-cap">
          <i className="ti ti-dots nav-small-cap-icon fs-4" />
          <span className="hide-menu">Others</span>
        </li>

        <li className="sidebar-item">
          <button
            type="button"
            className="sidebar-link btn text-start w-100"
            onClick={logoutHandler}
          >
            <span className="d-flex">
              <i className="ti ti-power" />
            </span>
            <span className="hide-menu">Logout</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
