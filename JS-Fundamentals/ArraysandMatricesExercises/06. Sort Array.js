function sorter(arr) {
    console.log(arr.sort().sort((a, b) => a.length > b.length).join('\n'));
}
console.log(sorter(['alpha', 'beta', 'gamma']));
