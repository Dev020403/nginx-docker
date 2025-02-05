FROM node:18-alpine

WORKDIR /faq

COPY package*.json pnpm-lock.yaml ./

RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile && \
    pnpm cache clean

COPY . .

CMD ["pnpm", "start"]
