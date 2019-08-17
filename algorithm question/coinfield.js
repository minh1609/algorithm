function search(needle, heystack) {
    for (let i = 0; i < heystack.length; i++) {
        if (Array.isArray(heystack[i])) {
            return search(needle, heystack[i]);
        } else if (heystack[i] === needle) {
            return true;
        }
    }
    return false;
}

const heystack = [1, 3, [5, 6, 7, [8, 18, [34, 213, [98, [210, [211]]]]]]];
const needle = 213;

console.log(search(needle, heystack));
