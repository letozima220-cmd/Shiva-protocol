import MobileDock from "@/components/MobileDock";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pb-24">
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Learn</h1>
          <p className="text-[11px] text-white/40">Гайды · Туториалы · Docs</p>
        </div>
      </header>

      <div className="px-4 pt-6 space-y-6 max-w-lg mx-auto">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/15 to-orange-600/5 p-6">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl" />
          <p className="text-xs text-amber-400/80 font-medium mb-2">Начни здесь</p>
          <h2 className="text-xl font-bold mb-2">Что такое SHIVA?</h2>
          <p className="text-sm text-white/50 mb-4">
            Короткий гайд по протоколу, points и пути в TON.
          </p>
          <button className="px-5 py-2.5 rounded-full bg-amber-500 text-black text-sm font-semibold">
            Читать
          </button>
        </section>

        <div className="space-y-3">
          <h2 className="text-sm font-medium text-white/60 px-1">Разделы</h2>
          {[
            { title: "Быстрый старт", desc: "Создай агента за 5 минут", emoji: "🚀" },
            { title: "Skills & MCP", desc: "Как устанавливать и публиковать", emoji: "⚡" },
            { title: "Points & Earn", desc: "Как работают баллы и рефералы", emoji: "💎" },
            { title: "Безопасность", desc: "Anti-cheat и правила", emoji: "🛡️" },
            { title: "Для разработчиков", desc: "API и коннекторы", emoji: "👨‍💻" },
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
      </div>

      <MobileDock />
    </main>
  );
}
