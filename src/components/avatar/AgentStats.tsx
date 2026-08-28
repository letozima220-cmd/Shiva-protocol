// src/components/avatar/AgentStats.tsx
import { Bot, Zap, Trophy, Users } from "lucide-react";

interface AgentStatsProps {
  agents: number;
  skills: number;
  points: number;
  referrals: number;
}

export function AgentStats({ agents, skills, points, referrals }: AgentStatsProps) {
  const stats = [
    { icon: Bot, value: agents, label: "Агентов" },
    { icon: Zap, value: skills, label: "Навыков" },
    { icon: Trophy, value: points, label: "Поинтов" },
    { icon: Users, value: referrals, label: "Рефералов" },
  ];

  return (
    <div className="grid grid-cols-4 gap-3 mb-6">
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={label} className="glass rounded-2xl p-4 text-center glass-hover">
          <Icon className="w-5 h-5 text-purple-400 mx-auto mb-1" />
          <p className="text-xl font-bold">{value}</p>
          <p className="text-[10px] text-gray-400">{label}</p>
        </div>
      ))}
    </div>
  );
}
