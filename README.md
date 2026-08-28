# SHIVA Protocol Frontend v0.2

Единый фронт: **Orbit Glass Analytics** (реф Channel Analytics) + **Avatar Lab** (ivan-os-site) + API **nexus-backend** / SHIVA P0.

## Репозитории-источники

| Repo | Что взяли |
|------|-----------|
| `Ivan-nexus-` | Next 15, tailwind, framer-motion, структура `src/` |
| `ivan-os-site` | Avatar Lab skills, states, patterns, XP |
| `nexus-backend` | `/api/chat`, catalog, connectors |
| SHIVA Notion P0 | wallet, skills, referrals, points→TON |
| Orbit Glass pack | dashboard UI, particles, sparklines |

## Запуск

```bash
cd shiva-app
npm i
cp .env.example .env.local
# NEXT_PUBLIC_API_URL=https://your-nexus-backend
npm run dev
```

Открой http://localhost:3000 → `/dashboard`.

## Роуты

- `/dashboard` — hero glass + KPI + avatar + skills/chat/connectors + activity
- `/avatar` — studio 2D
- `/lab` — Avatar Lab (NEXUS practice)
- `/market` `/network` `/earn` `/learn` `/roadmap`

## Push в GitHub

```bash
# в пустой или существующий Ivan-nexus-
git remote add origin https://github.com/letozima220-cmd/Ivan-nexus-.git
# или новый repo shiva-protocol
```

Скопируй содержимое `shiva-app/` в корень репо с `src/`.
