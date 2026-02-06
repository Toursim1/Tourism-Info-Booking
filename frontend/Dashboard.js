import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Bell, Menu, Globe, Home, Calendar, Users, Briefcase, Hotel, Landmark, Settings, FileText, Bus } from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // الرابط الخاص بك الذي استخرجته من Codespaces
  const API_URL = "https://zany-space-doodle-q7r9v9pgv7vrh4rjv-5000.app.github.dev/api/bookings";

  // جلب البيانات من السيرفر عند فتح الصفحة
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  // بيانات الرسم البياني
  const chartData = [
    { name: 'Hotel Profits', value: 450, color: '#3b82f6' },
    { name: 'Commissions', value: 300, color: '#f97316' },
    { name: 'Transport', value: 200, color: '#22c55e' },
    { name: 'Others', value: 100, color: '#64748b' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden text-slate-900">
      
      {/* --- SIDEBAR --- */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-slate-300 transition-all duration-300 flex flex-col shadow-xl`}>
        <div className="p-5 text-white font-bold border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">T</div>
          {isSidebarOpen && <span className="tracking-wider text-lg">T.I.B ERP</span>}
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          {[
            {name: "Home", icon: <Home size={20}/>},
            {name: "Reservation", icon: <Calendar size={20}/>},
            {name: "Customers", icon: <Users size={20}/>},
            {name: "Suppliers", icon: <Briefcase size={20}/>},
            {name: "Hotels", icon: <Hotel size={20}/>},
            {name: "Accounting", icon: <Landmark size={20}/>},
            {name: "Management", icon: <Settings size={20}/>}
          ].map((item) => (
            <div key={item.name} className="px-6 py-3 hover:bg-slate-800 hover:text-white cursor-pointer flex items-center gap-4 transition-all">
              {item.icon}
              {isSidebarOpen && <span className="text-sm font-medium">{item.name}</span>}
            </div>
          ))}
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shadow-sm">
          <div className="flex items-center gap-4 text-slate-600">
            <Menu className="cursor-pointer hover:text-blue-600" onClick={() => setSidebarOpen(!isSidebarOpen)} />
            <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-blue-600">
              <Globe size={18} /> <span className="text-sm font-medium">Language</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Bell className="text-slate-400 cursor-pointer" size={20} />
            <div className="flex items-center gap-3 pl-6 border-l">
              <div className="text-right">
                <p className="text-sm font-bold">ÖZCAN ALMAIS</p>
                <p className="text-xs text-blue-500 font-semibold italic">Administrator</p>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">ÖA</div>
            </div>
          </div>
        </header>

        {/* DASHBOARD BODY */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-slate-800">Operational Overview</h2>
            <div className="text-sm font-bold bg-white px-4 py-2 rounded shadow-sm border border-slate-100">Feb 2026</div>
          </div>
          
          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-blue-500 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all">
              <p className="text-xs font-bold opacity-80 uppercase">Total Bookings</p>
              <p className="text-3xl font-black mt-2">{loading ? "..." : bookings.length}</p>
            </div>
            <div className="bg-orange-500 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all">
              <p className="text-xs font-bold opacity-80 uppercase">Pending Review</p>
              <p className="text-3xl font-black mt-2">12</p>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all">
              <p className="text-xs font-bold opacity-80 uppercase">Active Customers</p>
              <p className="text-3xl font-black mt-2">890</p>
            </div>
            <div className="bg-emerald-400 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all">
              <p className="text-xs font-bold opacity-80 uppercase">Accounting</p>
              <p className="text-3xl font-black mt-2">Active</p>
            </div>
          </div>

          {/* CHARTS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-96 flex flex-col">
              <h3 className="text-lg font-bold mb-6 text-slate-700">Profit & Commission Analysis</h3>
              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {chartData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* RECENT BOOKINGS LIST */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold mb-6 text-slate-700">Live Booking Data (from API)</h3>
              <div className="space-y-4">
                {loading ? <p>Connecting to Server...</p> : bookings.map(b => (
                  <div key={b.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border-l-4 border-blue-500 shadow-sm">
                    <div>
                      <p className="font-bold text-slate-800">{b.hotel}</p>
                      <p className="text-xs text-slate-500 italic">Status: {b.status}</p>
                    </div>
                    <span className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-1 rounded">ID: #{b.id}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="h-12 bg-white border-t flex items-center justify-center text-slate-400 text-xs font-bold">
          © ÖZCAN ALMAIS 2026 _ All rights reserved
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
