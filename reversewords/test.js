const reverseWords = require('./index');

test('ReverseWords function exists', () => {
    expect(typeof reverseWords).toEqual('function');
});

test('ReverseWords reverses a string of sentence', () => {
    expect(reverseWords('javascript itu mudah')).toEqual('mudah itu javascript');
});

test('ReverseWords reverses a string of sentence', () => {
    expect(reverseWords('i know this is too easy  ')).toEqual('  easy too is this know i');
});