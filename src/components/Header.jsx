import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { MdMenu, MdClose } from "react-icons/md";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };
  return (
    <>
      <nav className="bg-[#059669] sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex justify-between items-center py-5">
          <Link to={"/"}>
            <div className="text-2xl flex items-center gap-2 font-bold">
              <GiNotebook className="text-white" />
              <span className="">MY</span>
              <span className="">WORD</span>
              <span className="text-white">VAULT</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-white font-semibold">
              <li>
                <a href="/" className="hover:text-gray-200 font-medium">
                  HOME
                </a>
              </li>
              <li>
                <Link
                  to={"/#works"}
                  className="hover:text-gray-200 font-medium"
                >
                  HOW IT WORKS
                </Link>
              </li>
              <li>
                <Link to={"/dash"} className="hover:text-gray-200 font-medium">
                  DASH
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            {isLoggedIn ? (
              <>
                <button
                  onClick={logout}
                  className="ml-4 px-6 py-2 border-2 border-green-400 text-white rounded-md hover:bg-white hover:text-[#047857] transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="ml-4 px-6 py-2 bg-[#059669] border-2 border-green-400 hover:border-white text-white rounded-md font-semibold hover:bg-[#047857] transition"
              >
                Login
              </Link>
            )}
          </div>
          {/* mobile */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <MdClose className="text-4xl text-white" />
            ) : (
              <MdMenu className="text-4xl text-white" />
            )}
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-[#047857] px-4 py-4 space-y-4 text-white font-semibold">
            <Link to={"/"} className="block hover:text-gray-200">
              HOME
            </Link>
            <a href="#works" className="block hover:text-gray-200">
              HOW IT WORKS
            </a>
            <Link to={"/dash"} className="hover:text-gray-200 font-medium">
              DASH
            </Link>
            {isLoggedIn ? (
              <>
                <button
                  onClick={logout}
                  className="block px-4 py-2 border-2 border-white rounded-md w-full hover:bg-white hover:text-[#047857] mt-5"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="block px-4 py-2 border-2 border-green-400 rounded-md text-center hover:bg-[#059669] mt-5"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
