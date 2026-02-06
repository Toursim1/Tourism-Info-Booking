import React, { useState } from 'react';
import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import { 
  Bell, User, Menu, Globe, Home, Calendar, Users, 
  Briefcase, Hotel, Landmark, Settings, FileText, Bus 
} from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // بيانات الرسم البياني (الأرباح والعمولات)
  const chartData = [
    { name: 'Company Profits', value: 450, color: '#3b82f6' }, // أزرق
    { name: 'Commissions', value: 300, color: '#f97316' },  // برتقالي
    { name: 'Transport', value: 200, color: '#22c55e' },    // أخضر
    { name: 'Others', value: 100, color: '#64748b' },       // رمادي
  ];

  // إعدادات الكروت العلوية
  const cards = [
    { title: "Reservation", color: "bg-blue-500", count: "120", icon: <Calendar size={20}/> },
    { title: "All Booking", color: "bg-orange-500", count: "450", icon: <Briefcase size={20}/> },
    { title: "Customers", color: "bg-green-500", count: "890", icon: <Users size={20}/> },
    { title: "Accounting", color: "bg-emerald-400", count: "Active", icon: <Landmark size={20}/> },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* --- SIDEBAR --- */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-slate-300 transition-all duration-300 flex flex-col shadow-xl`}>
        <div className="p-5 text-white font-bold border-b border-slate-800 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">T</div>
          {isSidebarOpen && <span className="tracking-wider text-lg">T.I.B ERP</span>}
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 custom-scrollbar">
          {[
            {name: "Home", icon: <Home size={20}/>},
            {name: "Reservation", icon: <Calendar size={20}/>},
            {name: "Customers", icon: <Users size={20}/>},
            {name: "Suppliers", icon: <Briefcase size={20}/>},
            {name: "Hotels", icon: <Hotel size={20}/>},
            {name: "Accounting", icon: <Landmark size={20}/>},
            {name: "Management", icon: <Settings size={20}/>},
            {name: "All Booking", icon: <FileText size={20}/>},
            {name: "Transportations", icon: <Bus size={20}/>}
          ].map((item) => (
            <div key={item.name} className="px-6 py-3 hover:bg-slate-800 hover:text-white cursor-pointer flex items-center gap-4 transition-colors">
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
            <Bell className="text-slate-400 cursor-pointer hover:text-blue-600" size={20} />
            <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-800 leading-none">ÖZCAN ALMAIS</p>
                <p className="text-xs text-blue-500 font-semibold mt-1 cursor-pointer hover:underline">Admin Profile</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                ÖA
              </div>
            </div>
          </div>
        </header>

        {/* DASHBOARD BODY */}
        <main className="flex-1 overflow-y-auto p-8 bg-slate-50">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-extrabold text-slate-800">Operational Overview</h2>
            <span className="text-sm text-slate-500 bg-white px-4 py-2 rounded-full border shadow-sm font-medium">
              Feb 6, 2026
            </span>
          </div>
          
          {/* CARDS SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {cards.map((card, index) => (
              <div key={index} className={`${card.color} text-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden group`}>
                <div className="absolute right-[-10px] top-[-10px] opacity-10 group-hover:scale-110 transition-transform">
                    {React.cloneElement(card.icon, { size: 80 })}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider opacity-80">{card.title}</p>
                <p className="text-3xl font-black mt-2">{card.count}</p>
              </div>
            ))}
          </div>

          {/* CHARTS SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold mb-6 text-slate-700 flex items-center gap-2">
                <div className="w-1 h-5 bg-blue-600 rounded-full"></div> Profit & Commission
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={90}
                      paddingAngle={8}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36}/>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Quick Status Section */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-4 text-slate-700">System Status</h3>
                <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm font-medium">Server Status</span>
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-bold uppercase tracking-tighter">Online</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm font-medium">Database Port</span>
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-bold italic">5432</span>
                    </div>
                </div>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="h-14 bg-white border-t flex items-center justify-center text-slate-500 text-sm font-bold tracking-tight shadow-inner">
          © ÖZCAN ALMAIS 2026 _ All rights reserved
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
