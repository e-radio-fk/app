Development is done in the following manner:
- VSCode on WSL/Windows10 for programming (open up `git-bash`, `cd`  into project's root, type `wsl` and then `code ./docs`)
- browserify & npm work on Windows10 - This is because of some inconsistencies with my Node installation on my WSL that rendered my development unbearable.
(everything mentioned as part of bullet 2. can be done on `git-bash`.)

We are using some Node plugins such as CSS Less.

In order to prepare this project on a clean installation, you first need to install these plugins:
```
cd $Project-Root
npm install
```

Then you need to build and finally run it (Inside project root):
```
./run.sh
```
