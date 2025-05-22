# === STAGE 1: Build Vite app ===
FROM node:24-alpine AS builder

WORKDIR /app
RUN apk add --no-cache libc6-compat

ARG VITE_API_URL
ARG VITE_APP_URL

ENV VITE_API_URL=$VITE_API_URL
ENV VITE_APP_URL=$VITE_APP_URL

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

# === STAGE 2: NGINX for static delivery ===
FROM nginx:stable-alpine

# Удалим дефолтный конфиг
RUN rm /etc/nginx/conf.d/default.conf

# Добавим свой конфиг
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Переносим собранные файлы во фронтовую директорию nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт
EXPOSE 80

# Добавим HEALTHCHECK для контейнера
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -q --spider http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]
