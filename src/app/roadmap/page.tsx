export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Roadmap</h1>
          <p className="text-[11px] text-white/40">План развития SHIVA</p>
        </div>
      </header>

      <div className="px-4 pt-6 space-y-6 max-w-lg mx-auto">
        {/* Timeline */}
        <div className="space-y-4">
          {[
            {
              phase: "P0",
              title: "MVP Live",
              status: "done",
              items: ["Dashboard", "Avatar", "Lab", "Market", "Earn", "Vercel deploy"],
            },
            {
              phase: "P1",
              title: "Core Loop",
              status: "now",
              items: ["Telegram auth", "Real points", "Referrals L1–L3", "Skills buy/publish"],
            },
            {
              phase: "P2",
              title: "Network",
              status: "next",
              items: ["Clans", "Leaderboard", "Social feed", "Connectors OAuth"],
            },
            {
              phase: "P3",
              title: "TON Path",
              status: "later",
              items: ["Points → TON bridge", "Withdraw testnet", "DAO basics"],
            },
          ].map((block) => (
            <div
              key={block.phase}
              className={`rounded-2xl border p-5 ${
                block.status === "done"
                  ? "bg-emerald-500/5 border-emerald-500/20"
                  : block.status === "now"
                  ? "bg-amber-500/10 border-amber-500/30"
                  : "bg-white/5 border-white/8"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    block.status === "done"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : block.status === "now"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-white/10 text-white/40"
                  }`}
                >
                  {block.phase}
                </span>
                <h3 className="font-medium">{block.title}</h3>
                {block.status === "done" && (
                  <span className="ml-auto text-xs text-emerald-400">✓</span>
                )}
                {block.status === "now" && (
                  <span className="ml-auto text-xs text-amber-400">сейчас</span>
                )}
              </div>
              <ul className="space-y-1.5">
                {block.items.map((item) => (
                  <li key={item} className="text-sm text-white/50 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-white/25 pt-2">
          План может меняться. Без обещаний ROI.
        </p>
      </div>

      {/* Bottom dock */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/8 bg-black/70 backdrop-blur-xl">
        <div className="max-w-lg mx-auto flex items-center justify-around py-3 px-2">
          {["Home", "Lab", "Market", "Earn", "Profile"].map((label) => (
            <button
              key={label}
              className={`flex flex-col items-center gap-1 min-w-[56px] ${
                label === "Home" ? "text-amber-400" : "text-white/40"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm ${
                  label === "Home"
                    ? "bg-amber-500/20 border border-amber-500/30"
                    : "bg-white/5"
                }`}
              >
                {label[0]}
              </div>
              <span className="text-[10px]">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}
