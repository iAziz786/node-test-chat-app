const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate new message', () => {

    var from = 'Zoya';
    var text = 'Hello, have a nice day.';

    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});

  });
});

describe('generateLocationMEssage', () => {
  it('should generate correct location object', () => {

    var from = 'Zareen';
    var latitude = 123;
    var longitude = 456;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
