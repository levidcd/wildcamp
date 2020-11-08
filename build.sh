#!/bin/sh
CRTDIR=$(pwd)

# 打包admincms
cd ${CRTDIR}/admincms
rm -rf build
cnpm i
cnpm run build

# 打包server
cd ${CRTDIR}/server
rm -rf dist
cnpm i
npm run build web
npm run build admin

# 打包web
cd ${CRTDIR}/web
cnpm i
npm run build 


cd ${CRTDIR}
# sh ./deploy.sh
