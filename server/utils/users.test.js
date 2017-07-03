const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Aziz',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Zoya',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Lilly',
      room: 'Node Course'
    }];
  });

  it('should add a new user', () => {
    var users = new Users();
    var user = {
      id: '1214',
      name: 'Aziz',
      room: 'React Course'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user', () => {
    var user = users.getUser('1')

    expect(user).toBe(users.users[0]);
  });

  it('should not find a user', () => {
    var user = users.getUser('10');

    expect(user).toNotExist();
  });

  it('should return names for Node Course', () => {
    var userList = users.getUsersList('Node Course');

    expect(userList).toEqual(['Aziz', 'Lilly']);
  });

  it('should return names for React Course', () => {
    var userList = users.getUsersList('React Course');

    expect(userList).toEqual(['Zoya']);
  });
});
