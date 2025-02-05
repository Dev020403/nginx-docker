FROM node:18-alpine as builder

WORKDIR /faq

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile

COPY . .

# Production image
FROM node:18-alpine

WORKDIR /faq

COPY --from=builder /faq/package*.json /faq/pnpm-lock.yaml ./
COPY --from=builder /faq/node_modules ./node_modules
COPY --from=builder /faq/src ./src

CMD ["node", "src/index.js"]
