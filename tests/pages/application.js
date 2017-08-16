import {
  create,
  visitable
} from 'ember-cli-page-object';
import demoNav from '../../tests/pages/components/demo-nav';

export default create({
  visit: visitable('/'),
  demoNav
});
