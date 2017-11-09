window.onload = function() {
  var board = document.querySelector('.board');
  board.addEventListener('click', addSimbol);
};

var centinel = false;
function addSimbol (event){
  if(centinel){
    event.target.textContent = 'O';
    event.target.style.backgroundColor = '#EFF8FB';
    event.target.style.fontSize = '100px';
    event.target.style.textAlign = 'center';
    centinel = false;
  } else {
    event.target.textContent = 'X';
    event.target.style.backgroundColor = '#EFF8FB';
    event.target.style.fontSize = '100px';
    event.target.style.textAlign = 'center';
    centinel = true;
  };

};
function myFunction() {
    document.querySelector('.board').reset();
}
