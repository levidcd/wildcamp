FROM node:alpine

RUN mkdir -p /server

COPY ./dist/apps/ /server

COPY ./ecosystem.config.js /server

COPY ./production.env /server/admin

COPY ./production.env /server/web



WORKDIR /server

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
RUN cnpm install pm2 -g



EXPOSE 3000
EXPOSE 3001

# ENTRYPOINT ["pm2-docker", "start"]

# CMD ["ecosystem.config.js --env production"]