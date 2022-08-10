var myTextFull = `Davlat gerbi O'zbekiston Respublikasining 1992 yil 2 iyuldagi 616-XII-sonli «O'zbekiston Respublikasi Davlat gerbi to'g'risida»gi Qonuni bilan tasdiqlangan. O'zbekiston Respublikasi Davlat gerbi quyidagi ko'rinishga ega: tog'lar, daryolar va so'l tomoni bug'doy boshoqlaridan, o'ng tomoni esa chanoqlari ochilgan g'o'za shoxlaridan iborat chambarga o'ralgan gullagan vodiy uzra quyosh zarrin nurlarini sochib turadi. Gerbning yuqori qismida Respublika hurligining ramzi sifatida sakkizburchak tasvirlangan bo'lib, uning ichki qismida yarim oy va yulduz tasvirlangan. Gerbning markazida baxt va erksevarlik ramzi qanotlarini yozgan Humo qushi tasvirlangan. Gerbning pastki qismida O'zbekiston Respublikasi Davlat bayrog'ini ifoda etuvchi chambar lentasining bantida «O'zbekiston» deb yozib qo'yilgan. O'zbekiston Respublikasi Davlat gerbining rangli ko'rinishida: Humo qushi va daryolar kumush rangida; quyosh, boshoqlar, paxta chanoqlari va «O'zbekiston» yozuvi oltin rangida; g'o'za shoxlari va barglari, tog'lar va vodiy yashil rangda; chanoqlardagi paxta oq rangda; lenta O'zbekiston Respublikasi Davlat bayrog'ining ranglarini aks ettiruvchi uch xil rangda; sakkizburchak oltin zarhal bilan hoshiyalangan holda havo rangda; yarim oy va yulduzlar oq rangida tasvirlangan.`;

var myText = myTextFull.split(' ');
var i=0;

var trueResponse = 0;
var folseResponse = 0;

function start() {
  document.querySelector('.true').style.display='inline-block';
  document.querySelector('.folse').style.display='inline-block';
  document.querySelector('.next').style.display='inline-block';
  document.querySelector('.start').style.display='none';

  document.querySelector('h1').innerHTML=myText[i];
}

function next() {
  var myInput = document.querySelector('#myInput').value;
  if(myInput == myText[i]) {
    trueResponse++;
    document.querySelector('.true').innerHTML=trueResponse;
  }
  else {
    folseResponse++;
    document.querySelector('.folse').innerHTML=folseResponse;
  }
  
  i++;
  document.querySelector('h1').innerHTML=myText[i];

  document.querySelector('#myInput').value='';
}