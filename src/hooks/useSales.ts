import { useState } from 'react';
import { SalesOrder, Customer, Product } from '../types/sales';
import { salesOrders as initialOrders } from '../data/mockData';

export function useSales() {
  const [orders, setOrders] = useState<SalesOrder[]>(initialOrders);

  const createOrder = (newOrder: Omit<SalesOrder, 'id'>) => {
    const orderId = `SO${String(orders.length + 1).padStart(3, '0')}`;
    const order: SalesOrder = {
      ...newOrder,
      id: orderId,
    };
    
    setOrders(prevOrders => [...prevOrders, order]);
    return order;
  };

  const removeOrder = (orderId: string) => {
    setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
  };

  const updateOrder = (orderId: string, updates: Partial<SalesOrder>) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, ...updates } : order
      )
    );
  };

  return {
    orders,
    createOrder,
    removeOrder,
    updateOrder,
  };
}