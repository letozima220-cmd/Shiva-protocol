// src/components/avatar/AvatarHeader.tsx
"use client";

import { Sparkles, Edit, Share2 } from "lucide-react";

interface AvatarHeaderProps {
  name: string;
  level: number;
  xp: number;
  maxXp: number;
  avatarUrl?: string;
}

export function AvatarHeader({ name, level, xp, maxXp, avatarUrl }: AvatarHeaderProps) {
  const progress = (xp / maxXp) * 100;

  return (
    <div className="relative overflow-hidden rounded-3xl p-6 mb-6 bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-transparent border border-purple-500/20">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/30 flex items-center justify-center text-4xl backdrop-blur-sm">
              {avatarUrl ? (
                <img src={avatarUrl} alt={name} className="w-full h-full object-cover rounded-2xl" />
              ) : (
                "🤖"
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#0a0b1e] flex items-center justify-center">
              <span className="text-[10px]">✓</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">{name}</h1>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-sm text-gray-400">
              Уровень {level} · {xp} XP
            </p>
            
            <div className="w-48 mt-2">
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-[10px] text-gray-500 mt-0.5">
                {xp} / {maxXp} XP до следующего уровня
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="p-2 glass rounded-xl hover:bg-white/10 transition-colors">
            <Edit className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 glass rounded-xl hover:bg-white/10 transition-colors">
            <Share2 className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
