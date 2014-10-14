Package.describe({
  summary: "bondmath",
  version: "0.0.0",
  git: "https://github.com/electronifie/meteor-bondmath.git"
});

Npm.depends({
  "bondmath": "https://bitbucket.org/electronifie/bondmath/get/v0.0.8.tar.gz"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('electronifie:bondmath.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('electronifie:bondmath');
  api.addFiles('electronifie:bondmath-tests.js', 'server');
});

