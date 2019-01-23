export function add(a, b) {
    return [a, b].map(x => x).reduce((summ, x) => summ + x, 0);
}

add(1, 2);
