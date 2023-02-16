hol = 0;

function lapoz(nth) {
  if (nth == hol) {
    document.getElementsByTagName("div")[hol].style.transform = "rotateY(180deg) rotateX(10deg)";
    document.getElementsByTagName("div")[hol].style.zIndex = hol;
    hol++;
  } else {
    hol--;
    document.getElementsByTagName("div")[hol].style.transform ="rotateY(0deg) rotateX(-10deg)";
    document.getElementsByTagName("div")[hol].style.zIndex = -hol;
  }

  // document.getElementsByTagName("div")[nth].style.transform="rotateY(-180deg) rotateX(10deg)";
  console.log(nth, hol);
}
