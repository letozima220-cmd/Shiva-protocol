import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-4xl font-bold tracking-tight">
          SHIVA Protocol
        </h1>
        <p className="text-white/60 text-lg">
          Autonomous AI Governance Protocol
        </p>
        <p className="text-white/40 text-sm">
          Frontend v0.2 · Orbit Glass
        </p>

        <div className="pt-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500/90 hover:bg-amber-400 text-black font-medium transition"
          >
            Открыть Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
