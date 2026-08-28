export default function DashboardPage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-white/50 text-sm mt-1">SHIVA Protocol · Orbit Glass</p>
          </div>
          <div className="px-4 py-2 rounded-full glass text-sm">
            Points: <span className="text-amber-400 font-medium">0</span>
          </div>
        </div>

        {/* Hero card */}
        <div className="glass-strong rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none" />
          <h2 className="text-xl font-semibold mb-2">Optimize Metrics</h2>
          <p className="text-white/60 text-sm max-w-md">
            Управляй агентами, навыками и коннекторами в одном месте.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass rounded-xl p-5">
            <h3 className="font-medium mb-1">Avatar</h3>
            <p className="text-white/50 text-sm">Создай и обучи своего агента</p>
          </div>
          <div className="glass rounded-xl p-5">
            <h3 className="font-medium mb-1">Skills</h3>
            <p className="text-white/50 text-sm">Каталог навыков и MCP</p>
          </div>
          <div className="glass rounded-xl p-5">
            <h3 className="font-medium mb-1">Connectors</h3>
            <p className="text-white/50 text-sm">Подключи внешние сервисы</p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-white/30 text-xs">
          SHIVA Points — внутренние баллы. Путь в TON без гарантий ROI.
        </p>
      </div>
    </main>
  );
}
