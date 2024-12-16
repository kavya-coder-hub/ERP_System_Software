import React, { useState } from 'react';
import { customers, products } from '../../data/mockData';
import { Product, Customer, SalesOrder } from '../../types/sales';
import { useSalesContext } from '../../context/SalesContext';
import { AlertCircle } from 'lucide-react';

export default function CreateOrder() {
  const { createOrder } = useSalesContext();
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [selectedItems, setSelectedItems] = useState<{
    product: Product;
    quantity: number;
  }[]>([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const addItem = () => {
    setSelectedItems([...selectedItems, { product: products[0], quantity: 1 }]);
  };

  const removeItem = (index: number) => {
    setSelectedItems(selectedItems.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    const newItems = [...selectedItems];
    newItems[index].quantity = quantity;
    setSelectedItems(newItems);
  };

  const total = selectedItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleSubmit = (isDraft: boolean = false) => {
    try {
      if (!selectedCustomerId) {
        setError('Please select a customer');
        return;
      }

      if (selectedItems.length === 0) {
        setError('Please add at least one item');
        return;
      }

      const customer = customers.find(c => c.id === selectedCustomerId);
      if (!customer) {
        setError('Invalid customer selected');
        return;
      }

      const orderItems = selectedItems.map(item => ({
        product: item.product,
        quantity: item.quantity,
        unitPrice: item.product.price,
        subtotal: item.product.price * item.quantity,
      }));

      const newOrder: Omit<SalesOrder, 'id'> = {
        customer,
        orderDate: new Date().toISOString().split('T')[0],
        status: isDraft ? 'draft' : 'confirmed',
        items: orderItems,
        total,
      };

      createOrder(newOrder);
      setSuccess('Order created successfully!');
      
      // Reset form
      setSelectedCustomerId('');
      setSelectedItems([]);
      setError('');

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to create order');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-6">Create New Order</h2>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-600">
          <AlertCircle className="w-5 h-5 mr-2" />
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-600">
          {success}
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Customer
          </label>
          <select
            value={selectedCustomerId}
            onChange={(e) => setSelectedCustomerId(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a customer</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name} - {customer.company}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Order Items
            </label>
            <button
              onClick={addItem}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add Item
            </button>
          </div>

          {selectedItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 mb-4">
              <select
                value={item.product.id}
                onChange={(e) => {
                  const newItems = [...selectedItems];
                  newItems[index].product = products.find(
                    (p) => p.id === e.target.value
                  )!;
                  setSelectedItems(newItems);
                }}
                className="flex-1 rounded-lg border border-gray-300 p-2"
              >
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name} - ${product.price}
                  </option>
                ))}
              </select>

              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(index, parseInt(e.target.value) || 1)
                }
                className="w-24 rounded-lg border border-gray-300 p-2"
              />

              <button
                onClick={() => removeItem(index)}
                className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Total:</span>
            <span>${total.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button 
            onClick={() => handleSubmit(true)}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Save as Draft
          </button>
          <button 
            onClick={() => handleSubmit(false)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Create Order
          </button>
        </div>
      </div>
    </div>
  );
}