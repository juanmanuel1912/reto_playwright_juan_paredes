module.exports = {
  default: `--require-module @babel/register --require features/step_definitions/**/*.js --format progress --publish-quiet`,
  timeout: 60000,
};

