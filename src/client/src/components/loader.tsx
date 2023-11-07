import React from "react";

function Loader() {
  return (
    <>
      <div className="px-4 pt-3 flex-1 rounded-sm shadow-md w-full sm:w-full animate-pulse h-screen">
        <div className="h-48 w-full rounded-sm mb-5 bg-gray-400">
          <p className="text-center text-sm">Veuillez patienter...</p>
        </div>
        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-250">
          <div className="w-full h-6 rounded bg-gray-200"></div>
          <div className="w-full h-6 rounded bg-gray-300"></div>
          <div className="w-3/4 h-6 rounded bg-gray-600"></div>
        </div>
      </div>
    </>
  );
}

export default Loader;
