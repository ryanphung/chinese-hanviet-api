## Overview

An API built using [json-server](https://github.com/typicode/json-server) based on the template [json-server-heroku](https://github.com/jesperorb/json-server-heroku) that allows you to look up Chinese and Han Viet cognates based on the data from [chinese-hanviet-cognates](https://github.com/ryanphung/chinese-hanviet-cognates).

I created it for personal usage in my Anki deck, where I can display the list of Hanviet words for every Chinese character that I learn.

## Demo

* https://chinese-hanviet-api.herokuapp.com/words?word_like=可
* https://chinese-hanviet-api.herokuapp.com/words?hanviet=trạng%20thái

## Setting up

1 . Install dependencies

```bash
yarn install
```

2 . Sync the data from [the source](https://github.com/ryanphung/chinese-hanviet-cognates)

```bash
yarn run sync
```

This script will download a tsv file from the source repo, and convert it to JSON format and write into `db.json`. If there is no change in the source file, you won't see any change in `db.json`. But if you intend to deploy this API to Heroku, make sure to **commit any changes to `db.json` to git**.

3 . Run the API

```bash
yarn start
```

This will start the API locally on port 3000.

4 . Access the API

You can query the API in many ways, for example:

* http://localhost:3000/words?word_like=可

* http://localhost:3000/words?hanviet=trạng%20thái

For more flexible ways to query, refer to the complete documentation of [json-server](https://github.com/typicode/json-server).

---

## Deploy to **Heroku**

<img align="right" width="100px" height="auto" src="https://cdn.worldvectorlogo.com/logos/heroku.svg" alt="Heroku">

Heroku is a free hosting service for hosting small projects. Easy setup and deploy from the command line via _git_.

### Install Heroku

1 . Create an account on <br/>[https://heroku.com](https://heroku.com)

2 . Install the Heroku CLI on your computer: <br/>[https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

3 . Connect the Heroku CLI to your account by writing the following command in your terminal and follow the instructions on the command line:
```bash
heroku login
```

4 . Then create a remote heroku project, kinda like creating a git repository on GitHub. This will create a project on Heroku with a random name. If you want to name your app you have to supply your own name like `heroku create project-name`:
```bash
heroku create my-cool-chinese-hanviet-api
```

6 . Push your app to **Heroku** (you will see a wall of code)
```bash
git push heroku master
```

7 . Visit your newly create app by opening it via heroku:
```bash
heroku open
```

8 . For debugging if something went wrong:
```bash
heroku logs --tail
```

---

For different ways to deploy the project, refer to the original [template](https://github.com/jesperorb/json-server-heroku)
