var elMainForm = document.querySelector('.main-form');
var elPiyodaResult = document.querySelector('.piyoda-item');
var elVelikResult = document.querySelector('.velik-item');
var elMoshinResult = document.querySelector('.moshin-item');
var elSamalyotResult = document.querySelector('.samalyot-item');

// STANDARD DISTANCES
var piyodaSpeed = 3.6;
var velikSpeed = 20.1;
var moshinSpeed = 70;
var samalyotSpeed = 800;

elMainForm.addEventListener('submit', function (evt) {

  evt.preventDefault();

  var targetDistance = parseFloat(elMainForm.querySelector('.distance-input').value.trim(), 10);
  targetDistance.toFixed(2);
  var targetResultPiyoda = (targetDistance / piyodaSpeed).toFixed(2);
  var targetResultVelik = (targetDistance / velikSpeed).toFixed(2);
  var targetResultMoshin = (targetDistance / moshinSpeed).toFixed(2);
  var targetResultSamalyot = (targetDistance / samalyotSpeed).toFixed(2);

  if (targetDistance > 0) {
    elPiyodaResult.textContent = targetResultPiyoda;
    elVelikResult.textContent = targetResultVelik;
    elMoshinResult.textContent = targetResultMoshin;
    elSamalyotResult.textContent = targetResultSamalyot;
  } else if (isNaN(targetDistance)) {
    elPiyodaResult.textContent = '0';
    elVelikResult.textContent = '0';
    elMoshinResult.textContent = '0';
    elSamalyotResult.textContent = '0';
    alert(`Raqam yozing brodar-aziz!`);

  } else {
    elPiyodaResult.textContent = '0';
    elVelikResult.textContent = '0';
    elMoshinResult.textContent = '0';
    elSamalyotResult.textContent = '0';
    alert(`Musbat raqam kiritng birodar!`);
  }

});