import React from 'react';
import { DollarSign, Users, Package, ShoppingCart, TrendingUp, ArrowUpRight } from 'lucide-react';

const stats = [
  { title: 'Total Revenue', value: '$54,239', icon: DollarSign, change: '+14.5%' },
  { title: 'Active Customers', value: '2,543', icon: Users, change: '+7.2%' },
  { title: 'Inventory Items', value: '12,789', icon: Package, change: '+2.3%' },
  { title: 'Sales Orders', value: '432', icon: ShoppingCart, change: '+18.9%' },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back, Admin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <span className="flex items-center text-green-600 text-sm">
                {stat.change}
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </span>
            </div>
            <h3 className="text-gray-600 text-sm">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b">
                <div>
                  <p className="font-medium">New sales order #1234{i}</p>
                  <p className="text-sm text-gray-600">2 hours ago</p>
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            {['Create Invoice', 'Add Product', 'New Customer', 'Generate Report'].map((action) => (
              <button
                key={action}
                className="p-4 text-left rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}