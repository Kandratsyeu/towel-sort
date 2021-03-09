// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    return matrix
        .map((el, index) => {
            if (index % 2) {
                let reversed = [];
                el.forEach((item) => reversed.unshift(item));
                return reversed;
            } else {
                return el;
            }
        })
        .flat();
};
