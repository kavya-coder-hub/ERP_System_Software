import React from 'react';
import { BarChart3, DollarSign, ShoppingBag, Users } from 'lucide-react';
import { salesOrders, customers } from '../../data/mockData';

const calculateMetrics = () => {
  const totalRevenue = salesOrders.reduce((sum, order) => sum + order.total, 0);
  const averageOrderValue = totalRevenue / salesOrders.length;
  
  return {
    totalRevenue,
    averageOrderValue,
    totalOrders: salesOrders.length,
    totalCustomers: customers.length,
  };
};

export default function SalesOverview() {
  const metrics = calculateMetrics();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <DollarSign className="w-6 h-6 text-green-600" />
          </div>
        </div>
        <h3 className="text-gray-600 text-sm">Total Revenue</h3>
        <p className="text-2xl font-bold text-gray-900">
          ${metrics.totalRevenue.toLocaleString()}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <ShoppingBag className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <h3 className="text-gray-600 text-sm">Total Orders</h3>
        <p className="text-2xl font-bold text-gray-900">{metrics.totalOrders}</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
        </div>
        <h3 className="text-gray-600 text-sm">Total Customers</h3>
        <p className="text-2xl font-bold text-gray-900">{metrics.totalCustomers}</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-orange-100 rounded-lg">
            <BarChart3 className="w-6 h-6 text-orange-600" />
          </div>
        </div>
        <h3 className="text-gray-600 text-sm">Average Order Value</h3>
        <p className="text-2xl font-bold text-gray-900">
          ${metrics.averageOrderValue.toLocaleString()}
        </p>
      </div>
    </div>
  );
}