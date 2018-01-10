const reverse = require('./index');

test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
});

test('Reverse function exists', () => {
    expect(reverse('abcdefghij')).toEqual('jihgfedcba');
});

test('Reverse function exists', () => {
    expect(reverse('abcdefghij     ')).toEqual('     jihgfedcba');
});