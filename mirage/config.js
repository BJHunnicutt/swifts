export default function() {
  this.namespace = '/api';

  this.get('/links', function() {
    return {
      data: [{
        type: 'links',
        id: 'external-links',
        attributes: {
          schwitters: 'http://www.vauxhappening.org/'
        }
      }]
    };
  });
}
