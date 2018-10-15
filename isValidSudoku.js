let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
var isValidSudoku = function(board) {
      for (let arr of board) {            
        let row = []
        for (let c of arr) {
          if (c !== '.') row.push(c);
        }
        let set = new Set(row)
        if (set.size !== row.length) return false;
      }
      
      for (let i = 0; i < 9; i++) {
        let col = []
        board.map( arr => {
          if (arr[i] !== '.') col.push(arr[i])
        })
        let set = new Set(col)
        if (set.size !== col.length) return false;
      }
      
      for (let x = 0; x < 9; x += 3) {
        for (let y = 0; y < 9; y += 3) {
          let box = []
          for (let a = x; a < 3 + x; a ++) {
            for (let b = y; b < 3 + y; b ++) {
              if (board[a][b] !== '.') box.push(board[a][b])
            }
          }
          let set = new Set(box)
          if (set.size !== box.length) return false
        }
      }
      
      return true
    };

isValidSudoku(board)