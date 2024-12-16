import React from 'react';
import { 
  LayoutDashboard, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package, 
  BarChart3, 
  Settings,
  Building2,
  Truck,
  Store
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: DollarSign, label: 'Accounting', path: '/accounting' },
  { icon: ShoppingCart, label: 'Sales', path: '/sales' },
  { icon: Users, label: 'CRM', path: '/crm' },
  { icon: Package, label: 'Inventory', path: '/inventory' },
  { icon: Building2, label: 'Manufacturing', path: '/manufacturing' },
  { icon: Truck, label: 'Purchase', path: '/purchase' },
  { icon: Store, label: 'E-Commerce', path: '/ecommerce' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed left-0 top-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">ERP System</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}