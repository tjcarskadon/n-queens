/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution; //fixme
  var b = new Board({n: n});
  var rows = b.rows();

  //MVP
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows.length; j++) {
      b.togglePiece(i, j);
      if (b.hasAnyRooksConflicts()) {
        b.togglePiece(i, j);
      }

    }
  }


  // n = 2;
  // var storage = [];


/*

  make a recursive function that places a rook in a square and checks if there is a violatoin.
  once it generates a successful version call the function again and check the first position.  
  if it is 1 then go thru the table and toggle all cell to the opposite state

*/

  // //make the recursive function
  // var fn = function (board, rowNum) {
  //   board = board || new Board({n: n});
  //   if (rowNum === n) {
  //     return;
  //   }
  //   //iterate over the board
  //   for (var i = 0; i < n; i++) {
  //     board.togglePiece(rowNum, i);
  //     if (board.hasAnyRooksConflicts()) {
  //         board.togglePiece(rowNum, i);
  //     } 
  //     fn(board, rowNum + 1);
  //   }
  //   //need to figure out how to deep copy this.
  //   // storage.push(board.rows().slice());

  //   for (var i = 0; i < board.rows().length; i++) {
  //     storage.concat(board.rows()[i]);
  //   }


  // };
  // fn(b, 0);
  // return storage;

  return b.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
    //make the recursive function
  var solutionCount = 0; //fixme
  var b = new Board({n: n});
 
  var traverse = function (board, index, rooks) {

    for (var i = 0; i <= n; i++ ) {
      if (i === n) {
        var row = board.get(index);
        board.togglePiece(index, row.indexOf(1));
        rooks++;
        return;
      }
      if (index + 1 === n - rooks) {
        //find the index of the rook in this row
        var row = board.get(index);
        board.togglePiece(index, row.indexOf(1));
        rooks++;
      }
      board.togglePiece(index, i);
      rooks--;
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(index, i);
        rooks++;
      } else {
        if (!rooks) {
          solutionCount++;
          board.togglePiece(index, i);
          //rooks++;
          return;
        } else {
          traverse(board, index + 1, rooks);   
        }
      }
    }

  };

  traverse(b, 0, n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
