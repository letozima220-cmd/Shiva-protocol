// src/components/avatar/AgentCard.tsx
"use client";

import { Bot, MoreVertical, Play, Settings } from "lucide-react";

interface AgentCardProps {
  name: string;
  role: string;
  status: "active" | "idle" | "training";
  skills: string[];
  onAction?: (action: string) => void;
}

export function AgentCard({ name, role, status, skills, onAction }: AgentCardProps) {
  const statusColors = {
    active: "bg-green-500",
    idle: "bg-yellow-500",
    training: "bg-purple-500 animate-pulse",
  };

  const statusLabels = {
    active: "Активен",
    idle: "Ожидает",
    training: "Обучение...",
  };

  return (
    <div className="glass rounded-2xl p-4 glass-hover">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl">
            <Bot />
          </div>
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-xs text-gray-400">{role}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${statusColors[status]}`} />
            <span className="text-[10px] text-gray-400">{statusLabels[status]}</span>
          </div>
          <button className="p-1 hover:bg-white/10 rounded-lg transition">
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {skills.map((skill) => (
          <span key={skill} className="text-[10px] px-2 py-0.5 bg-white/5 rounded-full text-gray-300">
            {skill}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <button 
          onClick={() => onAction?.("chat")}
          className="flex-1 py-1.5 glass rounded-lg text-xs font-medium hover:bg-white/10 transition"
        >
          <Play className="w-3.5 h-3.5 inline mr-1" />
          Запустить
        </button>
        <button 
          onClick={() => onAction?.("settings")}
          className="py-1.5 px-3 glass rounded-lg hover:bg-white/10 transition"
        >
          <Settings className="w-3.5 h-3.5 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
