# less to css
./node_modules/less/bin/lessc docs/less/main.less docs/css/main.css

# now run webpack to ensure conversion of Node.js plugins to normal code
browserify docs/_browserify/socket.io.js -o docs/scripts/socket.io.js