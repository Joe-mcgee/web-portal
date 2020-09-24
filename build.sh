#!/bin/bash
set -e

WEBDIR=$(pwd)/web
APIDIR=$(pwd)/strapi
echo $WEBDIR

git pull origin src
cd $WEBDIR
npm run build
sudo rm -rf /var/www/tbh.ninja.old
[ -f /var/www/tbh.ninja ] && sudo mv /var/www/tbh.ninja /var/www/tbh.ninja.old
sudo cp -R ./dist /var/www/tbh.ninja
sudo service nginx restart
cd $APIDIR
npm run build
pm2 restart strapi
