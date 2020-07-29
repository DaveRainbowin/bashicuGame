var bms = [0];
var display = "(0)";
var factor = 10;
setInterval(update, 100);
function matrixUp() {
  bms.push(0);
}
function maxMatrix() {
  if(bms.slice(bms.length-factor, bms.length).join(",")=="0,0,0,0,0,0,0,0,0,0") {while(bms[bms.length-1] == 0) bms.pop(); bms.push(0); bms.push(1)}
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
