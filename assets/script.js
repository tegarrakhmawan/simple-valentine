let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");

let textArray = [
  "Loh loh",
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
  "Please sayangkuuu 🥺💍",
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
  button2.style.fontSize = "40px";
});

// bom
const container = document.querySelector(".container");
const myButton = document.querySelectorAll("button");
const textKeSatu = document.querySelector(".text-one");
const newTextSatu = document.createElement("h1");
const newTextDua = document.createElement("h1");
const myImage = document.querySelector("img");
button2.addEventListener("click", () => {
  // image
  myImage.src = "https://media.tenor.com/TWoRbtqnMJkAAAAj/peach-goma.gif";
  myImage.className = "h-[200px] rounded-full";
  // button
  for (let i = 0; i < myButton.length; i++) {
    myButton[i].remove();
  }
  // text
  // text ke satu
  textKeSatu.textContent = "Yeaaaaaayyyyyyyyy 😻";
  newTextSatu.innerHTML = "Semoga cepet sembuh yaa sayangkuu 🌹🌹";
  container.appendChild(newTextSatu);
  // text ke dua
  newTextDua.innerHTML = "I love you 💗";
  container.appendChild(newTextDua);
  // style new text
  newTextSatu.className = "text-2xl my-2 text-center";
  newTextDua.className = "text-4xl my-4 text-center";
});
