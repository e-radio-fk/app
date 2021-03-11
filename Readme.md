## app

This is the website itself as of now.  In the future the website will something like: e-radio-fk.io

#### After you clone:

```
npm install
```

#### Develop using VSCode:

```
cd $projectRoot/docs
code .
```

#### Test on browser (build & start live server):
```
cd $projectRoot
npm run build && npm run start
```

We are using:
- Python3 for launching a local web server
- Gulp for running efficiently browserify for multiple node scripts
- Browserify
- Notable Node.JS modules:
  - cssless
