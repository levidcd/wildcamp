FROM nginx:alpine

RUN mkdir -p /var/www/admincms

WORKDIR  /var/www/admincms

RUN ls -a

COPY ./build /var/www/admincms

RUN ls -a

COPY ./nginx.conf /etc/nginx/nginx.conf

ENV HOST 0.0.0.0
ENV PORT 8001

EXPOSE 8001


