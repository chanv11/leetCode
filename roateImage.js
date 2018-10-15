var rotate = function(matrix) {
    let len = matrix.length
    for(let i = 0; i < len / 2; i ++) {
        for(let j = i; j < len - 1 - i; j ++) {
            let tmp = matrix[i][j]
            matrix[i][j] = matrix[len - j - 1][i]
            matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1]
            matrix[len - i - 1][len - j - 1] = matrix[j][len - i - 1]
            matrix[j][len - i - 1] = tmp;
        }
    }
};