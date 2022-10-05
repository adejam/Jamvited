# JAMVITED APP

A simple event management app to manage events

## Table of Contents

1. [Features](#features)
1. [Pages](#pages)
1. [Technologies used](#technologies-used)
1. [Todo](#todo)
1. [Mini Scrum Boards Used](#mini-scrum-boards-used)
1. [Project Setup](#project-setup)
1. [Live Link](#live-link)
1. [Git Setup](#git-setup)
1. [Code Formatting and Quality Tools](#code-formatting-and-quality-tools)
1. [Git Hooks](#git-hooks)
1. [Directory Structure](#directory-structure)
1. [Deployment](#deployment)

## Features

- Internationalization
- Add Event
- Preview image
- Preview Added Event

Adding more features soon

## Pages

- Home page: Features "create-event" button to navigate to "add event" page
- Add Event Page: Features form to create event
- Event Page: Features event data

## Technologies Used

- React
- React router dom
- Typescript
- Custom Hooks and Hooks
- style-comonents
- Formik
- Yup
- react-intl
- react-datepicker
- Local storage
and more

## Todo

Still need to design and add more features...Still need to add more documentation... todo list Coming soon

## Mini Scrum Boards Used

- [Jamvited Board](https://github.com/users/adejam/projects/2/views/1)

## Project Setup

This project is bootstrapped with nextjs and typescript... simply clone using the command below, (we strictly recommend using ssh)

```bash
git clone https://github.com/adejam/Jamvited.git

cd jamvited
```

To install dependencies

```bash
yarn install
```

To start project

```bash
yarn start
```

You should see the demo app available on [http://localhost:3000](http://localhost:3000)

## Live Link

[Jamvited](https://jamvited.netlify.app/)

## Git Setup

To make sure changes are backed up, and to follow best practices for keeping related changes grouped within a single commit before moving to something new.

Note that from I used the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) standard and specifically the Angular convention [described here](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

The reason being like many other features in this project to simply set a **consistent** standard for myself and all developers that will contribute to this project to minimize train-up time when contributing to the project. I personally have very big concerns as to what standard is being used.

Consistency is everything!

## Code Formatting and Quality Tools

In order to set a standard that will be used by all contributors to the project to keep the code style consistent and basic best practices followed we will be implementing two tools:

- [eslint](https://eslint.org/) - For best practices on coding standards
- [prettier](https://prettier.io/) - For automatic formatting of code files

### ESLint

Eslint is installed with all necessary types and dependencies.

I added a little bit of extra configuration and make it a bit stricter than it is by default. If you disagree with any of the rules it sets, please raise your point and open an issue. Everything in configured in `.eslintrc.json`. Feel free to explore the file

Eslint can be fixed by running:

```bash
yarn lint
```

or errors can be checked by running

```bash
yarn lint:check
```

### Prettier

Prettier will take care of automatically formatting our files for us.

It is recommended that you get the [Prettier VS Code extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) so that VS Code can handle the formatting of the files for you and you don't need to rely on the command line tool. Having it installed and configured in your project means that VSCode will use your project's settings, so it's still necessary to add it here.

We have created two files in the root:

`.prettierrc`: For rules on prettier

and

`.prettierignore`: for files that prettier should ignore

```bash
**/*.ts
**/*.tsx
```

In that prettierignore file I've placed a list of directories that I don't want Prettier to waste any resources working on. My decision here is to allow only `Eslint` lint `ts` and `tsx` files for me.

To run Prettier:

```bash
yarn prettier
```

## Git Hooks

In order to keep this project to be as rock solid as possible if and i am going to be building on it in the long term, i have implemented [Husky](https://typicode.github.io/husky/#/)

Husky is a tool for running scripts at different stages of the git process, for example add, commit, push, etc. I like to be able to set certain conditions, and only allow things like commit and push to succeed if my code meets those conditions, presuming that it indicates my project is of acceptable quality.

In the future I am going to add the following script to the `package.json` file:

`package.json`

```json
  ...
  "scripts: {
    ...
    "prepare": "husky install"
  }
```

This will ensure Husky gets installed automatically when other developers run the project.

I have created a hook run which runs `yarn lint` whenever i try to make a commit.

In order for commits to succeed, the `yarn lint` script must first run and succeed. "Succeed" in this context means no errors. It will allow have warnings.

Lastly I added a linter for my commit messages with which I will be using a set of standard defaults, but I like to include that list explicitly in a `commitlint.config.js` file since I sometimes forget what prefixes are available:

`commitlint.config.js`

```js
// build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
      ],
    ],
  },
}
```

Feel free to try some commits that _don't_ follow the rules and see how they are not accepted, and you receive feedback that is designed to help you correct them.

## Directory Structure

This section is now going to cover setting up the folder structure in our project. This is one of those topics that many people will have _extremely strong opinions about_, and for good reason! Directory structure can really make or break a project in the long term when it gets out of control, especially when fellow team members have to spend unnecessary time trying to guess where to put things (or find things).

I personally like to take a fairly simplistic approach, keeping things separated basically. I am using primary folders in `src` below:

```bash
/components
/utils
/pages
/store
```

- `component` - The individual UI components that make up the app will live in here
- `utils` - Business/app/domain logic will live in here.
- `pages` - Will be the actual routes/pages.
- `store` - where context store and reducers are defined
- `constants` - where basic constants and variables that are to be re-used are
- `locales` - where internalization stuff is added
- `types` - where global types are added
- `globalStyles` - where globalStyles for styled components that doesn't need extra components are added
- `customHooks` - where i have added some customHooks

## React-Testing Library

I plan to make use of the react testing library and jest for testing in all of my components. Ideally I want all components tested. With the folder structure [atomic design pattern](https://bradfrost.com/blog/post/atomic-web-design/) that I have adopted I want to assume that all the different type of testing will be covered.

## Formik and Yup

For form state management and manipulations, I have decided to go with `Formik` as it is one of the best library out there for React form management. I have also adopted `Yup` for form field validations.

## Deployment

I made use of `Netlify` as it is one of the simplest and most straightforward deployment solution for a React app. Live link can be found at [Jamvited](https://jamvited.netlify.app/)
