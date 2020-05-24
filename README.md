## Introduction
- Features
- Screenshots (upload to git repo)
- Testing coverage result

## Tech stack & main libraries
- React version: latest or stable version. => why use (because its stable version)
- Node.js version: link or installation command => why use 
- npm/yarn
- react-boilerplate:
    + release version
    + why // important
- redux & sagas
- lodash
- styled-components
- reselect
- flow for type checking
- testing-library
- eslint

## Getting started

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/tien06051992/NAB_Wheather_Forecast.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm install` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._

Now you're ready to rumble!

## Project structure
components/ // contains reusable components
  tests // contains test files
    <component_name>.test.js
  index.js // purpose
  <component_name>.js // component
  <>
feed/
  index.js
  Feed.js
  Feed.css
  FeedStory.js
  FeedStory.test.js
  FeedAPI.js
profile/
  index.js
  Profile.js
  ProfileHeader.js
  ProfileHeader.css
  ProfileAPI.js

## Testing
- Run command with options
    npm run test:clean // clean up coverage result
    npm run test 
    npm run test:watch // running test automatically reloading

## Code quality
- linter: 
- Performance
- Logging
- Optimizing

# Deployment