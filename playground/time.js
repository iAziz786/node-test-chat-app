const moment = require('moment');

var createdAt = new Date().getTime();
const date = moment(createdAt);

// date.add(7, 'h');
console.log(date.format('h:mm a'));
