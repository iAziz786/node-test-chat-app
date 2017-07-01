const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate new message', () => {

    var from = 'Zoya';
    var text = 'Hello, have a nice day.';

    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});

  });
});
