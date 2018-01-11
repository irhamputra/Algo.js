const reverseInPlace = require('./index');

test('reverseInPlace function exists', () => {
    expect(typeof reverseInPlace).toEqual('function');
});

test('reverseInPlace reverse each word in the sentence', () => {
    expect(reverseInPlace('i etah live')).toEqual('i hate evil');
});

test('reverseInPlace reverse each word in the sentence', () => {
    expect(reverseInPlace('!false    is   true ')).toEqual('eslaf!    si   eurt ');
});