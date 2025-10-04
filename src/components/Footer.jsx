import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-200 px-4 md:px-16 lg:px-28 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div>
          <h2 className="text-lg font-bold mb-4 text-[#059669]">
            My Word Vault
          </h2>
          <p className="text-gray-600">
            Collect, learn, and master new words every day. WordVault helps you
            grow your vocabulary with ease and consistency.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-[#059669] ">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#works" className="hover:underline text-gray-600">
                How it Works
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4 text-[#059669]">Follow Us</h2>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-[#047857]"
              >
                <FaFacebookF className="text-blue-600" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-[#047857]"
              >
                <FaTwitter className="text-sky-500" /> Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 text-gray-600 hover:text-[#047857]"
              >
                <FaInstagram className="text-rose-500" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 pt-6 text-gray-600 text-center mt-6">
        <p>© 2025 My Word Vault.All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
