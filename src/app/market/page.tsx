import MobileDock from "@/components/MobileDock";

export default function MarketPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pb-24">
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Market</h1>
          <p className="text-[11px] text-white/40">Skills · MCP · Prompts</p>
        </div>
      </header>

      <div className="px-4 pt-5 space-y-5 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Поиск навыков..."
          className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm placeholder:text-white/30 outline-none"
        />

        <div className="flex gap-2 overflow-x-auto pb-1">
          {["Все", "Skills", "MCP", "Prompts"].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap ${
                i === 0 ? "bg-amber-500 text-black font-medium" : "bg-white/5 text-white/60 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {[
            { title: "Web Search Agent", desc: "Поиск в реальном времени", price: "Free", emoji: "🔍" },
            { title: "Code Reviewer", desc: "Анализ и ревью кода", price: "120 pts", emoji: "💻" },
            { title: "Content Writer", desc: "Генерация текстов", price: "80 pts", emoji: "✍️" },
            { title: "Notion Sync", desc: "MCP коннектор Notion", price: "Free", emoji: "📓" },
            { title: "Telegram Bot", desc: "Управление через TG", price: "150 pts", emoji: "🤖" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 flex items-center justify-center text-xl">{item.emoji}</div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[15px] truncate">{item.title}</h3>
                <p className="text-xs text-white/45">{item.desc}</p>
              </div>
              <span className="text-xs font-medium text-amber-400">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      <MobileDock />
    </main>
  );
}
