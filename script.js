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
  let temp = [0]
  let temp2 = [0,1]
  for(let i in Array(8)) {
    checkVals(temp,temp2)
    temp.push(1)
    temp2.push(1)
  }
}
function update() {
  $("bms").innerHTML = "("+bms.join(")(")+")";
}
$ = _ => document.getElementById(_);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
