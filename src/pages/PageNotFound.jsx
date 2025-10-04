import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
      <FaExclamationTriangle className="text-6xl text-green-600 mb-6" />
      <h1 className="text-5xl font-bold text-green-700 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Sorry, the page you are looking for does not exist .
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
