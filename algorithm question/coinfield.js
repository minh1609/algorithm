function search(needle = 0, heystack = []) {
    for (let i = 0; i < heystack.length; i++) {
        if (Array.isArray(heystack[i])) {
            return search(needle, heystack[i]);
        } else if (heystack[i] === needle) {
            return true;
        }
    }
    return false;
}

const heystack = [1, 3, [5, 6, 7, [8, 18, [34, 17, [98, [210, [213]]]]]]];
const needle = 213;

console.log(search(needle, heystack));
