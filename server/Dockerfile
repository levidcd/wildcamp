FROM node:alpine

RUN mkdir -p /home/server

COPY ./dist/apps/ /home/server

COPY ./ecosystem.config.js /home/server

COPY ./package.json /home/server

COPY ./production.env /home/server




WORKDIR /home/server




RUN npm install -g cnpm tyarn --registry=https://registry.npm.taobao.org
RUN cnpm install pm2 -g
RUN cnpm install 

ENV HOST 0.0.0.0

EXPOSE 3000
EXPOSE 3001


CMD ["pm2-docker","start","ecosystem.config.js","--env", "production"]