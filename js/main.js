window.addEventListener('load', (event) => {
  marioRun();
  yoshiRun();
  peachRun();
  singleBottle();
  multiBottle();
  igemToLogo();
});

// Mario run function
function marioRun() {
  const MARIO = document.querySelector('#mario');
  let intervalMarioId = null;
  let marioPosition = 32;
  function calcMarioPoisition() {
    marioPosition += PXIN1S;
    MARIO.style.left = `${marioPosition}%`;
    return marioPosition;
  }

  function runInterval() {
    if (marioPosition < 90) {
      setTimeout(function () {
        if (MARIO.classList.contains('mario__jump')) {
          MARIO.classList.remove('mario__jump');
          MARIO.classList.add('mario__forward');
          calcMarioPoisition();
        } else {
          MARIO.classList.add('mario__jump');
          MARIO.classList.remove('mario__forward');
        }
      }, 1000);
    } else {
      clearInterval(intervalMarioId);
    }
  }
  intervalMarioId = setInterval(runInterval, 1000);
}

function yoshiRun() {
  const YOSHI = document.querySelector('#yoshi');
  let intervaYoshi = null;
  let yoshiPosition = 24;
  function calcYoshiPoisition() {
    yoshiPosition += PXIN1S;
    YOSHI.style.left = `${yoshiPosition}%`;
    return yoshiPosition;
  }

  function runInterval() {
    if (yoshiPosition < 90) {
      setTimeout(function () {
        if (YOSHI.classList.contains('yoshi__forward')) {
          calcYoshiPoisition();
        } else {
          YOSHI.classList.add('yoshi__forward');
        }
      }, 1000);
    } else {
      clearInterval(intervaYoshi);
    }
  }
  intervaYoshi = setInterval(runInterval, 2000);
}

function peachRun() {
  const PEACH = document.querySelector('#peach');
  let intervalPeach = null;
  let peachPosition = 41;
  function calcPeachPosition() {
    peachPosition += PXIN1S;
    PEACH.style.left = `${peachPosition}%`;
    return peachPosition;
  }

  function runInterval() {
    if (peachPosition < 90) {
      setTimeout(function () {
        if (PEACH.classList.contains('peach__forward')) {
          calcPeachPosition();
        } else {
          PEACH.classList.add('peach__forward');
        }
      }, 1000);
    } else {
      clearInterval(intervalPeach);
    }
  }
  intervalPeach = setInterval(runInterval, 2000);
}

// plastic bottle

function singleBottle() {
  const singleBottle = document.querySelector('.single_plastics_bottle');

  function runInterval() {
    setTimeout(function () {
      if (singleBottle.classList.contains('singleBottle__down')) {
        singleBottle.classList.remove('singleBottle__down');
        singleBottle.classList.add('singleBottle__up');
      } else {
        singleBottle.classList.remove('singleBottle__up');
        singleBottle.classList.add('singleBottle__down');
      }
    }, 1000);
  }
  intervaYoshi = setInterval(runInterval, 1000);
}

function multiBottle() {
  const multi_plastics_bottle = document.querySelector(
    '.multi_plastics_bottle'
  );

  function runInterval() {
    setTimeout(function () {
      if (
        multi_plastics_bottle.classList.contains('multi_plastics_bottle__down')
      ) {
        multi_plastics_bottle.classList.remove('multi_plastics_bottle__down');
        multi_plastics_bottle.classList.add('multi_plastics_bottle__up');
      } else {
        multi_plastics_bottle.classList.remove('multi_plastics_bottle__up');
        multi_plastics_bottle.classList.add('multi_plastics_bottle__down');
      }
    }, 1000);
  }
  intervaYoshi = setInterval(runInterval, 1000);
}

// iGemTo logo

function igemToLogo() {
  const igemto_logo = document.querySelector('.igemto_logo');

  function runInterval() {
    setTimeout(function () {
      if (igemto_logo.classList.contains('igemto_logo__down')) {
        igemto_logo.classList.remove('igemto_logo__down');
        igemto_logo.classList.add('igemto_logo__up');
      } else {
        igemto_logo.classList.remove('igemto_logo__up');
        igemto_logo.classList.add('igemto_logo__down');
      }
    }, 1000);
  }
  intervaYoshi = setInterval(runInterval, 1000);
}
