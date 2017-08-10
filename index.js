/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-sort-filter-table',
  init: function(app) {
    this._super.init && this._super.init.apply(this, arguments);

    this.options = this.options || {};
    this.options.babel = this.options.babel || {};
    this.options.babel.plugins = this.options.babel.plugins || [];

    if (this.options.babel.plugins.indexOf('transform-decorators-legacy') === -1) {
      this.options.babel.plugins.push('transform-decorators-legacy');
    }

    if (this.options.babel.plugins.indexOf('transform-class-properties') === -1) {
      this.options.babel.plugins.push('transform-class-properties');
    }
  }
};
