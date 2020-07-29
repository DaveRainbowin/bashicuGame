var bms = [0];
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
  function getBMSArrays(a, b, c) {
    return a.concat(Array(c).fill(b));
  }
  for (let i in Array(9)) {
    checkVals(getBMSArrays([0], 1, i),getBMSArrays([0], 1, i+1)) 
  }
}
function update() {
  $("bms").innerHTML = "("+bms.join(")(")+")";
}
$ = _ => document.getElementById(_);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
