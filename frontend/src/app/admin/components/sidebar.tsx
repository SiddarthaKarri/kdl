

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  isSidebarExpanded: boolean;
  toggleSidebar: () => void;
}

function Sidebar({ isSidebarExpanded, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', icon: '📊', href: '/admin/dashboard', active: pathname === 'admin/dashboard' },
    { name: 'Users', icon: '👥', href: '/admin/users', active: pathname.includes('admin/users') },
    // { name: 'Products', icon: '📦', href: '/admin/products', active: pathname.includes('/admin/products') },
    // { name: 'Orders', icon: '🛒', href: '/dashboard/orders', active: pathname.includes('/dashboard/orders') },
    // { name: 'Analytics', icon: '📈', href: '/dashboard/analytics', active: pathname.includes('/dashboard/analytics') },
    { name: 'Settings', icon: '⚙️', href: '/admin/settings', active: pathname.includes('/admin/settings') },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 bg-white shadow-xl transition-all duration-300 ease-in-out z-20 border-r border-slate-200 pt-16 ${isSidebarExpanded ? 'w-64' : 'w-20'}`}>
      <div className="h-full overflow-y-auto">
        <div className="px-3 py-4">
          <button 
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isSidebarExpanded ? '←' : '→'}
          </button>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center p-2 text-base font-normal rounded-lg transition-colors duration-200 ${
                    item.active 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className={`ml-3 transition-opacity duration-300 ${isSidebarExpanded ? 'opacity-100' : 'opacity-0 hidden'}`}>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;