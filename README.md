# Node Boilerplate (Project Name)

Minimal boilerplate for node applications. (Short Description/byline)

## This app does the following:

- This app serves as an example of conventions that should be used across different projects
- Enables me to mantain similar project and directory structures
- Similar file names, run, dev, test and start scripts
- Boilerplate Dockerfile, .dockerignore, Jenkinsfile, .gitignore, package.json, .node-version, README.md, .git/ files
- Comes with only two packages installed
- Testing environment setup
- Learning

## Packages Installed (Not needed for other projects since reading package.json can provide this info)

- dotenv
- DEV - nodenv, eslint
- TEST - mocha

## How to use/What services databases etc will app connect to?

1. git clone
2. Change the following in package.json with appropriate values suitable for your project

```
  "name": "node-boilerplate",
  "version": "1.0.0",
  "description": "Minimal Boilerplate for node applications. Clone the repo to get started.",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ysingh/node-boilerplate.git"
  },
  "keywords": [
    "node",
    "boileplate",
    "template"
  ],
  "author": "Yudhishthir Singh",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/ysingh/node-boilerplate/issues"
  },
  "homepage": "https://github.com/ysingh/node-boilerplate#readme",
```

3. npm install
4. PROTIP: Use npx instead of globalling installing cli's
5. Replace the README.md with a suitable one for your project
6. This should be a script instead of a repository and will be turned into one at some point.
7. The goal for the script is to do more for you than npm init but less than Yeoman,a repository is fine for now.

## How to Build

- For DEV
- For PROD

## How to Run

npm start.js

## How to Test

npm run test

## What credentials are needed?

Get the .env from a neighbor
