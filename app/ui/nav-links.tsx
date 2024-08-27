"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="mt-8">
      <div className="flex justify-center items-center w-full">
        <Link
          href="/blog"
          className={`link mr-2 ${
            pathname === "/blog" ? "active font-bold" : ""
          }`}
        >
          Blog
        </Link>
        <Link
          href="/project"
          className={`link ${
            pathname === "/project" ? "active font-bold" : ""
          }`}
        >
          Project
        </Link>
      </div>
    </nav>
  );
}
