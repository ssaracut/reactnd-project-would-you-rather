# Would You Rather Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

## Notes

Semantic UI seems to have a bug and throws the following error:

```
Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of RefFindNode which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
    at div
    at RefFindNode (http://localhost:3000/static/js/vendors~main.chunk.js:388:35)
    at Ref (http://localhost:3000/static/js/vendors~main.chunk.js:321:24)
    at Dropdown (http://localhost:3000/static/js/vendors~main.chunk.js:76418:29)
    at Select
    at div
    at FormField (http://localhost:3000/static/js/vendors~main.chunk.js:65060:24)
    at FormSelect (http://localhost:3000/static/js/vendors~main.chunk.js:65419:23)
    at form
    at Form (http://localhost:3000/static/js/vendors~main.chunk.js:64747:29)
    at div
    at CardContent (http://localhost:3000/static/js/vendors~main.chunk.js:84186:24)
    at div
    at Card (http://localhost:3000/static/js/vendors~main.chunk.js:84014:29)
    at SignIn (http://localhost:3000/static/js/main.chunk.js:2646:3)
    at Connect(SignIn) (http://localhost:3000/static/js/vendors~main.chunk.js:52721:75)
    at div
    at GridRow (http://localhost:3000/static/js/vendors~main.chunk.js:65762:24)
    at div
    at Grid (http://localhost:3000/static/js/vendors~main.chunk.js:65549:22)
    at Router (http://localhost:3000/static/js/vendors~main.chunk.js:55198:30)
    at BrowserRouter (http://localhost:3000/static/js/vendors~main.chunk.js:54818:35)
    at App (http://localhost:3000/static/js/main.chunk.js:1153:3)
    at Connect(App) (http://localhost:3000/static/js/vendors~main.chunk.js:52721:75)
    at Provider (http://localhost:3000/static/js/vendors~main.chunk.js:52434:20)
```

## How to install and run

```cmd
git clone https://github.com/ssaracut/reactnd-project-would-you-rather.git
npm install
npm run start
```

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
