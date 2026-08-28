export default function MarketPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Market</h1>
          <p className="text-[11px] text-white/40">Skills · MCP · Prompts</p>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
          <span className="text-amber-400 font-medium">48</span> items
        </div>
      </header>

      <div className="px-4 pt-5 space-y-5 max-w-lg mx-auto">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Поиск навыков..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm placeholder:text-white/30 outline-none focus:border-amber-500/40"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {["Все", "Skills", "MCP", "Prompts", "Workflows"].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap ${
                i === 0
                  ? "bg-amber-500 text-black font-medium"
                  : "bg-white/5 text-white/60 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="space-y-3">
          {[
            { title: "Web Search Agent", desc: "Поиск в реальном времени", price: "Free", emoji: "🔍" },
            { title: "Code Reviewer", desc: "Анализ и ревью кода", price: "120 pts", emoji: "💻" },
            { title: "Content Writer", desc: "Генерация текстов", price: "80 pts", emoji: "✍️" },
            { title: "Notion Sync", desc: "MCP коннектор Notion", price: "Free", emoji: "📓" },
            { title: "Telegram Bot", desc: "Управление через TG", price: "150 pts", emoji: "🤖" },
            { title: "Memory Keeper", desc: "Долгосрочная память", price: "200 pts", emoji: "🧠" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/8 active:bg-white/10 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 flex items-center justify-center text-xl">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[15px] truncate">{item.title}</h3>
                <p className="text-xs text-white/45">{item.desc}</p>
              </div>
              <span className="text-xs font-medium text-amber-400 whitespace-nowrap">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom dock */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/8 bg-black/70 backdrop-blur-xl">
        <div className="max-w-lg mx-auto flex items-center justify-around py-3 px-2">
          {["Home", "Lab", "Market", "Earn", "Profile"].map((label) => (
            <button
              key={label}
              className={`flex flex-col items-center gap-1 min-w-[56px] ${
                label === "Market" ? "text-amber-400" : "text-white/40"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm ${
                  label === "Market"
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
