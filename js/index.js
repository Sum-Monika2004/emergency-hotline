// >>>>>>> 1 >>> complete

const loVe = document.querySelectorAll("#love");
const loveCount = document.getElementById("love-count");
let count = 0;

for (let lv of loVe) {
  lv.addEventListener("click", function () {
    count++;

    loveCount.textContent = count;
  });
}

const btnCall = document.querySelectorAll("#btn-call");
const coin = document.getElementById("coin-count");
let cC = 100;
let sNm = document.querySelectorAll("#s-nm");
let sNum = document.querySelectorAll("#s-num");
for (const btn of btnCall) {
  btn.addEventListener("click", function () {
    if (cC >= 20) {
      cC = coin - 20;
      alert("Calling " + sNm + sNum);
    } else {
      alert("Not enough coin");
    }
  });
}
