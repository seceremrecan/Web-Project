const leftArr = document.getElementById("leftArr");
const rightArr = document.getElementById("rigthArr");
const textDiv = document.querySelector(".texts");
const sliderCon = document.querySelector(".sliderCon"); // to swipe left / right on mobile
let index = 0;

const texts = [
  "Neşet Ertaş (1938; Akpınar, Kırşehir - 25 Eylül 2012; İzmir), Türk halk ozanı, abdallık geleneğinin son büyük temsilcisi. Bozkırın Tezenesi olarak tanınır.",
  "Cacabey Medresesi, Kırşehir il merkezinde yer almaktadır. Medrese, H. 671 / M. 1272 yılında Anadolu Selçuklu Sultanı Kılıç Arslan'ın oğlu II. Gıyaseddin Keyhüsrev döneminde, Kırşehir Valisi Nureddin Cibril bin Cacabey tarafından yaptırılmıştır.",
  "Üçayak Kilisesi, 10. yüzyılda yapıldığı tahmin edilen, Kırşehir'in 30 kilometre kuzeyinde yer alan çift kubbeli ve tamamen tuğladan yapılmış Doğu Roma İmparatorluğu kilisesi. Çevresindeki antik yerleşim yerlerinden oldukça izole ve başka hiçbir tarihi eser kalıntısı barındırmayışı açısından benzersiz bir kilisedir. Günümüzde kolonları hariç bütün kısımları yıkılmıştır.",
  "1482 yılında, Ahilik Teşkilatının kurucusu Ahî Evran  adına yaptırılan Cami ve Türbe, Kırşehir il merkezinde bulunmaktadır.Türbeye, cami içinden bir merdivenle çıkılmaktadır.Kırşehir il merkezinde yer almaktadır.Zaviye; planlı mescit, Ahiliğin kurucusu Ahi Evran’ın türbesi ve zaviye- tekke olarak kullanılan mekanlardan oluşmaktadır.",
];

function slideLeft() {
  if (index == 0) index = texts.length - 1;
  else index--;
  gsap.to(".images", 0.3, { x: `${-index * 100}%` });
  textDiv.textContent = texts[index];
  gsap.from(textDiv, 0.5, { y: -20, opacity: 0, ease: "power3.out" });
}

function slideRight() {
  if (index == texts.length - 1) index = 0;
  else index++;
  gsap.to(".images", 0.3, { x: `${-index * 100}%` });
  textDiv.textContent = texts[index];
  gsap.from(textDiv, 0.5, { y: -20, opacity: 0, ease: "power3.out" });
}

leftArr.addEventListener("click", slideLeft);
rightArr.addEventListener("click", slideRight);

// SWIPE FUNCTIONALITY FOR MOBILE ⬇
let start = null;
sliderCon.addEventListener("touchstart", function (event) {
  if (event.touches.length === 1) start = event.touches.item(0).clientX;
  else start = null;
});

sliderCon.addEventListener("touchend", function (event) {
  let offset = 30; // at least 30px
  if (start) {
    let end = event.changedTouches.item(0).clientX;
    if (end > start + offset) slideLeft();
    if (end < start - offset) slideRight();
  }
});
