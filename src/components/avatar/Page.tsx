// src/app/avatar/page.tsx
"use client";

import { useState } from "react";
import { Plus, Search, Grid, List } from "lucide-react";

import { BottomNav } from "@/components/BottomNav";
import { AvatarHeader } from "@/components/avatar/AvatarHeader";
import { AgentStats } from "@/components/avatar/AgentStats";
import { AgentCard } from "@/components/avatar/AgentCard";
import { SkillBadge } from "@/components/avatar/SkillBadge";

export default function AvatarPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const agents = [
    {
      id: 1,
      name: "Shiva Assistant",
      role: "Главный агент",
      status: "active" as const,
      skills: ["Chat", "Memory", "Tools"],
    },
    {
      id: 2,
      name: "Code Reviewer",
      role: "Анализ кода",
      status: "idle" as const,
      skills: ["Python", "JavaScript", "Review"],
    },
    {
      id: 3,
      name: "Content Writer",
      role: "Генерация контента",
      status: "training" as const,
      skills: ["SEO", "Copywriting", "Research"],
    },
  ];

  const mySkills = [
    { name: "Web Search", type: "skill" as const, level: 3 },
    { name: "Notion Sync", type: "mcp" as const, level: 2 },
    { name: "Telegram Bot", type: "prompt" as const, level: 1 },
  ];

  return (
    <div className="min-h-screen pb-24 px-4 pt-4">
      
      <AvatarHeader 
        name="Shiva Agent"
        level={1}
        xp={0}
        maxXp={100}
      />

      <AgentStats 
        agents={12}
        skills={48}
        points={1240}
        referrals={34}
      />

      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">🧠 Мои навыки</h3>
          <button className="text-xs text-purple-400 hover:text-purple-300 transition">
            + Добавить
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {mySkills.map((skill) => (
            <SkillBadge 
              key={skill.name}
              name={skill.name}
              type={skill.type}
              level={skill.level}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">🤖 Мои агенты</h3>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Поиск агентов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass rounded-xl pl-9 pr-3 py-1.5 text-sm w-36 focus:w-48 transition-all focus:outline-none focus:border-purple-500/50"
              />
            </div>
            
            <div className="flex glass rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 px-2.5 transition ${
                  viewMode === "grid" ? "bg-purple-500/20 text-purple-400" : "text-gray-500"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 px-2.5 transition ${
                  viewMode === "list" ? "bg-purple-500/20 text-purple-400" : "text-gray-500"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-3`}>
          {agents.map((agent) => (
            <AgentCard 
              key={agent.id}
              name={agent.name}
              role={agent.role}
              status={agent.status}
              skills={agent.skills}
              onAction={(action) => {
                if (action === "chat") {
                  console.log(`Запуск чата с ${agent.name}`);
                } else if (action === "settings") {
                  console.log(`Настройки ${agent.name}`);
                }
              }}
            />
          ))}
          
          <div className="glass rounded-2xl p-4 border-2 border-dashed border-white/10 hover:border-purple-500/30 transition-all flex items-center justify-center min-h-[140px] cursor-pointer glass-hover">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-2">
                <Plus className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-sm font-medium">Создать агента</p>
              <p className="text-xs text-gray-400">Начните с шаблона</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
