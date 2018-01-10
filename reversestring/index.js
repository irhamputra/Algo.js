// -- Petunjuk Soal
// Balikan setiap karakter dari string dengan function reverse
// -- Contoh
// reverse('hello') === 'olleh'
// reverse('mobil') === 'libom'
// reverse('Hello World!') === '!dlroW elloH'

function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

module.exports = reverse;