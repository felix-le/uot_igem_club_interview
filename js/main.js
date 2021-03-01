window.addEventListener('load', (event) => {
  marioRun();
});


// Mario run function
function marioRun(){
  const MARIO = document.querySelector("#mario");
  var intervalId = null;
  let marioPosition = 30;
  function runMario(){
    marioPosition += PXIN1S;
    MARIO.style.left = `${marioPosition}%`  
    return marioPosition;
  }
  function runInterval(){
    if(marioPosition < 90){
      setTimeout(function(){
        if(MARIO.classList.contains('mario__jump')){
          MARIO.classList.remove('mario__jump');
          MARIO.classList.add('mario__forward');
          runMario();
  
        }else{
          MARIO.classList.add('mario__jump');
          MARIO.classList.remove('mario__forward');
        }
      },1000)
    } else{
        clearInterval(intervalId)
    }
  }
  intervalId = setInterval(runInterval, 2000);
}