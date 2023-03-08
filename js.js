let hol = 0;
const konyv=document.getElementsByClassName("oldal")



function lapoz(nth) {
 
  if (nth == hol) {
    konyv[hol].style.transform = "rotateY(180deg)"//"rotateY(180deg) rotateX(27deg) rotateY(0deg) rotateZ(10deg)";
    konyv[hol].getElementsByTagName("div")[0].style.transform = "rotateY(-180deg)";
    konyv[hol].getElementsByTagName("div")[1].style.transform = "";
    konyv[hol].style.zIndex = hol;
    hol++;
  } else {
    hol--;
    konyv[hol].style.transform ="";
    konyv[hol].getElementsByTagName("div")[0].style.transform = "";
    konyv[hol].getElementsByTagName("div")[1].style.transform = "rotateY(-180deg)";
    konyv[hol].style.zIndex = -hol;
  }
}

function mozog(){
  // var hossz = document.getElementsByClassName("oldal")[0].clientWidth*2; 
  // var magas = 600;
  // document.body.style.setProperty('--egerX', ((document.getElementsByClassName("oldal")[0].offsetLeft+hossz/2)-event.clientX)/(hossz/2)+"deg");
  // document.body.style.setProperty('--egerY', ((document.getElementsByClassName("oldal")[0].offsetTop+magas/2)-event.clientY)/(magas/2)*-1+"deg");
}