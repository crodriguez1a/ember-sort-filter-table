import DS from 'ember-data';

const {
  JSONAPISerializer
} = DS;

export default JSONAPISerializer.extend({
  normalizeResponse(status, headers, payload, requestData) {
    return {
      data: payload.map((item, index) => {
        return {
          type: 'demo',
          id: index,
          attributes: item
        };
      })
    }
  }
});
