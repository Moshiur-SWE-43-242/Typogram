FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY turbo.json ./
COPY prisma ./prisma
COPY apps/api/package.json ./apps/api/
COPY packages/config/package.json ./packages/config/
COPY packages/types/package.json ./packages/types/
RUN npm install

FROM base AS build
COPY . .
RUN npm run build -- --filter=api

FROM node:20-alpine AS runtime
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY --from=build /usr/src/app/apps/api/dist ./apps/api/dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/prisma ./prisma
CMD ["node", "apps/api/dist/main.js"]
