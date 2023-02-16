hol = 0;
konyv=document.getElementsByClassName("oldal")
function lapoz(nth) {
  if (nth == hol) {
    konyv[hol].style.transform = "rotateY(180deg) rotateX(10deg)";
    konyv[hol].getElementsByTagName("div")[0].style.transform = "rotateY(180deg) rotateX(10deg)";
    konyv[hol].getElementsByTagName("div")[1].style.transform = "rotateY(0deg) rotateX(10deg)";
    konyv[hol].style.zIndex = hol;
    hol++;
  } else {
    hol--;
    konyv[hol].style.transform ="rotateY(0deg) rotateX(-10deg)";
    konyv[hol].getElementsByTagName("div")[0].style.transform = "rotateY(0deg) rotateX(-10deg)";
    konyv[hol].getElementsByTagName("div")[1].style.transform = "rotateY(180deg) rotateX(-10deg)";
    konyv[hol].style.zIndex = -hol;
  }

  // document.getElementsByTagName("div")[nth].style.transform="rotateY(-180deg) rotateX(10deg)";
  console.log(nth, hol);
}
