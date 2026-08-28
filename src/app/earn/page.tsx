import MobileDock from "@/components/MobileDock";

export default function EarnPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pb-24">
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
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/15 to-orange-600/5 p-6">
          <p className="text-xs text-white/50 mb-1">Твой баланс</p>
          <h2 className="text-3xl font-bold text-amber-400">1 240</h2>
          <p className="text-sm text-white/40 mt-1">SHIVA Points</p>
          <p className="text-[11px] text-white/30 mt-4">Внутренние баллы. Путь в TON без гарантий ROI.</p>
        </section>

        <div className="space-y-3">
          <h2 className="text-sm font-medium text-white/60 px-1">Как зарабатывать</h2>
          {[
            { title: "Ежедневный вход", desc: "+10 pts каждый день", emoji: "📅" },
            { title: "Выполнить квест", desc: "Задания в Lab", emoji: "🎯" },
            { title: "Рефералы", desc: "3 уровня · dual-sided", emoji: "👥" },
            { title: "Публикация skill", desc: "Комиссия 70/30", emoji: "⚡" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/8">
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center text-lg">{item.emoji}</div>
              <div className="flex-1">
                <h3 className="font-medium text-[15px]">{item.title}</h3>
                <p className="text-xs text-white/45">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MobileDock />
    </main>
  );
}
