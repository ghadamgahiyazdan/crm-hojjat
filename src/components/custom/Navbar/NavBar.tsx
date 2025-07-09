"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/consts/navs";
import useStore from "@/store";
import { logout as LogoutUser } from "@/service";

const NavBar = () => {
  const currentPath = usePathname();
  const { vaildate, set_refresher } = useStore();

  // Find current navigation item based on the current path
  const currentNav = navItems.find((nav) => nav.link === currentPath);

  return (
    <nav className="bg-gray-950 sticky top-0 w-full z-50">
      <div className="relative">
        <div className="h-15 text-yellow-50 grid grid-cols-3 container mx-auto">
          {/* Left Section: Login/Logout */}
          <div className="flex items-center">
            {vaildate ? (
              <Button
                variant="destructive"
                onClick={async () => {
                  await LogoutUser();
                  set_refresher();
                }}
              >
                خروج
              </Button>
            ) : (
              <Link href="/login">
                <Button variant="active"
                className="ml-2 xl:ml-0"
                >ورود</Button>
              </Link>
            )}
          </div>

          {/* Center Section: Title and Current Nav */}
          <div className="flex justify-center items-center">
            {currentPath === "/" ? (
              <h1 className="xl:text-3xl font-bold border-b py-1">همراه کارفرما</h1>
            ) : (
              <h1 className="text-3xl font-bold border-b py-1">
                <Link href="/">
                  <span className="cursor-pointer">همراه کارفرما</span>
                </Link>
                {currentNav && (
                  <>
                    <span className="text-secondary mx-1">-</span>
                    <Link href={currentNav.link}>
                      <span className="text-secondary cursor-pointer">{currentNav.name}</span>
                    </Link>
                  </>
                )}
              </h1>
            )}
          </div>

          {/* Right Section: Navigation Buttons */}
          <div className="flex flex-row-reverse justify-start items-center gap-2">
            {/* Desktop Navigation */}
            <div className="hidden xl:flex gap-2">
              {navItems.map(({ name, link }, index) => (
                <Link href={link} key={index}>
                  <Button variant="default">{name}</Button>
                </Link>
              ))}
            </div>
            
            {/* Mobile Menu Icon */}
            <div className="xl:hidden flex items-center px-4">
              <img src={"side.svg"}/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;