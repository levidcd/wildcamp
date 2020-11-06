#!/bin/sh
docker pull docker pull wildcamp-docker.pkg.coding.net/wildcamp/wildcamp/server
docker pull docker pull wildcamp-docker.pkg.coding.net/wildcamp/wildcamp/web
# 运行docker
docker-compose -f docker-compose.coding.yml stop
docker-compose -f docker-compose.coding.yml down
docker-compose -f docker-compose.coding.yml up -d
