"use client";

import useStore from '@/store';
import React from 'react';
import { navItems } from "@/consts/navs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const { sidebar, set_sidebar } = useStore();
  
  return (
    <aside 
      className={`${sidebar ? 'translate-x-0' : 'translate-x-full'} 
        fixed h-screen bg-gray-100 top-0 right-0 w-[calc(50vw)] z-50
        transition-transform duration-300 ease-in-out shadow-lg`}
    >
      <div className="p-4 flex flex-col h-full">
        {/* Close button */}
        <div className="flex justify-end">
          <button
            onClick={() => set_sidebar(false)}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="mt-8 flex flex-col space-y-4">
          {navItems.map(({ name, link }, index) => (
            <Link href={link} key={index} onClick={() => set_sidebar(false)}>
              <Button variant="active" className="w-full justify-end">
                {name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;