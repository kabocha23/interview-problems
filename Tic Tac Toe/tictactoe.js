$(document).ready(function(){
    console.log("ready to go!");
    
    let currentPlayer = "O";
    let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let squares = document.querySelectorAll('.square');
    let board;
    gameInit();
    
    document.getElementById("resetButton").addEventListener('click', gameInit);
    
    //settings on load
    function gameInit(){
      board = Array.from(Array(9).keys());
      for(let l = 0; l < squares.length; l++) {
        currentPlayer = "O";
        squares[l].innerText = "";
        squares[l].addEventListener('click', markSq, false);
      }
    }
  
    //add x or o to the square
    function markSq(square) {
      let squareId = square.target.id;
      let thisSquare = document.getElementById(squareId);
      if(squareIsEmpty(thisSquare)){
        thisSquare.innerHTML = currentPlayer;
        board[squareId] = currentPlayer;
        console.log(board)
        //check if win, else next turn
        if(checkWin(currentPlayer)) alert(currentPlayer + " wins!")
        //change player
        if(currentPlayer == "O"){
          currentPlayer = "X";
        }else{
            currentPlayer = "O";
        }
      }
    }
    
    //check if square is empty
    function squareIsEmpty(square) {
        return ( 
        square.innerHTML !== "X" && square.innerHTML !== "O" 
      )
    }
    
    //detect win from win array
    function checkWin(currentPlayer){
      for(let m = 0; m < win.length; m++) {
        let winCount = 0;
        for(let n = 0; n < win[m].length; n++) {
          if(board[win[m][n]] == currentPlayer){
            winCount++;
            if(winCount == 3) return true;
          }else{
            continue;
          }
        }
      }
    }
  });