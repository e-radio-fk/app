# less to css
./node_modules/less/bin/lessc docs/less/main.less docs/css/main.css

# now run webpack to ensure conversion of Node.js plugins to normal code
./node_modules/webpack-cli/bin/cli.js
