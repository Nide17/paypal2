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



Zero-configuration Deploy to Heroku
-----------------------------------

