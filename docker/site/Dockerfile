FROM klakegg/hugo:latest as builder
WORKDIR /app
COPY ./../ ./

RUN hugo -D -d /build-complete

FROM nginx:stable-alpine
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /build-complete /var/www
