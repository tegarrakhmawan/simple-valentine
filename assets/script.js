let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");

let textArray = [
  "Loh",
  "Kenapa No?",
  "Beneran enih??",
  "Baby please",
  "Kalo baby pencet no, Aku benar2 sedih",
  "Beneran sedih yang sedih sampe mau meninggal",
  "Dahlah mau meninggal",
  "Kidding, ayo baby tekan yes",
  "Sayangku cintaku please tekan yes",
  "Mit",
  "Mitaaaa",
  "Mitaa heii",
];

let textDisplayIndex = -1;

button1.addEventListener("click", () => {
  textDisplayIndex++;
  if (textDisplayIndex > textArray.length - 1) {
    textDisplayIndex = 0;
  }

  button1.innerHTML = textArray[textDisplayIndex];
  let currWidth = button2.clientWidth;
  button2.style.width = currWidth + 50 + "px";
  button2.style.height = currWidth + 50 + "px";
  button2.style.fontSize = "50px";
});

// bom
