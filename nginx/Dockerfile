FROM nginx:alpine

RUN  apk update \
     && apk add openssl \
     && rm -rf /var/cache/apk/*

RUN mkdir -p /etc/nginx/ssl \
    && openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout /etc/nginx/ssl/key.pem -out /etc/nginx/ssl/cert.pem -subj "/C=DE/ST=Thuringia/L=Erfurt/O=precog/OU=Visionary Software/CN=*.precog.de" \
    && rm /etc/nginx/conf.d/default.conf

ADD conf.d/ /etc/nginx/conf.d

EXPOSE 80
EXPOSE 443