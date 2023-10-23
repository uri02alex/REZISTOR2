function rgb2hsv (r, g, b) {
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
    diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100)
    };
}


function ii3(i){
var s=String(i)
l=s.lingth
if (l==1){s="00"+s}
console.log("'",s,"'")

return s
}


function setsubrezim(n){
subrezim=n
spaninfo.innerHTML="Выберите полоску № "+subrezim

}

//Для теста
function print1(){
console.log(data)
console.log(canvas)
}
//Для теста

function Test111(){
console.log("Test111")
divimg.innerHTML="";
}


function changetip(tip){
rez1.tip=tip
rez1.draw()
}


function drawtext(){
//console.log("drawtext ")
//console.log(rez1)
  ctx.font = "72px serif";
//ctx.fillText(rez1.stromsokr, rez1.X, rez1.Y-50);
//ctx.textBaseline = "hanging";
ctx.fillStyle = "blue";
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.strokeText(rez1.strom, rez1.X, rez1.Y-50);
}

function clicksablon(kod){
//console.log("clicksablon ",kod)
//rez1.kod[nomerkolca]=kod
rez1.setpolska(nomerkolca,kod)
nomerkolca++
ViboNomerRing(nomerkolca)
}