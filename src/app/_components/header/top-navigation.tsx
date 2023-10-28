"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItems[] = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "ماموریت و اساسنامه",
    href: "/courses",
  },
  {
    title: "همکاری با ما",
    href: "/blog",
  },
  {
    title: "ارتباط با ما",
    href: "/blog",
  },
  {
    title: "راهنما",
    href: "/blog",
  },
];

const TopNavigation = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-x-8 mr-12">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`dark:hover:text-primary transition-colors pb-2 ${
                isActive &&
                "border-b-2 dark:text-primary dark:border-primary/30"
              }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default TopNavigation;
