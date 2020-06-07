const movingSquare = document.querySelector('.moving-square');
const button = document.querySelector('button');
const restart = document.querySelector('.restart');
const triesCount = document.querySelector('.tries-count');
const targetValue = document.querySelector('.target-value');
const lastAttemptScore = document.querySelector('.last-attempt-score');
const congratz = document.querySelector('.congratz');
const beginAnimation = document.querySelector('.begin-animation');
var clickCounter = 0;

movingSquare.classList.add('animation');

beginAnimation.addEventListener('click', function(){
  clickCounter=0;
  triesCount.textContent = clickCounter;
  targetValue.textContent = "0px";
  lastAttemptScore.textContent = "0px";
  movingSquare.classList.add('animation');
  movingSquare.classList.remove('pause');
  button.classList.remove('hide');
  congratz.classList.remove('scale');
  
  if(movingSquare.offsetLeft + 14 == document.documentElement.clientWidth/2){
    triesCount.textContent = 0;
    targetValue.textContent = "0px";
    lastAttemptScore.textContent = "0px"
    movingSquare.classList.add('animation');
}
})

  button.addEventListener('click', function(){
    clickCounter++;
    triesCount.textContent = clickCounter;
    targetValue.textContent = document.documentElement.clientWidth/2 + "px";
    lastAttemptScore.textContent = movingSquare.offsetLeft + 14 + "px";
    movingSquare.classList.add('animation');
    button.classList.toggle('shake');
    congratz.classList.remove('scale');
    
    if(movingSquare.offsetLeft + 14 == document.documentElement.clientWidth/2){
      movingSquare.classList.add('pause');
      button.classList.add('hide');
      congratz.classList.add('scale');
}
})

restart.addEventListener('click', function(){
    clickCounter = 0;
    triesCount.textContent = 0;
    targetValue.textContent = "0px";
    lastAttemptScore.textContent = "0px";
    movingSquare.classList.remove('animation');
    button.classList.add('hide');
    congratz.classList.remove('scale');
})










