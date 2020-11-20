#!/bin/sh

# 运行docker
docker-compose stop

docker-compose down

docker-compose build

docker-compose up -d
