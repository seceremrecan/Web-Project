const leftArr = document.getElementById("leftArr");
const rightArr = document.getElementById("rigthArr");
const textDiv = document.querySelector(".texts");
const sliderCon = document.querySelector(".sliderCon"); // to swipe left / right on mobile
let index = 0;

const texts = [
  "Neşet Ertaş sesi sazı ile babası Muharrem ERTAŞ’ın yolunu sürdüren Neşet ERTAŞ, 1938 yılında Kırşehir’ in Kırtıllar köyünde dünyaya geldi. İlkokul çağlarında önce keman, sonra da bağlama çalmasını öğrendi. Babası Muharrem ERTAŞ ile birlikte yörenin düğünlerinde saz çalıp türkü söylemeye başladı.Neşet ERTAŞ babası Muharrem ERTAŞ ile adeta Anadoludaki en olgun ve seviyesine erişen bu Türkmen/Abdal müzik birikiminin yeni bir yorumcusudur. Yoğun yöresel özellikleri ve baskın mahallilik unsurları ile donanmış bu müziği yöremizin dışına çıkarmış, ülke genelinde ve hatta yurtdışında bilinmesi ve tanınmasını sağlamıştır.Neşet Ertaş birçok album, kaset çıkardı ve konserler verdi.Neşet Ertaş Unesco somut olmayan kültürel mirasın korunması sözleşmesi kapsamında “ Yaşayan İnsan Hazineleri Türkiye Ulusal Envanteri ” yer almaktadır.  Ayrıca 25 Nisan 2011 tarihinde İTÜ Devlet Konservatuarı tarafından Fahri doktora ödülüne layık görülmüş, bağlamadaki tavrı ve türküleri konservatuarlarda ders olarak okutulmuştur.",
  
  
  
  
  "Cacabey Cami Kırşehir kent merkezinde bulunan medrese Selçuklu döneminde Kılıçaslan oğlu Keyhüsrev zamanında Kırşehir emiri Nurettin Cibril Bin Cacabey tarafından 1271-1272 yıllarında bir gözlem evi medrese olarak yaptırılmıştır.Eser sonradan camiye çevrilmiştir. Birkaç kez onarılmış olup minaresindeki mavi çiniler nedeniyle halk arasında “ cıncıklı” camii adı ile  anılmaktadır. Medrese kesme taştan yapılmış olup kare planlıdır. İki eyvanlı kapalı avlulu medreseler gurubuna girmektedir.Döneminde astronomi yüksek okulu olarak hizmet vermiştir.Mukarnas kavsaralı  iki renkli taş işçiliğinin uygulandığı taç kapısı bulunmaktadır. Kuzeyindeki giriş kapısı işlemelidir, yapıdan ayrı olan tuğladan yapılmış çinili ve tek şerefeli minaresi ilk önce gözlem yeri  olarak kullanıldığını göstermektedir.Ana eyvanda yer alan karşılıklı iki sütun  koni ve küre biçimlerinin üst üste bindirilmesiyle oluşturulmuştur. Bu sütun düzenlemesinin Anadolu Türk sanatında başka bir örneği bulunmamaktadır.  Cacabey camiinin sol bitişiğinde Cacabey’e ait bir türbe bulunmaktadır.",
  

  "Üçayak Kilisesi, 10. yüzyılda yapıldığı tahmin edilen, Kırşehir'in 30 kilometre kuzeyinde yer alan çift kubbeli ve tamamen tuğladan yapılmış Doğu Roma İmparatorluğu kilisesi. Çevresindeki antik yerleşim yerlerinden oldukça izole ve başka hiçbir tarihi eser kalıntısı barındırmayışı açısından benzersiz bir kilisedir. Günümüzde kolonları hariç bütün kısımları yıkılmıştır.Kiliseyle ilgili ilk bilgiler 1842'de İngiliz gezgin W. F. Ainsworth tarafından verilmiştir. Ainsworth'un çizdiği ilk gravürler, yapının asıl hâli hakkında daha fazla ipucu vermiştir. 1900'de harabeleri ziyaret eden İngiliz arkeolog J. W. Crowfoot ve 1903'te Avusturyalı sanat tarihçisi J. Strzygowski ise kilisenin ilk fotoğraflarını çekmiş ve daha detaylı bilgiler vermiştir. Kiliseye dair oldukça detaylı ve kapsamlı bir inceleme ise Türk sanat tarihçisi Semavi Eyice tarafından hazırlanmış ve 1968'de bir Fransız arkeoloji dergisinde yayınlanmıştır. Eyice, kilisenin restitüsyonunu ortaya çıkardığı bu çalışmasında kilisenin sağlam iken kubbesiyle beraber 17 metre gibi şaşırtıcı bir yüksekliğe sahip olduğu sonucuna ulaşmıştır. Öte yandan bu kilisenin Türkiye sınırlarında bulunan, tamamen tuğladan yapılmış ilk ve tek kilise örneği olduğunu da ortaya çıkarmıştır.Eyice, Temmuz 1970'te İstanbul Üniversitesi'nden öğrencileri ve çevredeki köylü geçnlerin yardımıyla kazı çalışması yapmıştır. Bu kazıyla kilisenin apsis, narteks, kubbe, kemerleri ve iç yapısı hakkında daha fazla bilgiye ulaşılmıştır.Kilisenin ayakta kalmayı başaran kubbe kemerleri, pandatifleri ve kasnak parçaları ise 1938 Kırşehir depreminde yıkılmıştır. ",

  
  
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
