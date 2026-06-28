# Dockerfile do app Next.js (cenário de produção com Postgres).
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl

# ----- Dependências -----
FROM base AS deps
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm ci

# ----- Build -----
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate && npm run build

# ----- Runner -----
FROM base AS runner
ENV NODE_ENV=production
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/scripts ./scripts

EXPOSE 3000
# Aplica migrations e sobe o servidor. O seed/import podem ser rodados à parte.
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]
