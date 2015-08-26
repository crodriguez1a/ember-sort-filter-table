import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editField(row, key, value) {
      //do something to pass jshint
      if (row && key && value) {
        return;
      }
    },

    cancelEditField(row, key, value) {
      //do something to pass jshint
      if (row && key && value) {
        return;
      }
    }
  }
});
