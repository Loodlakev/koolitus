let firstName = prompt('Mis on sinu nimi?');

if (firstName.length >= 6) {
  document.getElementById('name').innerHTML =
    'Tere, ' +
    firstName +
    '!' +
    ' Küll sul on pikk suurepärane nimi.';
  document.getElementById('image').innerHTML =
    "<img src='https://c.tenor.com/d80bOjd86a8AAAAM/tall-girl-ekaterina.gif' />";
} 
else {
  document.getElementById('name').innerHTML =
    'Tere, ' + firstName + '!' + ' Küll sul on imeline lühike nimi.';
  document.getElementById('image').innerHTML =
    "<img src='https://c.tenor.com/oitkzb4yR0AAAAAd/short-fight.gif' />";
}
