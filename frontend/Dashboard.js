import React, { useState } from 'react';
import { Layout, Bell, User, Menu, ChevronDown, Globe } from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // قائمة الـ Sidebar حسب طلبك
  const menuItems = [
    "Home", "Reservation", "Customers", "Suppliers", "Hotels", 
    "Accounting", "Management", "Contracts", "All booking", 
    "Transportations", "Tickets", "Tourism files"
  ];

  // بيانات الكروت الملونة
  const cards = [
    { title: "Reservation", color: "bg-blue-500", count: "120" },
    { title: "All Booking", color: "bg-orange-500", count: "450" },
    { title: "Customers", color: "bg-green-500", count: "890" },
    { title: "Management", color: "bg-gray-500", count: "5" },
    { title: "Accounting", color: "bg-emerald-400", count: "Active" },
    { title: "Reports", color: "bg-red-500", count: "View" },
    { title: "Settings", color: "bg-cyan-600", count: "Edit" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-slate-800 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-4 text-xl font-bold border-b border-slate-700 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded"></div> 
          {isSidebarOpen && <span>T.I.B ERP</span>}
        </div>
        <nav className="flex-1 overflow-y-auto mt-4">
          {menuItems.map(item => (
            <div key={item} className="px-6 py-3 hover:bg-slate-700 cursor-pointer flex items-center gap-3">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              {isSidebarOpen && <span className="text-sm">{item}</span>}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
          <div className="flex items-center gap-4 text-gray-600">
            <Menu className="cursor-pointer" onClick={() => setSidebarOpen(!isSidebarOpen)} />
            <div className="flex items-center gap-1 cursor-pointer">
              <Globe size={18} /> <span>Language</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Bell className="text-gray-500 cursor-pointer" />
            <div className="flex items-center gap-3 border-l pl-6">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">Admin Name</p>
                <p className="text-xs text-gray-500 underline cursor-pointer font-semibold">Profile</p>
              </div>
              <div className="w-10 h-10 bg-blue-100 rounded-full border-2 border-blue-500 overflow-hidden">
                <img src="https://via.placeholder.com/40" alt="Admin" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
          
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {cards.map((card, index) => (
              <div key={index} className={`${card.color} text-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform cursor-pointer`}>
                <p className="text-sm opacity-80 uppercase font-bold">{card.title}</p>
                <p className="text-3xl font-extrabold mt-2">{card.count}</p>
              </div>
            ))}
          </div>

          {/* Chart Placeholder */}
          <div className="bg-white p-6 rounded-xl shadow-sm border h-64 flex items-center justify-center">
            <p className="text-gray-400 font-medium">[ Pie Chart: Profit Commission Booking ]</p>
          </div>
        </main>

        {/* Footer (طلبك الخاص) */}
        <footer className="h-12 bg-white border-t flex items-center justify-center text-gray-600 text-sm font-semibold">
          © ÖZCAN ALMAIS 2026 _ All rights reserved
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
