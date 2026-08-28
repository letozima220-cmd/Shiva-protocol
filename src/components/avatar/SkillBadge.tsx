// src/components/avatar/SkillBadge.tsx
interface SkillBadgeProps {
  name: string;
  level?: number;
  type?: "skill" | "mcp" | "prompt";
}

export function SkillBadge({ name, level = 1, type = "skill" }: SkillBadgeProps) {
  const typeColors = {
    skill: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    mcp: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    prompt: "bg-green-500/20 text-green-400 border-green-500/30",
  };

  return (
    <div className={`glass rounded-xl px-3 py-1.5 flex items-center gap-2 border ${typeColors[type]}`}>
      <span className="text-sm">{name}</span>
      {level && (
        <span className="text-[10px] text-gray-400 bg-white/5 px-1.5 py-0.5 rounded">
          Lv.{level}
        </span>
      )}
    </div>
  );
}
