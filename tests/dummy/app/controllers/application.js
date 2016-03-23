import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({
  @computed()
  devs() {
    return {
      rows: [
        {
          name: 'Carlos Rodriguez',
          'github_ID': 'crodriguez1a',
          _tags: 'developer javascript ember ios'
        },
        {
          name: 'Alex DiLiberto',
          'github_ID': 'alexdiliberto',
          _tags: 'developer javascript ember android'
        }
      ]
    };
  },

  @computed()
  small() {
    return {
      rows: [
        {
          'browser': '<i class="fa fa-chrome"></i> Chrome',
          'november': '48.15%',
          'december': '46.22%',
          'change': '-1.93%',
          'relative': '-4.00%',
          '_private': 'foo',
          hello() {
            return 'foo';
          }
        },
        {
          'browser': '<i class="fa fa-firefox"></i> Firefox',
          'november': '16.76%',
          'december': '16.34%',
          'change': '-0.42%',
          'relative': '-2.50%',
          '_private': 'bar',
          hello() {
            return 'foo';
          }
        },
        {
          'browser': '<i class="fa fa-safari"></i> Safari',
          'november': '4.45%',
          'december': '4.24%',
          'change': '-0.21%',
          'relative': '-4.70%',
          '_private': 'foo',
          hello() {
            return 'foo';
          }
        }
      ]
    };
  },

  @computed()
  big() {
    return {
      rows: [
        {
          'last_name': 'Billups',
          'first_name': 'Chauncey',
          'display_name': 'Chauncey Billups',
          'birthdate': '1976-09-25',
          'age': 37,
          'birthplace': 'Denver, Colorado, USA',

          'height': '6\'3\'',
          'weight': 202,
          'position': 'PG',
          'num': 1
        },
        {
          'last_name': 'Bynum',
          'first_name': 'William',
          'display_name': 'Will Bynum',
          'birthdate': '1983-01-04',
          'age': 30,
          'birthplace': 'Chicago, Illinois, USA',

          'height': '6\'0\'',
          'weight': 185,
          'position': 'PG',
          'num': 12
        },
        {
          'last_name': 'Caldwell-Pope',
          'first_name': 'Kentavious',
          'display_name': 'Kentavious Caldwell-Pope',
          'birthdate': '1993-02-18',
          'age': 20,
          'birthplace': 'Thomaston, Georgia, USA',

          'height': '6\'6\'',
          'weight': 204,
          'position': 'SG',
          'num': 5
        },
        {
          'last_name': 'Datome',
          'first_name': 'Luigi',
          'display_name': 'Luigi Datome',
          'birthdate': '1987-11-27',
          'age': 25,
          'birthplace': 'Montebelluna, Italy',

          'height': '6\'8\'',
          'weight': 198,
          'position': 'SG',
          'num': 13
        }
      ]
    };
  },
  actions: {
    editField(row, key, value) {
      if (row && key && value) {
        return;
      }
    },

    cancelEditField(row, key, value) {
      if (row && key && value) {
        return;
      }
    }
  }
});
