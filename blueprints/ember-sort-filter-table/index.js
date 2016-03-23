/*jshint node:true*/
module.exports = {
  description: 'Install dependencies',

  normalizeEntityName: function(entityName) {
    return entityName;
  },

  afterInstall: function(options) {
    // TODO : Is this still needed?
    return this.addPackagesToProject([
      { name: 'ember-lodash', target: '0.0.6' }
    ]);
  }
};
