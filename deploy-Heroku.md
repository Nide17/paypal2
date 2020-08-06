Deployment
-----------

npm install -g serve
serve -s build








Steps:
Sign up for Heroku
Setup our React App for deployment
Create Heroku git repository


account: nidehazard10@gmail.com
pswd: niyomwungeri@10


heroku create $APP_NAME --buildpack mars/create-react-app


npx create-react-app@3.x $APP_NAME
cd $APP_NAME
heroku create $APP_NAME --buildpack mars/create-react-app
git push heroku master
heroku open

heroku create paypal2 --buildpack mars/create-react-app


Zero-configuration Deploy to Heroku
-----------------------------------

npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"

Deploy ♻️
---------
git push heroku master
heroku open

==https://github.com/mars/create-react-app-buildpack#usage===


To customize an app's processes, commit a Procfile and deploy. Include web: bin/boot to launch the default web process, or you may replace the default web process.


1. heroku login
2. npm run build
3. serve -s build
4. heroku create deploy2paypal --buildpack mars/create-react-app
5. git push heroku master
6. heroku open




project-1052430151130765531