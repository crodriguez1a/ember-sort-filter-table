// https://github.com/emberjs/data/blob/master/tests/helpers/owner.js

import Ember from 'ember';

let Owner;

if (Ember._RegistryProxyMixin && Ember._ContainerProxyMixin) {
  Owner = Ember.Object.extend(Ember._RegistryProxyMixin, Ember._ContainerProxyMixin);
} else {
  Owner = Ember.Object.extend();
}

export default Owner;
