
https://app.netlify.com/sites/philgainley/deploys
https://github.com/phiggis/philgainley
https://www.philgainley.com/

https://medium.com/@amanze.ogbonna/accessing-pushing-to-github-without-username-and-password-3022feb077fb

git remote -v
$ origin https://github.com/USERNAME/REPOSITORY.git (fetch)
$ origin https://github.com/USERNAME/REPOSITORY.git (push)
git remote set-url origin git@github.com:USERNAME/OTHERREPOSITORY.git

git config --global credential.helper credential-store

# https://gist.github.com/developius/c81f021eb5c5916013dc11
ssh-keygen -t rsa -C "phiggis@gmail.com"

git remote set-url origin	git@github.com:phiggis/philgainley.git


git remote set-url origin	git@github.com:phiggis/PHD_Documents.git

git remote set-url origin	git@github.com:phiggis/Models.git


npm run build
npm start


####################

sudo npm run build

sudo npm run dev



///////////////////////////

https://www.apollographql.com/blog/building-a-next-js-app-with-apollo-client-slash-graphql/
https://slash.dgraph.io/_/dashboard
////////////////////////

https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github
/////////////////////////////////////////////////////////


# A Next.js starter for the [JAMstack](https://jamstack.org)
This is a boilerplate for using [Next.js](https://nextjs.org/) as a static site generator.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-starter-jamstack)

https://www.npmjs.com/package/babel-plugin-module-resolver


sudo npm run dev

## Usage

### Getting started

To start your project, either:

1. Deploy to Netlify using the button above, or
2. Clone this repository and run:

```bash
npm install
```

This will take some time and will install all packages necessary to run the starter.

### Development

While developing your website, use:

```bash
npm start
```

Then visit http://localhost:3000/ to preview your new website. The Next.js development server will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### Static build

To build a static version of the website inside the `/dist` folder, run:

```bash
npm run build
```

See [package.json](package.json) for all tasks.

## Basic Concepts

You can read more about building sites and apps with Next.js in their documentation here:

https://nextjs.org/docs

## Doing dynamic things

A few resources for doing anything you can imagine with a 100% static site/app on the JAMstack
using Next.js. If you would like to add more resources please open a pull request!

- [Using Next.js as a Static Site Generator for Netlify](https://scotch.io/@sw-yx/using-nextjs-as-a-static-site-generator-for-netlify) - [Shawn Wang](https://twitter.com/swyx)
- [Serverless Next.js 9 on Netlify Functions](https://community.netlify.com/t/serverless-next-js-9-on-netlify-functions/1956) - [Shawn Wang](https://twitter.com/swyx)

## Deploying to Netlify

The deploy to Netlify button above will create a new site and repo in one click. If you've created your repo manually, you can deploy to Netlify as follows:

- Push your clone to your own GitHub repository.
- [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.

Now Netlify will build and deploy your site whenever you push to git.
