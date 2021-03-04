// Bonus
const beginStory = $('#beginStory');
const overlay = $('.overlay');
const storyContent = $('marquee').textContent;

beginStory.addEventListener('click', () => {
  marioRun();
  yoshiRun();
  peachRun();
  singleBottle();
  multiBottle();
  igemToLogo();
  bulletMove();
  overlay.style.display = 'none';
  speakNow(storyContent);
});

// Mario run function
function marioRun() {
  const MARIO = $('#mario');
  const midleCoin1 = $('.mid_btn_coin1');
  const midleCoin2 = $('.mid_btn_coin2');
  const midleCoin3 = $('.mid_btn_coin3');
  const midleCoin4 = $('.mid_btn_coin4');
  const wall2 = $('.wall_2');
  const wall3 = $('.wall_3');
  const wall4 = $('.wall_4');
  const rightHand = $('#rightHand');
  const leftHand = $('#leftHand');
  // setAttribute("class", "democlass");
  let intervalMarioId = null;
  let marioPosition = 32;
  function calcMarioPoisition() {
    marioPosition += PXIN1S;
    MARIO.style.left = `${marioPosition}%`;
    return marioPosition;
  }

  function runInterval() {
    if (marioPosition < 71) {
      setTimeout(function () {
        if (MARIO.classList.contains('mario__jump')) {
          MARIO.classList.remove('mario__jump');
          MARIO.classList.add('mario__forward');
          calcMarioPoisition();
          rightHand.setAttribute('transform', 'translate(0,-90) rotate(0)');
          leftHand.setAttribute('transform', 'translate(0,90) rotate(0)');
        } else {
          MARIO.classList.add('mario__jump');
          MARIO.classList.remove('mario__forward');
          rightHand.setAttribute('transform', 'translate(0,0)');
          leftHand.setAttribute('transform', 'translate(0,0)');
        }
      }, 1000);
      if (
        marioPosition > 33 &&
        marioPosition < 36 &&
        MARIO.classList.contains('mario__jump')
      ) {
        midleCoin1.style.opacity = '0';
      }
      if (marioPosition > 37 && MARIO.classList.contains('mario__jump')) {
        midleCoin3.style.opacity = '0';
      }
      if (marioPosition > 41 && MARIO.classList.contains('mario__jump')) {
        midleCoin4.style.opacity = '0';
      }
      if (marioPosition > 43 && MARIO.classList.contains('mario__jump')) {
        midleCoin2.style.opacity = '0';
      }

      if (marioPosition > 48 && MARIO.classList.contains('mario__jump')) {
        wall2.style.opacity = '0';
      }

      if (marioPosition > 56 && MARIO.classList.contains('mario__jump')) {
        wall3.style.opacity = '0';
      }
      if (marioPosition > 63 && MARIO.classList.contains('mario__jump')) {
        wall4.style.opacity = '0';
      }
    } else {
      clearInterval(intervalMarioId);
      MARIO.classList.remove('mario__jump');
      rightHand.setAttribute('transform', 'translate(0,0)');
      leftHand.setAttribute('transform', 'translate(0,0)');
    }
  }
  intervalMarioId = setInterval(runInterval, 1000);
}

function yoshiRun() {
  const YOSHI = document.querySelector('#yoshi');
  const yoshiLeftFoot = document.querySelector('#leftFoot');
  const yoshiRightFoot = document.querySelector('#rightFoot');

  let intervaYoshi = null;
  let yoshiPosition = 24;
  function calcYoshiPoisition() {
    yoshiPosition += PXIN1S;
    YOSHI.style.left = `${yoshiPosition}%`;
    return yoshiPosition;
  }

  function runInterval() {
    if (yoshiPosition < 64) {
      setTimeout(function () {
        if (YOSHI.classList.contains('yoshi__forward')) {
          calcYoshiPoisition();
          yoshiRightFoot.setAttribute(
            'transform',
            'translate(-40,0) rotate(0)'
          );
          yoshiLeftFoot.setAttribute('transform', 'translate(40,0) rotate(0)');
        }
      }, 1000);
      yoshiRightFoot.setAttribute('transform', 'translate(0,0) rotate(0)');
      yoshiLeftFoot.setAttribute('transform', 'translate(0,0) rotate(0)');
    } else {
      clearInterval(intervaYoshi);
      YOSHI.classList.remove('yoshi__forward');
      yoshiRightFoot.setAttribute('transform', 'translate(0,0) rotate(0)');
      yoshiLeftFoot.setAttribute('transform', 'translate(0,0) rotate(0)');
    }
  }
  intervaYoshi = setInterval(runInterval, 2000);
}

function peachRun() {
  const PEACH = document.querySelector('.peach');
  const peachArm = document.querySelector('#_x3C_peachArm_x3E_');

  let intervalPeach = null;
  let peachPosition = 41;
  function calcPeachPosition() {
    peachPosition += PXIN1S;
    PEACH.style.left = `${peachPosition}%`;
    return peachPosition;
  }

  function runInterval() {
    if (peachPosition < 75) {
      setTimeout(function () {
        if (PEACH.classList.contains('peach__forward')) {
          peachArm.setAttribute('transform', 'translate(0,-30) rotate(0)');
          calcPeachPosition();
        }
      }, 1000);
      peachArm.setAttribute('transform', 'translate(0,0) rotate(0)');
    } else {
      clearInterval(intervalPeach);
      peachArm.setAttribute('transform', 'translate(0,0)');
      PEACH.classList.remove('peach__forward');
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
// Bullet move
function bulletMove() {
  const bullet = document.querySelector('.bullet-wrapper');
  bullet.classList.add('bullet-wrapper__move');
}
