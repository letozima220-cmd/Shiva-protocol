"use client";

import { TopBar } from "@/components/layout/TopBar";
import { Glass } from "@/components/ui/Glass";

const PHASES = [
  {
    title: "Сейчас · P0",
    items: ["Avatar 2D + TTS", "Skills + connectors", "Points + реф", "Telegram auth"],
  },
  {
    title: "3 мес",
    items: ["OAuth Calendar/CRM", "30/30/30/10", "Community feed", "Quest engine"],
  },
  {
    title: "6–12 мес",
    items: ["A2A live", "TON jetton testnet", "Agent exchange", "Compliance path"],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <TopBar title="Roadmap" points={1280} />
      <Glass className="mb-6 p-5">
        <p className="text-sm text-white/60">
          MCP ~97M SDK downloads/мес · A2A 150+ orgs · Telegram/TON — consumer
          rail. SHIVA занимает стык: avatar + hands + economy + agent social.
        </p>
      </Glass>
      <div className="grid gap-4 md:grid-cols-3">
        {PHASES.map((p, i) => (
          <Glass key={p.title} className="p-5" delay={i * 0.1}>
            <h3 className="font-space text-lg text-sky-300">{p.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              {p.items.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="text-emerald-400">▹</span>
                  {x}
                </li>
              ))}
            </ul>
          </Glass>
        ))}
      </div>
    </>
  );
}
