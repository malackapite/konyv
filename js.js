hol = 0;

for(var ix=1; ix < document.getElementsByClassName("oldal").length-1; ix++){
  document.getElementsByClassName("jobb")[document.getElementsByClassName("oldal").length-1-ix].style.width=400-2*ix+"px";
  document.getElementsByClassName("bal")[ix].style.width=400-2*ix+"px";
}

konyv=document.getElementsByClassName("oldal")
function lapoz(nth) {
  if (nth == hol) {
    konyv[hol].style.transform = "rotateY(180deg)";
    konyv[hol].getElementsByTagName("div")[0].style.transform = "rotateY(-180deg)";
    konyv[hol].getElementsByTagName("div")[1].style.transform = "rotateY(0deg)";
    konyv[hol].style.zIndex = hol;
    hol++;
  } else {
    hol--;
    konyv[hol].style.transform ="rotateY(0deg)";
    konyv[hol].getElementsByTagName("div")[0].style.transform = "rotateY(0deg)";
    konyv[hol].getElementsByTagName("div")[1].style.transform = "rotateY(-180deg)";
    konyv[hol].style.zIndex = -hol;
  }

  // document.getElementsByTagName("div")[nth].style.transform="rotateY(-180deg) rotateX(10deg)";
}
