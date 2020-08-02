We created React App using create-react-app
then we installed gh-pages as a dev-dependency
and in package.json file we added some properties homepage also in existing scripts property we added predeploy and deploy
and created a remote repository and initialize it
and run npm run deploy to generate a production build and deploy it to GitHub Pages.



1. npm install gh-pages --save-dev
install it as devDependency

2. add as first line in package.json
"homepage": "http://Nide17.github.io/paypal2"

3. 

"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}

4. npm run deploy