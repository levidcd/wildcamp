#!/bin/sh

# 运行docker
docker-compose down

docker-compose build --build-arg key=val

docker-compose up -d
