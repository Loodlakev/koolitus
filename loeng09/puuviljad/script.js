let puuvili1 = {
    nimi: 'apelsin',
    liik: 'puuvili',
    varv: 'oranž',
    hinnang: 9,
    pilt: '.puuviljad/Apelsin-suur.jpg'
}
let puuvili2 = {
    nimi: 'banaan',
    liik: 'puuvili',
    varv: 'kollane',
    hinnang: 7,
    pilt: '.puuviljad/banaan.jpg'

}
let puuvili3 = {
    nimi: 'kiivi',
    liik: 'puuvili',
    varv: 'pruun',
    hinnang: 4,
    pilt: '.puuviljad/kiivi.jpeg'
}
let puuviljad = [puuvili1, puuvili2, puuvili3];

let sisuHTMLElement = document.getElementById('sisu');

for (let i = 0; i < puuviljad.length; i++) {
    sisuHTMLElement.innerHTML += '<div>' + puuviljad[i].nimi + '<ddiv>';
    console.log('ring:' + i + ';puuvili:' + puuviljad[i].nimi);
}
sisuHTMLElement.innerHTML += '<div>' + puuviljad[0].nimi + '<div>';
sisuHTMLElement.innerHTML += '<div>' + puuviljad[1].nimi + '<div>';
sisuHTMLElement.innerHTML += '<div>' + puuviljad[2].nimi + '<div>';