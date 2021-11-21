FROM klakegg/hugo:latest as builder
WORKDIR /app
COPY ./../ ./

RUN hugo -D -d /build-complete

FROM nginx:stable-alpine
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./docker/nginx/cert.pem /etc/ssl/nicholas-vancise.dev/cert.pem
COPY ./docker/nginx/key.pem /etc/ssl/nicholas-vancise.dev/key.pem
COPY --from=builder /build-complete /var/www
