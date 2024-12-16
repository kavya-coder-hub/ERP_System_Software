import { Customer, Product, SalesOrder } from '../types/sales';

export const customers: Customer[] = [
  {
    id: 'C001',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Solutions Inc',
    status: 'active',
    lastOrder: '2024-03-15',
  },
  {
    id: 'C002',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+1 (555) 987-6543',
    company: 'Digital Dynamics',
    status: 'active',
    lastOrder: '2024-03-10',
  },
];

export const products: Product[] = [
  {
    id: 'P001',
    name: 'Enterprise Server',
    sku: 'SRV-001',
    price: 2499.99,
    stock: 50,
    category: 'Hardware',
  },
  {
    id: 'P002',
    name: 'Cloud Storage License',
    sku: 'CSL-001',
    price: 199.99,
    stock: 100,
    category: 'Software',
  },
];

export const salesOrders: SalesOrder[] = [
  {
    id: 'SO001',
    customer: customers[0],
    orderDate: '2024-03-15',
    status: 'confirmed',
    items: [
      {
        product: products[0],
        quantity: 2,
        unitPrice: 2499.99,
        subtotal: 4999.98,
      },
    ],
    total: 4999.98,
  },
];