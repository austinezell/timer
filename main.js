{
  function validate(evt){
    evt.target.value = evt.target.value.replace(/[^0-9]/g, '');
  }
  const $inputTimer = document.getElementById('timer-input'); 
  $inputTimer.addEventListener('keyup', validate);

  function onSubmit(evt) {
    
    evt.preventDefault();
    clearInterval(timerId);
    setTimer($inputTimer.value);
    return false;

  }
  document.getElementById('updateTimer').addEventListener('submit', onSubmit);

  let timerId;
  const beebBeepBeep = new Audio('beep-05.wav')
  function setTimer(time = 30) {
    timerId = setInterval(function(){
      beebBeepBeep.play()
    }, time * 1000)
  }
  setTimer();
}