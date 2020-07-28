var bms = [0];
var display = "(0)";
var factor = 10;
setInterval(update, 100);
function matrixUp() {
  bms.push(0);
}
function maxMatrix() {
  for (i = 0; i <= factor; i++) {
    if (bms[bms.length - factor] == i) {
      for (j = 1; j <= factor; j++) {
        bms.pop();
      }
      if (bms[bms.length - 1] != 0) {
        bms.unshift(0);
      }
      bms.push(i + 1);
    }
  }
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