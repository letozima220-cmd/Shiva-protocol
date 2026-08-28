export default function AvatarPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Avatar</h1>
          <p className="text-[11px] text-white/40">Создай своего агента</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-600" />
      </header>

      <div className="px-4 pt-6 space-y-6 max-w-lg mx-auto">
        {/* Avatar preview */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 flex flex-col items-center">
          <div className="absolute -top-16 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl" />
          
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-600/20 border border-white/10 flex items-center justify-center mb-4">
            <span className="text-5xl">🧬</span>
          </div>
          
          <h2 className="text-xl font-bold">My Agent</h2>
          <p className="text-sm text-white/45 mt-1">Уровень 1 · 0 XP</p>
          
          <button className="mt-5 px-6 py-2.5 rounded-full bg-amber-500 text-black text-sm font-semibold active:scale-95 transition">
            Создать / Редактировать
          </button>
        </section>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Навыки", value: "0" },
            { label: "Чаты", value: "0" },
            { label: "Память", value: "0" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/5 border border-white/8 py-4 text-center">
              <div className="text-lg font-semibold text-amber-400">{item.value}</div>
              <div className="text-[11px] text-white/40 mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-3">
          {[
            { title: "Обучить", desc: "Добавить знания и навыки", emoji: "📚" },
            { title: "Чат", desc: "Поговорить с агентом", emoji: "💬" },
            { title: "Память", desc: "Что агент запомнил", emoji: "🧠" },
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

      {/* Bottom dock */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/8 bg-black/70 backdrop-blur-xl">
        <div className="max-w-lg mx-auto flex items-center justify-around py-3 px-2">
          {["Home", "Lab", "Market", "Earn", "Profile"].map((label, i) => (
            <button
              key={label}
              className={`flex flex-col items-center gap-1 min-w-[56px] ${
                label === "Lab" ? "text-amber-400" : "text-white/40"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-2xl flex items-center justify-center text-sm ${
                  label === "Lab"
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
