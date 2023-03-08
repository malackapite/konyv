import json from "./tartalom.json" assert { type: "json" };

document.body.innerHTML+=`<div id="konyv" onmousemove="mozog()"></div>`
for (let ix = 0; ix < json.oldalak.length; ix++) {
    document.getElementById("konyv").innerHTML+=`
    <div class="oldal" onclick="lapoz(${ix})" style="z-index: ${-ix};">
            <div class="jobb">
               ${json.oldalak[ix].jobb}
            </div>
            <div class="bal" style="transform: rotateY(-180deg);">
            ${json.oldalak[ix].bal}
            </div>
    </div>`
}

for(var ix=1; ix < document.getElementsByClassName("oldal").length-1; ix++){
    document.getElementsByClassName("jobb")[document.getElementsByClassName("oldal").length-1-ix].style.width=400-2*ix+"px";
    document.getElementsByClassName("bal")[ix].style.width=400-2*ix+"px";
  }