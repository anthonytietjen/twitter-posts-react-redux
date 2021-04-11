# Science 37 Take Home 

This project was boostrapped from `Create React App`. As a result, the webpack config is not exposes. To be able to modify webpack config properties you either need to `npm run eject` or use a library like `craco` or `react-app-rewired` that doesn't require ejecting.

## Run Locally

```bash
npm install
npm start
```

## Unit Tests
I created tests for several (but not all) of the components. The test for a given component is located in the same folder as the component.
```bash
npm test
```

## Build
```bash
npm run build
```

## Proxy Server
See `/src/setupProxy.js`. That file gets started along with the app when running `npm start` due to Create React App's built-in settings.

## Twitter Bearer Token
Create a file called `.env` in the root of the project with the contents below. 
```
REACT_APP_TWITTER_API_TOKEN=%REPLACE_THIS_WITH_YOUR_TOKEN%
```
This file is ignored from source control. The value of REACT_APP_TWITTER_API_TOKEN gets used in /src/setupProxy.js. If you are watching the browser network traffic, you won't see that header because the token doesn't get used by the React code. Instead, the token gets added to the Authorization header when the proxy forwards the request to twitter.
