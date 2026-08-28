export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pb-24">
      {/* Top bar */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">SHIVA</h1>
          <p className="text-[11px] text-white/40">Orbit Glass · v0.2</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
            <span className="text-white/50">Points</span>{" "}
            <span className="text-amber-400 font-medium">1 240</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-600" />
        </div>
      </header>

      <div className="px-4 pt-6 space-y-6 max-w-lg mx-auto">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <p className="text-xs text-amber-400/80 font-medium mb-2">Popular Solution</p>
            <h2 className="text-2xl font-bold leading-tight mb-3">
              Optimize<br />Your Metrics
            </h2>
            <p className="text-sm text-white/50 mb-5 max-w-[240px]">
              Управляй агентами, навыками и коннекторами в одном месте
            </p>
            <button className="px-5 py-2.5 rounded-full bg-amber-500 text-black text-sm font-semibold active:scale-95 transition">
              Start Now
            </button>
          </div>
        </section>

        {/* KPI pills */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: "Agents", value: "12" },
            { label: "Skills", value: "48" },
            { label: "Points", value: "1.2k" },
            { label: "Refs", value: "34" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/5 border border-white/8 py-3 text-center"
            >
              <div className="text-base font-semibold text-amber-400">{item.value}</div>
              <div className="text-[10px] text-white/40 mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Main cards */}
        <div className="space-y-3">
          {[
            {
              title: "Avatar Lab",
              desc: "Создай и обучи своего агента",
              emoji: "🧬",
            },
            {
              title: "Skills Market",
              desc: "Каталог навыков и MCP",
              emoji: "⚡",
            },
            {
              title: "Connectors",
              desc: "Подключи внешние сервисы",
              emoji: "🔗",
            },
            {
              title: "Earn & Referrals",
              desc: "Баллы → путь в TON",
              emoji: "💎",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/8 active:bg-white/10 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 flex items-center justify-center text-xl">
                {card.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-[15px]">{card.title}</h3>
                <p className="text-xs text-white/45 mt-0.5">{card.desc}</p>
              </div>
              <div className="text-white/20 text-lg">›</div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[11px] text-white/25 pt-2 pb-6">
          SHIVA Points — внутренние баллы. Путь в TON без гарантий ROI.
        </p>
      </div>

      {/* Bottom dock */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/8 bg-black/70 backdrop-blur-xl">
        <div className="max-w-lg mx-auto flex items-center justify-around py-3 px-2">
          {[
            { label: "Home", active: true },
            { label: "Lab" },
            { label: "Market" },
            { label: "Earn" },
            { label: "Profile" },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex flex-col items-center gap-1 min-w-[56px] ${
                item.active ? "text-amber-400" : "text-white/40"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm ${
                  item.active
                    ? "bg-amber-500/20 border border-amber-500/30"
                    : "bg-white/5"
                }`}
              >
                {item.label[0]}
              </div>
              <span className="text-[10px]">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}
