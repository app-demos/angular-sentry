const SentryPlugin = require("@sentry/webpack-plugin");
require('dotenv').config();

console.log(process.env);
// Again, getting the release here at this point, depends on your setup!
const release = require('child_process')
  .execSync('git show -s --format=oneline')
  .toString();

// eslint-disable-next-line strict
module.exports = {
  plugins: [
    new SentryPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,        
      org: process.env.SENTRY_ORG,        
      project: process.env.SENTRY_PROJECT,        
      rewrite: true,
      include: './dist/angular-sentry/',
      ignoreFile: '.sentrycliignore',
      ignore: ['node_modules', 'custom-webpack.config.js'],
      // configFile: 'sentry.properties',
      setCommits: {
        commit: release,
      },
      debug: false,
      dryRun: true,
    }),
  ],
};