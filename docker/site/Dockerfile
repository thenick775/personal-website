FROM klakegg/hugo:latest as builder
WORKDIR /app
COPY ./ ./

RUN hugo -D -d /build-complete

FROM nginx:stable-alpine
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /build-complete /var/www

RUN apk add rsyslog fail2ban

COPY ./docker/fail2ban/jail.conf /etc/fail2ban/jail.conf
COPY ./docker/fail2ban/nginx-*.conf /etc/fail2ban/filter.d/
COPY ./docker/fail2ban/alljailstatus.sh /etc/fail2ban/custom/alljailstatus.sh
ENV PATH="${PATH}:/etc/fail2ban/custom/"
RUN touch /var/log/fail2ban.log

COPY ./docker/site/entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
