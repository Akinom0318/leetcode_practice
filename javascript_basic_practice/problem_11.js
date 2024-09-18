function memoize(fn) {
    let cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if(!cache.has(key)){
            cache.set(key, fn(...args));
        }
        console.log(cache);
        return cache.get(key);
    }
}