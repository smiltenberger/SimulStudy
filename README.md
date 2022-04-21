# SimulStudy

An online quiz web app that uses React's `create-react-app` for the UI
and Express with MongoDB for the API layer.

## Link
https://simulstudy.herokuapp.com/

## Local .env Setup

Rename .env-example file to .env and provide the values for unspecified keys

```sh
MONGODB_URL="<add value>"
JWT_SECRET="<add value>"
PORT=3001
```

IMPORTANT: Don't forget to set the config vars in Heroku dashboard:
https://dashboard.heroku.com/apps/simulstudy/settings

## Local Dev

```sh
# Install frontend dependencies
cd frontend && npm install

# Run frontend dev server
npm run start
```

Run this in another terminal:

```sh
# Install server dependencies
npm install
# Run server with automatic reloading
npm run dev
```

## Deploying to Heroku

```sh
# Login to Heroku
heroku login
#Push up the current version of the app
git push heroku <current branch>:main
```

## Troubleshooting

```sh
# Inspect Heroku logs
heroku logs --tail
# Confirm application works locally before deploying to Heroku
heroku local web
```
