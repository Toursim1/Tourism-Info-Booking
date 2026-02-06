import React, { useState } from 'react';

const Login = () => {
  const [role, setRole] = useState('Admin'); // الافتراضي للتجربة

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as ${role}. Permissions: ${role === 'Admin' ? 'Full Access' : 'Read Only'}`);
    // هنا سيتم توجيه المستخدم للـ Dashboard بناءً على صلاحياته
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">T.I.B ERP</h1>
          <p className="text-gray-500 mt-2">Tourism Info Booking Management</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="admin_name" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="w-full mt-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="••••••••" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Login As</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 outline-none"
            >
              <option value="Admin">Admin (Full Control)</option>
              <option value="Manager">Manager (View Only)</option>
            </select>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg">
            Sign In
          </button>
        </form>

        <p className="text-center mt-8 text-xs text-gray-400">
          © ÖZCAN ALMAIS 2026
        </p>
      </div>
    </div>
  );
};

export default Login;
