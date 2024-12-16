export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive';
  lastOrder?: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
}

export interface SalesOrder {
  id: string;
  customer: Customer;
  orderDate: string;
  status: 'draft' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  items: OrderItem[];
  total: number;
}

export interface OrderItem {
  product: Product;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}