# Science 37 Take Home 

## Running Locally

```bash
npm install
npm start
```

## Unit Tests
```bash
npm test
```

## Proxy Server
See `/src/setupProxy.js`. That file gets started along with the app when running `npm start` due to Create React App's built-in settings.

## Twitter Bearer Token
Create a file called `.env` in the root of the project with the contents below. 
```
REACT_APP_TWITTER_API_TOKEN=%REPLACE_THIS_WITH_YOUR_TOKEN%
```
This file is ignored from source control. The value of REACT_APP_TWITTER_API_TOKEN gets used in /src/setupProxy.js. If you are watching the browser network traffic, you won't see that header because the token doesn't get used by the React code. Instead, the token gets added to the Authorization header when the proxy forwards the request to twitter.
