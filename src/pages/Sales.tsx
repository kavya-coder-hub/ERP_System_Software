import React, { useState } from 'react';
import SalesOverview from '../components/sales/SalesOverview';
import OrderList from '../components/sales/OrderList';
import CreateOrder from '../components/sales/CreateOrder';

export default function Sales() {
  const [showCreateOrder, setShowCreateOrder] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Management</h1>
          <p className="text-gray-600">Manage your orders and track sales performance</p>
        </div>
        <button
          onClick={() => setShowCreateOrder(!showCreateOrder)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {showCreateOrder ? 'View Orders' : 'Create New Order'}
        </button>
      </div>

      <SalesOverview />
      
      {showCreateOrder ? (
        <CreateOrder />
      ) : (
        <OrderList />
      )}
    </div>
  );
}