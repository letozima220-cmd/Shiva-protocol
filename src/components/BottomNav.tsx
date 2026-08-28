// src/components/BottomNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  FlaskConical, 
  Store, 
  Coins, 
  User,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Главная", path: "/" },
  { icon: FlaskConical, label: "Lab", path: "/lab" },
  { icon: Store, label: "Market", path: "/market" },
  { icon: Coins, label: "Earn", path: "/earn" },
  { icon: User, label: "Профиль", path: "/avatar" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0b1e]/80 backdrop-blur-xl border-t border-white/10 px-2 py-1">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = pathname === path || pathname?.startsWith(path + "/");
          return (
            <Link
              key={path}
              href={path}
              className={`
                flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-300 relative
                ${isActive 
                  ? "text-purple-400 scale-105" 
                  : "text-gray-500 hover:text-gray-300"
                }
              `}
            >
              <Icon className={`w-6 h-6 ${isActive ? "drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]" : ""}`} />
              <span className="text-[10px] font-medium">{label}</span>
              {isActive && (
                <span className="absolute -bottom-0.5 w-6 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
