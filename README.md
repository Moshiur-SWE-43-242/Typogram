# Typogram

Enterprise-grade typing practice, contest, certification, and learning SaaS platform.

## Structure

- `apps/web` – Next.js 15 frontend with App Router and neon gamified UI
- `apps/api` – NestJS backend with JWT auth, sockets, BullMQ, and Redis
- `packages/*` – shared types, validation, UI primitives, and config
- `prisma/schema.prisma` – PostgreSQL schema for core SaaS data
- `docker/` – Docker Compose and nginx reverse proxy

## Quick start

1. Install dependencies

   ```bash
   npm install
   ```

2. Generate Prisma client

   ```bash
   npm run db:generate
   ```

3. Start local development

   ```bash
   npm run dev
   ```

## Services

- `web` – frontend
- `api` – backend
- `redis` – caching and socket pub/sub
- `postgres` – relational datastore
- `worker` – BullMQ background jobs
