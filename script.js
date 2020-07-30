var bms = [0];
var display = "(0)";
var factor = 10;
setInterval(update, 100);
function matrixUp() {
  bms.push(0);
}
function checkVals(a,b) {
  if (bms.slice(bms.length - (factor * a.length), bms.length).join(",") == (a.join(",") + ",").repeat(factor-1) + a.join(",")) {
    while (bms.slice(bms.length - a.length, bms.length).join(",") == a.join(",")) {
      for (i = 0; i < a.length; i++) {
        bms.pop();
      }
    }
    bms = bms.concat(b);
  }
}
function maxMatrix() {
  checkVals([0], [0,1]);
  checkVals([0,1], [0,1,1]);
  checkVals([0,1,1], [0,1,1,1]);
  checkVals([0,1,1,1], [0,1,1,1,1]);
  checkVals([0,1,1,1,1], [0,1,1,1,1,1]);
  checkVals([0,1,1,1,1,1], [0,1,1,1,1,1,1]);
  checkVals([0,1,1,1,1,1,1], [0,1,1,1,1,1,1,1]);
  checkVals([0,1,1,1,1,1,1,1], [0,1,1,1,1,1,1,1,1]);
  checkVals([0,1,1,1,1,1,1,1,1], [0,1,1,1,1,1,1,1,1,1]);
  checkVals([0,1,1,1,1,1,1,1,1,1], [0,1,2]);
}
function displayMatrix() {
  display = ``;
  for (i = 0; i <= bms.length -1; i++) {
    display = display.concat("", `(${bms[i]})`);
  }
}
function update() {
  displayMatrix();
  get("bms").innerHTML = display;
}
function get(id) {
  return document.getElementById(id);
}
