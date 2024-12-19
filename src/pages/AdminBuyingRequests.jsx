import React from 'react';

function AdminBuyingRequests() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Admin Buying Requests</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-6 py-3 text-left">Item Name</th>
              <th className="px-6 py-3 text-left">User</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-6 py-3">Laptop</td>
              <td className="px-6 py-3">John Doe</td>
              <td className="px-6 py-3">
                <span className="px-3 py-1 rounded-full bg-yellow-500 text-white">
                  Pending
                </span>
              </td>
              <td className="px-6 py-3 text-center">
                <div className="flex justify-center gap-4">
                  <button 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none">
                    Approve
                  </button>
                  <button 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none">
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-6 py-3">Smartphone</td>
              <td className="px-6 py-3">Jane Smith</td>
              <td className="px-6 py-3">
                <span className="px-3 py-1 rounded-full bg-yellow-500 text-white">
                  Pending
                </span>
              </td>
              <td className="px-6 py-3 text-center">
                <div className="flex justify-center gap-4">
                  <button 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none">
                    Approve
                  </button>
                  <button 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none">
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="px-6 py-3">Headphones</td>
              <td className="px-6 py-3">Alice Brown</td>
              <td className="px-6 py-3">
                <span className="px-3 py-1 rounded-full bg-yellow-500 text-white">
                  Pending
                </span>
              </td>
              <td className="px-6 py-3 text-center">
                <div className="flex justify-center gap-4">
                  <button 
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none">
                    Approve
                  </button>
                  <button 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none">
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminBuyingRequests;
