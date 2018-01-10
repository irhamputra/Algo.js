const reverse = require('./index');

test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
    expect(reverse('abcdefghij')).toEqual('jihgfedcba');
});

test('Reverse reverses a string', () => {
    expect(reverse('abcdefghij     ')).toEqual('     jihgfedcba');
});