const maxChar = require('./index');

test('maxChar function exists', () => {
    expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
   expect(maxChar('a')).toEqual('a');
   expect(maxChar('abcdefghijkkkkkkkk')).toEqual('k');
});

