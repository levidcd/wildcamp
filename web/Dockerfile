FROM node:alpine

RUN mkdir -p /web

COPY . /web

WORKDIR /web

RUN npm config set registry https://registry.npm.taobao.org/

RUN yarn config set registry https://registry.npm.taobao.org



RUN yarn

# RUN yarn add next 

RUN npm rebuild node-sass

RUN yarn build

ENV HOST 0.0.0.0
ENV PORT 8000

EXPOSE 8000

CMD ["npm", "start"]