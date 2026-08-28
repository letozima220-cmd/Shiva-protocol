export default function EarnPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Earn</h1>
          <p className="text-[11px] text-white/40">Points → путь в TON</p>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-xs text-amber-400 font-medium">
          1 240 pts
        </div>
      </header>

      <div className="px-4 pt-6 space-y-6 max-w-lg mx-auto">
        {/* Balance card */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/15 to-orange-600/5 p-6">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl" />
          <p className="text-xs text-white/50 mb-1">Твой баланс</p>
          <h2 className="text-3xl font-bold text-amber-400">1 240</h2>
          <p className="text-sm text-white/40 mt-1">SHIVA Points</p>
          <p className="text-[11px] text-white/30 mt-4">
            Внутренние баллы. Путь в TON без гарантий ROI.
          </p>
        </section>

        {/* Ways to earn */}
        <div className="space-y-3">
          <h2 className="text-sm font-medium text-white/60 px-1">Как зарабатывать</h2>
          {[
            { title: "Ежедневный вход", desc: "+10 pts каждый день", emoji: "📅" },
            { title: "Выполнить квест", desc: "Задания в Lab", emoji: "🎯" },
            { title: "Рефералы", desc: "3 уровня · dual-sided", emoji: "👥" },
            { title: "Публикация skill", desc: "Комиссия 70/30", emoji: "⚡" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/8 active:bg-white/10 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center text-lg">
                {item.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-[15px]">{item.title}</h3>
                <p className="text-xs text-white/45">{item.desc}</p>
              </div>
              <span className="text-white/20">›</span>
            </div>
          ))}
        </div>

        {/* Referral */}
        <section className="rounded-2xl bg-white/5 border border-white/8 p-4">
          <h3 className="font-medium text-sm mb-2">Реферальная ссылка</h3>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-black/40 rounded-xl px-3 py-2.5 text-xs text-white/50 truncate">
              shiva.app/ref/yourcode
            </div>
            <button className="px-4 py-2.5 rounded-xl bg-amber-500 text-black text-xs font-semibold">
              Copy
            </button>
          </div>
        </section>
      </div>

      {/* Bottom dock */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/8 bg-black/70 backdrop-blur-xl">
        <div className="max-w-lg mx-auto flex items-center justify-around py-3 px-2">
          {["Home", "Lab", "Market", "Earn", "Profile"].map((label) => (
            <button
              key={label}
              className={`flex flex-col items-center gap-1 min-w-[56px] ${
                label === "Earn" ? "text-amber-400" : "text-white/40"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm ${
                  label === "Earn"
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
