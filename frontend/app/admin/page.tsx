"use client";

import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  Plus,
  Search,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  Sprout
} from 'lucide-react';

const stats = [
  { label: "Total Revenue", value: "₹4,25,000", change: "+12.5%", positive: true, icon: <BarChart3 className="text-primary" /> },
  { label: "Total Orders", value: "1,245", change: "+5.2%", positive: true, icon: <ShoppingBag className="text-primary" /> },
  { label: "New Customers", value: "482", change: "-2.1%", positive: false, icon: <Users className="text-primary" /> },
  { label: "Active Products", value: "86", change: "+4", positive: true, icon: <Package className="text-primary" /> },
];

const recentOrders = [
  { id: "#ORD-7452", customer: "Rahul Verma", date: "May 10, 2026", amount: "₹1,250", status: "Delivered" },
  { id: "#ORD-7451", customer: "Sita Devi", date: "May 10, 2026", amount: "₹450", status: "Processing" },
  { id: "#ORD-7450", customer: "Karan Johar", date: "May 09, 2026", amount: "₹2,100", status: "Shipped" },
  { id: "#ORD-7449", customer: "Anjali Singh", date: "May 09, 2026", amount: "₹850", status: "Delivered" },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-beige/30 font-body">
      
      {/* Sidebar */}
      <aside className="w-72 bg-primary text-beige p-8 flex flex-col shrink-0">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-bold text-primary text-xl">K</div>
          <span className="text-xl font-bold tracking-tight">Krishi<span className="text-accent">Admin</span></span>
        </div>

        <nav className="flex-grow space-y-2">
          {[
            { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
            { icon: <Package size={20} />, label: "Products" },
            { icon: <ShoppingBag size={20} />, label: "Orders" },
            { icon: <Users size={20} />, label: "Customers" },
            { icon: <BarChart3 size={20} />, label: "Analytics" },
            { icon: <Settings size={20} />, label: "Settings" },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
              item.active ? "bg-accent text-primary shadow-lg" : "hover:bg-white/10"
            }`}>
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-4 px-6 py-4 rounded-2xl font-bold hover:bg-red-500/10 hover:text-red-400 transition-all mt-auto">
          <LogOut size={20} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10 lg:p-14 overflow-y-auto">
        
        {/* Top Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">Welcome back, Admin</h1>
            <p className="text-primary/40 font-medium">Here's what's happening with your farm today.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" size={18} />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="bg-white border-none pl-12 pr-6 py-4 rounded-2xl w-80 shadow-sm focus:ring-2 focus:ring-accent"
              />
            </div>
            <button className="p-4 bg-white rounded-2xl shadow-sm text-primary/60 relative">
              <Bell size={20} />
              <span className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-primary/5">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className={`flex items-center gap-1 text-sm font-bold ${stat.positive ? "text-green-500" : "text-red-500"}`}>
                  {stat.change} {stat.positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                </div>
              </div>
              <p className="text-primary/40 font-bold uppercase tracking-widest text-[10px] mb-2">{stat.label}</p>
              <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Recent Orders */}
          <div className="xl:col-span-2 bg-white p-10 rounded-[40px] shadow-sm border border-primary/5">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-primary">Recent Orders</h2>
              <button className="text-primary font-bold text-sm border-b-2 border-primary">View All</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-bold text-primary/30 uppercase tracking-widest border-b border-primary/5">
                    <th className="pb-6">Order ID</th>
                    <th className="pb-6">Customer</th>
                    <th className="pb-6">Date</th>
                    <th className="pb-6">Amount</th>
                    <th className="pb-6 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="font-medium text-primary">
                  {recentOrders.map((order, i) => (
                    <tr key={i} className="group hover:bg-beige/20 transition-colors">
                      <td className="py-6 font-bold">{order.id}</td>
                      <td className="py-6">{order.customer}</td>
                      <td className="py-6 text-primary/60">{order.date}</td>
                      <td className="py-6 font-bold">{order.amount}</td>
                      <td className="py-6 text-right">
                        <span className={`px-4 py-2 rounded-full text-xs font-bold ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 
                          order.status === 'Processing' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions / Featured Products */}
          <div className="bg-primary p-10 rounded-[40px] shadow-xl text-beige">
            <h2 className="text-2xl font-bold mb-8 text-accent">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-4">
              <button className="w-full bg-white/10 hover:bg-white/20 p-6 rounded-[28px] flex items-center gap-6 transition-all group">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Plus size={24} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg">Add New Product</h4>
                  <p className="text-beige/40 text-xs">Update your farm inventory</p>
                </div>
              </button>

              <button className="w-full bg-white/10 hover:bg-white/20 p-6 rounded-[28px] flex items-center gap-6 transition-all group">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Bell size={24} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg">Push Announcement</h4>
                  <p className="text-beige/40 text-xs">Notify all customers</p>
                </div>
              </button>
            </div>

            <div className="mt-12 p-8 bg-accent/10 border border-accent/20 rounded-[32px]">
              <h4 className="font-bold text-accent mb-4 flex items-center gap-2">
                <Sprout size={18} /> Farm Tip
              </h4>
              <p className="text-sm text-beige/60 leading-relaxed italic">
                "Monsoon is coming. Ensure your drainage systems for the terrace garden clients are checked this week."
              </p>
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}
