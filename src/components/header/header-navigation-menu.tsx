"use client";

import type { FC, PropsWithChildren } from "react";
import Link from "next/link";

const HeaderNavigationMenu: FC<PropsWithChildren> = () => {
  // TODO: Implement navigation menu from RADIX
  return (
    <nav className="space-x-4">
      <button className="font-medium text-gray-900">Services</button>
      <button className="font-medium text-gray-900">Projects</button>
      <Link href="/contacts" className="font-medium text-gray-900">
        Contacts
      </Link>
    </nav>
  );
};

export default HeaderNavigationMenu;
