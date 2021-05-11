# Twitter Top Posts

## Run Locally

1. Place your Twitter bearer token in a file called `.env` in the project root. This file is ignored from source control. Use the format below.
```
REACT_APP_TWITTER_API_TOKEN=%YOUR_TOKEN_HERE%
```
2. Execute `npm install` and `npm start`. (Also see: [Proxy Server and Bearer Token](#proxy-server-and-bearer-token).)

## Unit Tests
I created tests for several (but not all) of the components. The test for a given component is located in the same folder as the component.
```bash
npm test
```

## Build
```bash
npm run build
```

## Proxy Server and Bearer Token
The file `/src/setupProxy.js` contains a proxy server for proxying traffic to twitter along with the bearer token. The code in `/src/setupProxy.js` automatically gets started along with the react app when executing `npm start` due to Create React App's built-in configuration. 

The value of `REACT_APP_TWITTER_API_TOKEN` from the `.env` file gets added to the Authorization header in `/src/setupProxy.js`.

If you are watching the browser's network traffic, you won't see the Authorization header in the request because that header gets added by the proxy. You would have to watch Node's network traffic to see the Authorization header.

## Webpack Config

This project was boostrapped from `Create React App`. As a result, the webpack config is not exposed. To be able to modify webpack config,  you either need to `npm run eject` or use a library like `craco` or `react-app-rewired` that doesn't require ejecting.


