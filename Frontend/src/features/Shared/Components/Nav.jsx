import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../../../features/auth/hook/useAuth";

const Nav = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart?.items);
  const { handleLogout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogoutClick = async () => {
    await handleLogout();
    setIsDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav
      className="px-8 lg:px-16 xl:px-24 pt-10 pb-6 flex items-center justify-between border-b"
      style={{ borderColor: "#e4e2df" }}>
      <Link
        to="/"
        className="text-sm font-medium tracking-[0.35em] uppercase hover:opacity-80 transition-opacity"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: "#C9A96E" }}>
        Snitch.
      </Link>
      <div
        className="flex gap-6 items-center text-[10px] uppercase tracking-[0.2em] font-medium"
        style={{ color: "#7A6E63" }}>
        {user ? (
          <>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                style={{ color: "#1b1c1a" }}>
                <span>{user.fullname}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-2 bg-white rounded shadow-lg border"
                  style={{ borderColor: "#e4e2df", minWidth: "150px" }}>
                  {user.role === "seller" && (
                    <Link
                      to="/seller/dashboard"
                      className="block px-4 py-2 text-xs hover:bg-gray-100 transition-colors first:rounded-t"
                      style={{ color: "#1b1c1a" }}
                      onClick={() => setIsDropdownOpen(false)}>
                      Seller Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogoutClick}
                    className="w-full text-left px-4 py-2 text-xs hover:bg-red-50 transition-colors"
                    style={{ color: "#c41e3a" }}>
                    Logout
                  </button>
                </div>
              )}
            </div>
            <Link
              to="/cart"
              className="relative flex items-center hover:opacity-70 transition-opacity"
              style={{ color: "#1b1c1a" }}
              aria-label="Shopping cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartItems?.length > 0 && (
                <span
                  className="absolute -top-2 -right-2 flex items-center justify-center rounded-full text-white"
                  style={{
                    backgroundColor: "#C9A96E",
                    width: "16px",
                    height: "16px",
                    fontSize: "9px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    letterSpacing: 0,
                  }}>
                  {cartItems.length > 9 ? "9+" : cartItems.length}
                </span>
              )}
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="transition-colors hover:text-[#C9A96E]">
              Sign In
            </Link>
            <Link
              to="/register"
              className="transition-colors hover:text-[#C9A96E]">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
