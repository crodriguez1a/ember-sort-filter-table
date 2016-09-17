import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Component,
  get,
  set
} = Ember;

export default Component.extend({
  /**
    * @private
    */
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

  /**
    * @private
    */
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

  /**
    * @private
    */
  @computed()
  big() {
    return {
      rows: [
        {
          'No.': 9,
          'Player': 'Ron Harper',
          'Pos': 'PG',
          'Ht': '6-6',
          'Wt': 185,
          'Birth-Date': 'January 20 1964',
          'Exp': 9,
          'College': 'Miami University'
        },
        {
          'No.': 23,
          'Player': 'Michael Jordan',
          'Pos': 'SG',
          'Ht': '6-6',
          'Wt': 195,
          'Birth-Date': 'February 17 1963',
          'Exp': 10,
          'College': 'University of North Carolina'
        },

        {
          'No.': 13,
          'Player': 'Luc Longley',
          'Pos': 'C',
          'Ht': '7-2',
          'Wt': 265,
          'Birth-Date': 'January 19 1969',
          'Exp': 4,
          'College': 'University of New Mexico'
        },
        {
          'No.': 33,
          'Player': 'Scottie Pippen',
          'Pos': 'SF',
          'Ht': '6-8',
          'Wt': 210,
          'Birth-Date': 'September 25 1965',
          'Exp': 8,
          'College': 'University of Central Arkansas'
        },
        {
          'No.': 91,
          'Player': 'Dennis Rodman',
          'Pos': 'PF',
          'Ht': '6-7',
          'Wt': 210,
          'Birth-Date': 'May 13 1961',
          'Exp': 9,
          'College': 'Southeastern Oklahoma State University'
        }
      ]
    };
  },
  actions: {
    /**
      @public
    */
    editField(row, key, value) {
      if (row && key && value) {
        return;
      }
    },

    /**
      @public
    */
    cancelEditField(row, key, value) {
      if (row && key && value) {
        return;
      }
    },
  }
});
