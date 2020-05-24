## Introduction
<dl>
  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more.</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Industry-standard i18n internationalization support</dt>
  <dd>Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.</dd>

  <dt>Static code analysis</dt>
  <dd>Focus on writing new features without worrying about formatting or code quality. With the right editor setup, your code will automatically be formatted and linted as you work.</dd>

  <dt>SEO</dt>
  <dd>We support SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>
<img src="https://raw.githubusercontent.com/tien06051992/NAB_Wheather_Forecast/master/app/images/screenshot.png" align="center" />
## Test coverage
<img src="https://raw.githubusercontent.com/tien06051992/NAB_Wheather_Forecast/master/app/images/test-coverage.png" align="center" />
## Tech stack
### Core

- [ ] [React](https://facebook.github.io/react/) latest version (16.13.1). It's stable version
- [ ] [React Router](https://github.com/ReactTraining/react-router) v5.2.0
- [ ] [Redux](http://redux.js.org/) v4.0.5
- [ ] [Redux Saga](https://redux-saga.github.io/redux-saga/) v1.1.3
- [ ] [Reselect](https://github.com/reactjs/reselect) v4.0.0
- [ ] [Immer](https://github.com/mweststrate/immer) v3.0.0
- [ ] [Styled Components](https://github.com/styled-components/styled-components) v4.2.0

### Unit Testing

- [ ] [Jest](http://facebook.github.io/jest/)
- [ ] [react-testing-library](https://github.com/kentcdodds/react-testing-library)

### Linting

- [ ] [ESLint](http://eslint.org/)
- [ ] [Prettier](https://prettier.io/)
- [ ] [stylelint](https://stylelint.io/)

## Getting started

1.  Make sure that you have Node.js v8.15.1 and npm v5 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/tien06051992/NAB_Wheather_Forecast.git <YOUR_PROJECT_NAME>`
3.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4.  Run `npm install` or if you use yarn just type `yarn` in order to install dependencies and clean the git repo.<br />
    _At this point you can run `npm start` or `yarn start` to see the example app at `http://localhost:3000`._

Now you're ready to rumble!

## Project structure

### components

Contains all reuseable components UI. In each component also have <b>tests</b> folder which contains test file
```
ComponentFolderName
-tests
--index.test.js
index.js
```

### container

Contains all logic components. In each component also have <b>tests</b> folder which contains test file
```
ComponentFolderName
-tests
--index.test.js
index.js
```
The structure use the [container/component architecture](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.4rmjqneiw). `containers/` contains React components which are connected to the redux store. `components/` contains dumb React components which depend on containers for data. **Container components care about how things work, while components care about how things look.**

# Testing

- [Unit Testing](https://github.com/tien06051992/NAB_Wheather_Forecast/blob/master/docs/testing/unit-testing.md)
- [Component Testing](https://github.com/tien06051992/NAB_Wheather_Forecast/blob/master/docs/testing/component-testing.md)
- [Remote Testing](https://github.com/tien06051992/NAB_Wheather_Forecast/blob/master/docs/testing/remote-testing.md)

Testing your application is a vital part of serious development. There are a few
things you should test. If you've never done this before start with [unit testing](https://github.com/tien06051992/NAB_Wheather_Forecast/blob/master/docs/testing/unit-testing.md).
Move on to [component testing](https://github.com/tien06051992/NAB_Wheather_Forecast/blob/master/docs/testing/component-testing.md) when you feel like you
understand that!

We also support [remote testing](https://github.com/tien06051992/NAB_Wheather_Forecast/blob/master/docs/testing/remote-testing.md) your local application,
which is quite awesome, so definitely check that out!

## Usage with this boilerplate

To test your application started with this boilerplate do the following:

1.  Sprinkle `.test.js` files directly next to the parts of your application you
    want to test. (Or in `test/` subdirectories, it doesn't really matter as long
    as they are directly next to those parts and end in `.test.js`)

1.  Write your unit and component tests in those files.

1.  Run `npm run test` in your terminal and see all the tests pass! (hopefully)

There are a few more commands related to testing, checkout the [commands documentation](https://github.com/tien06051992/NAB_Wheather_Forecast/blob/master/docs/general/commands.md#testing)
for the full list!

## Code quality
### linter:
In project, open cmd run `npm run lint` or `yarn lint`

### Logging:
This project support Redux DevTool Extension on Chrome when develop

### Performance & Optimizing
We use Component and Profiler Tab on Chrome to check render time, re-render component

# Deployment

You can manual build production by cmd `npm run build` or `yarn build`.
If you want to deploy Heroku, you can follow this [tutorial](https://github.com/tien06051992/NAB_Wheather_Forecast/blob/master/docs/general/deployment.md)

------------------------------------

If you want more document detail, you can read it on this [link](https://github.com/tien06051992/NAB_Wheather_Forecast/tree/master/docs) 