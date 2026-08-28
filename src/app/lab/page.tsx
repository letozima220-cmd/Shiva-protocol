import MobileDock from "@/components/MobileDock";

export default function LabPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white pb-24">
      <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/5 px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold">Avatar Lab</h1>
          <p className="text-[11px] text-white/40">Практика и прокачка</p>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
          XP <span className="text-amber-400 font-medium">0</span>
        </div>
      </header>

      <div className="px-4 pt-6 space-y-6 max-w-lg mx-auto">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium">Уровень 1</span>
            <span className="text-xs text-white/40">0 / 100 XP</span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[8%] rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
          </div>
        </section>

        <div className="space-y-3">
          <h2 className="text-sm font-medium text-white/60 px-1">Задания</h2>
          {[
            { title: "Первый чат", desc: "Поговори с агентом 5 сообщений", xp: "+20 XP", emoji: "💬" },
            { title: "Добавить навык", desc: "Установи любой skill", xp: "+30 XP", emoji: "⚡" },
            { title: "Подключить сервис", desc: "Установи 1 connector", xp: "+40 XP", emoji: "🔗" },
            { title: "Пригласить друга", desc: "Реферальная ссылка", xp: "+50 XP", emoji: "👥" },
          ].map((task) => (
            <div key={task.title} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/8">
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center text-lg">{task.emoji}</div>
              <div className="flex-1">
                <h3 className="font-medium text-[15px]">{task.title}</h3>
                <p className="text-xs text-white/45">{task.desc}</p>
              </div>
              <span className="text-xs text-amber-400 font-medium">{task.xp}</span>
            </div>
          ))}
        </div>
      </div>

      <MobileDock />
    </main>
  );
}
