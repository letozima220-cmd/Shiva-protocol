export default function NetworkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Network</h1>
          <p className="text-[11px] text-white/40">Рефералы · Кланы · Лента</p>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
          L1–L3
        </div>
      </header>

      <div className="px-4 pt-6 space-y-6 max-w-lg mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Уровень 1", value: "12" },
            { label: "Уровень 2", value: "34" },
            { label: "Уровень 3", value: "89" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/5 border border-white/8 py-4 text-center">
              <div className="text-lg font-semibold text-amber-400">{item.value}</div>
              <div className="text-[11px] text-white/40 mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Clan */}
        <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-medium">Мой клан</h2>
            <span className="text-xs text-white/40">Скоро</span>
          </div>
          <p className="text-sm text-white/45">
            Присоединяйся к клану, выполняй общие квесты и поднимайся в рейтинге.
          </p>
        </section>

        {/* Recent activity */}
        <div className="space-y-3">
          <h2 className="text-sm font-medium text-white/60 px-1">Активность</h2>
          {[
            { name: "Alex", action: "присоединился по твоей ссылке", time: "2ч" },
            { name: "Maria", action: "выполнила квест", time: "5ч" },
            { name: "Ivan", action: "опубликовал skill", time: "1д" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/8"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400/40 to-orange-600/30" />
              <div className="flex-1 min-w-0">
                <p className="text-sm">
                  <span className="font-medium">{item.name}</span>{" "}
                  <span className="text-white/50">{item.action}</span>
                </p>
              </div>
              <span className="text-[11px] text-white/30">{item.time}</span>
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
