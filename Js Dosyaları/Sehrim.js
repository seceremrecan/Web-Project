const leftArr = document.getElementById("leftArr");
const rightArr = document.getElementById("rigthArr");
const textDiv = document.querySelector(".texts");
const sliderCon = document.querySelector(".sliderCon"); // to swipe left / right on mobile
let index = 0;

const texts = [
  "1993 senesinde Japonya Ortadoğu Kültür Merkezi tarafından inşa edilen Japon Bahçesi, Kalehöyük kazılarının bir hatırası yaptırılmıştır. Özellikle de kış aylarında karın yağmasıyla birlikte muhteşem bir görüntüye kavuşan bahçe, fotoğraf çekimi için ideal alanların başında yer almaktadır. Kırşehir’in Kaman ilçesinde bulunan bahçe yıl içerisinde pek çok ziyaretçiyi ağırlamaktadır. Ağaçlarla ile bezeli bahçe içerisinde bir çağlayan, Sumeru Dağı minyatürü ve çok sayıda göletler yer alıyor. Japonya sınırları dışında yer alan en büyük botanik bahçesi olarak görülen mekanı ziyaret etmek size keyif verecektir",
  "M.Ö. 3 binli senelere tarihlenen Kırşehir’de gerçekleştirilen kazı çalışmalarının neticesinde pek çok kalıntı elde edilmiş olup bu bulgular için bir müzeye ihtiyaç duyulmuş ve  1936 yılında müze çalışmalarına başlanmıştır. İlk etapta Alaaddin Cami’den alınan eserler daha sonra 1980 yılında Eski Eser Komisyonu kurulmuştur Sonrasında İl Kültür ve Turizm Müdürlüğü binasında 1985 yılında sergilenmeye başlanmıştır. Yoğun uğraşlar sonucunda 1996 senesinde açılan Kırşehir Müzesi içerisinde yer alan zengin eserleriyle ziyaretçilerini ağırlamaya devam ediyor. Üst katında etnografik eserlere, alt katında ise arkeolojik eserlere ayrılan müzede toplamda üç bin üç yüz eser kalıntısı bulunmaktadır",

  "Kırşehir’in doğal güzellikleri arasında kendini gösteren Seyfe Gölü, şehir merkezine 35 kilometre uzaklıkta konumlanmaktadır. Gölde 187 farklı kuş türüne ev sahipliği yapan tarihi İpek Yolu ile endemik bitkileri bir arada buluşturuyor olup I. Derece Doğal SİT Alanı olarak kabul edilerek koruma altına alınmıştır. Piknik ve foto safari yapmak için tercih edebileceğiniz Seyfe, biyolojik araştırmalar için oldukça elverişlidir. Yalnızca bir doğa gezisi olmayacak, tarihi de keşfedeceksiniz! Orta Anadolu’da yer alan tuz göllerinden biri olup sazlık, sulak alan veya bataklıklardan oluşmaktadır. Dünyanın en büyük flamingo topluluğu 320 bin kuşa ev sahipliği yapmaktadır.",
  "Kırşehir’in Mucur ilçesinde bulunan volkanik Obruk Gölü, yerin en yaklaşık 50 metre altında kalmaktadır. El değmemiş güzelliği ile göz alıcı güzelliğe sahip olup yakın bir tarihte yapılacak olan düzenlemeler ile keyifli zaman geçirmeniz için çalışmalar yapılmakta. Kayseri Kültür ve Tabiat Varlıklarını Koruma Kurulu ile I. derece doğal sit alanı olarak koruma altına alınan Obruk Gölü çevresinin, etrafı bir duvarı andıran tabi kayalıklarla çevrelendiğini göreceksiniz. Gölün çevresi 100 metre kadar çapı ise 900 metre olup aynalı ve kambur sazan ile kadife türünde balıklar yaşamaktadır.",
  "Kırşehir, Kırşehir ilinin şehir merkezidir. 1941 yılında Ankara'da toplanan I. Coğrafya Kongresi'nde bu bölgeye ve bölgenin Orta Kızılırmak Bölümü'ne alındı. Özellikle son yıllarda köylerin göç vermesiyle nüfus merkez ilçede yoğunlaşmıştır. 1927'de 13.000 olan 1990'da 73.538'e, 2000'de 88.105'e çıkmıştı. 2010'da 110.000 olan merkez ilçe nüfusu 2020 itibarıyla 158.954'tür.",
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
