function sort(unsorted) {
    return unsorted.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
            if (a < b) {
                return -1;
            } else if (a == b) {
                return 0;
            } else {
                return 1;
            }
        }
    });
}