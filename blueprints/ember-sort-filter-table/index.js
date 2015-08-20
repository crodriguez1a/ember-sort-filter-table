/**
  This is a necessary workaround at the moment because nested addons still have issues within ember-cli.
  Basically, the issue arises because we are using `ember-lodash` as an addon within this addon creating nested dependencies.

  Setting this as the default blueprint for the addon so it will be automatically run after installation.

    http://www.ember-cli.com/extending/#default-blueprint
*/
module.exports = {
  description: 'Install ember-lodash as a project dependency',

  normalizeEntityName: function(entityName) {
    return entityName;
  },

  afterInstall: function(options) {
    return this.addPackagesToProject([
      { name: 'ember-lodash', target: '0.0.5' }
    ]);
  }
};
