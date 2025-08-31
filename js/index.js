const loVe = document.querySelectorAll("#love");
const loveCount = document.getElementById("love-count");
let count = 0;
for (let lv of loVe) {
  lv.addEventListener("click", function () {
    count++;

    loveCount.textContent = count;
  });
}

document.getElementById("btn-clear").addEventListener("click", function () {
  const allLi = document.getElementById("lists");
  allLi.innerHTML = "";
});

const btnCall = document.querySelectorAll("#btn-call");
const coin = document.getElementById("coin-count");
let cC = 100;
for (const btn of btnCall) {
  btn.addEventListener("click", function () {
    const card = btn.closest(".card");
    const nmS = card.querySelector(".s-nm").textContent;
    const numS = card.querySelector(".s-num").textContent;
    if (cC < 20) {
      alert("Not enough coin");
      return;
    } else {
      cC -= 20;
      coin.textContent = cC;
    }
    alert(`Calling ${nmS} ${numS}`);

    const tm = new Date().toLocaleTimeString();
    const li = document.createElement("div");
    li.innerHTML = `<div class="flex justify-between items-center bg-[#FAFAFA] rounded-lg p-4 mb-4">
              <div class="list-">
                <h1 class="font-semibold"">${nmS}</h1>
                <p class="text-[#5C5C5C]"">${numS}</p>
              </div>
              <div><p>${tm}</p></div>
            </div>
`;
    document.getElementById("lists").prepend(li);
  });
}

const copyCount = document.getElementById("copy-count");
const btnCopy = document.querySelectorAll("#btn-copy");
let copyC = 2;
for (let btnCp of btnCopy) {
  btnCp.addEventListener("click", function () {
    const card = btnCp.closest(".card");
    const numS = card.querySelector(".s-num").textContent;
    copyC++;
    navigator.clipboard.writeText(numS);
    alert(`${numS} copied`);
    copyCount.textContent = copyC + " Copy";
  });
}
