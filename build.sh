BASEDIR=${pwd}
git pull origin src
cd web
npm run build
sudo rm -rf /var/www/tbh.ninja.old
sudo mv /var/www/tbh.ninja /var/www/tbh.ninja.old
sudo cp -R ./dist /var/www/tbh.ninja
sudo service nginx restart
cd $BASEDIR
cd strapi/
npm run build
pm2 restart strapi
