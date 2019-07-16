function search(needle = 0, heystack = []) {
    for (let i = 0; i < heystack.length; i++) {
        if (heystack[i] === needle) {
            return true;
        }
    }
}

const heystack = [1, 4, [5, 6, 7, [8, 18, [34, 17, [98, [210, [213]]]]]]];
const needle = 213;

console.log(search(needle, heystack));
