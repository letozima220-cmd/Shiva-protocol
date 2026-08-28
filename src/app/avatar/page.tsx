import MobileDock from "@/components/MobileDock";

export default function AvatarPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pb-24">
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Avatar</h1>
          <p className="text-[11px] text-white/40">Создай своего агента</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-600" />
      </header>

      <div className="px-4 pt-6 space-y-6 max-w-lg mx-auto">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-600/20 border border-white/10 flex items-center justify-center mb-4 text-5xl">
            🧬
          </div>
          <h2 className="text-xl font-bold">My Agent</h2>
          <p className="text-sm text-white/45 mt-1">Уровень 1 · 0 XP</p>
          <button className="mt-5 px-6 py-2.5 rounded-full bg-amber-500 text-black text-sm font-semibold">
            Создать / Редактировать
          </button>
        </section>

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
      </div>

      <MobileDock />
    </main>
  );
}
