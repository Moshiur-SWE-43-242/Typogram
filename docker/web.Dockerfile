FROM node:20-alpine AS base
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY turbo.json ./
RUN npm install

FROM base AS build
COPY . .
RUN npm run build -- --filter=web

FROM node:20-alpine AS runtime
WORKDIR /usr/src/app
ENV NODE_ENV=production
COPY --from=build /usr/src/app/apps/web/.next ./.next
COPY --from=build /usr/src/app/apps/web/public ./public
COPY --from=build /usr/src/app/node_modules ./node_modules
CMD ["npm", "run", "start", "--prefix", "apps/web"]
