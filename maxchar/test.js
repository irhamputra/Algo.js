const maxChar = require('./index');

test('maxChar function exists', () => {
    expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
   expect(maxChar('a')).toEqual('a');
   expect(maxChar('abcdefghijkkkkkkkk')).toEqual('k');
});

test('Works with numbers in the string', () => {
   expect(maxChar('ab1c1d1e1f11gh11')).toEqual('1');
});