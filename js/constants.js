const FLOOR = '136px';
const SCREEN = screen.width;
const PXIN1S = changePxToPercent(15);
function changePxToPercent(px) {
  return (px / SCREEN) * 100;
}
