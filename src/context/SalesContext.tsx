import React, { createContext, useContext } from 'react';
import { SalesOrder } from '../types/sales';
import { useSales } from '../hooks/useSales';

interface SalesContextType {
  orders: SalesOrder[];
  createOrder: (order: Omit<SalesOrder, 'id'>) => SalesOrder;
  removeOrder: (orderId: string) => void;
  updateOrder: (orderId: string, updates: Partial<SalesOrder>) => void;
}

const SalesContext = createContext<SalesContextType | undefined>(undefined);

export function SalesProvider({ children }: { children: React.ReactNode }) {
  const salesOperations = useSales();

  return (
    <SalesContext.Provider value={salesOperations}>
      {children}
    </SalesContext.Provider>
  );
}

export function useSalesContext() {
  const context = useContext(SalesContext);
  if (context === undefined) {
    throw new Error('useSalesContext must be used within a SalesProvider');
  }
  return context;
}