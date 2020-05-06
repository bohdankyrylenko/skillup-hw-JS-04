const arr = [
    [14, 45],
    [1],
    ['a', 'c', 'd']
];

arr.sort((a, b) => a.length - b.length);

console.log(arr);