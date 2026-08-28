"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Home", short: "H" },
  { href: "/lab", label: "Lab", short: "L" },
  { href: "/market", label: "Market", short: "M" },
  { href: "/earn", label: "Earn", short: "E" },
  { href: "/avatar", label: "Profile", short: "P" },
];

export default function MobileDock() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/8 bg-black/70 backdrop-blur-xl">
      <div className="max-w-lg mx-auto flex items-center justify-around py-3 px-2">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 min-w-[56px] ${
                active ? "text-amber-400" : "text-white/40"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm ${
                  active
                    ? "bg-amber-500/20 border border-amber-500/30"
                    : "bg-white/5"
                }`}
              >
                {item.short}
              </div>
              <span className="text-[10px]">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
