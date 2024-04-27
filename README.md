# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build and deployment`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Step 1: Add homepage to package.json

"homepage": "https://myusername.github.io/my-app"

Step 2: Install gh-pages and add deploy to scripts in package.json

npm install --save gh-pages

Add the following scripts in your package.json:

"predeploy": "npm run build",
"deploy": "gh-pages -d build",

Before:

  "scripts": {
    "start": "react-scripts start",
    "deploy": "gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

  After:

  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

After that run:

  npm run deploy

## How to use application:

1: Enter any city name.

2: Click on search, you will get the details of current temperature of entered city.

3. If the city name is invalid or can not be found, an error message is displayed.

4. Try to search for another city name.



