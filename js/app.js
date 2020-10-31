var elMainForm = document.querySelector('.main-form');
var elPiyodaResult = document.querySelector('.piyoda-item');
var elVelikResult = document.querySelector('.velik-item');
var elCarResult = document.querySelector('.moshin-item');
var elPlaneResult = document.querySelector('.samalyot-item');

// STANDARD DISTANCES
var piyodaSpeed = 3.6;
var velikSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

elMainForm.addEventListener('submit', function (evt) {

  evt.preventDefault();

  var targetDistance = parseFloat(elMainForm.querySelector('.distance-input').value.trim(), 10);
  targetDistance.toFixed(2);

  // Piyoda calc
  var targetResultPiyodaHour = Math.floor(targetDistance / piyodaSpeed);
  var targetResultPiyodaMinute = Math.round(((targetDistance / piyodaSpeed) - targetResultPiyodaHour) * 60);
  var targetResultPiyoda = `${targetResultPiyodaHour} soat, ${targetResultPiyodaMinute} minut`

  // Velik calc
  var targetResultVelikHour = Math.floor(targetDistance / velikSpeed);
  var targetResultVelikMinute = Math.round(((targetDistance / velikSpeed) - targetResultVelikHour) * 60);
  var targetResultVelik = `${targetResultVelikHour} soat, ${targetResultVelikMinute} minut`

  // Car calc
  var targetResultCarHour = Math.floor(targetDistance / carSpeed);
  var targetResultCarMinute = Math.round(((targetDistance / carSpeed) - targetResultCarHour) * 60);
  var targetResultCar = `${targetResultCarHour} soat, ${targetResultCarMinute} minut`

  // Plane calc
  var targetResultPlaneHour = Math.floor(targetDistance / planeSpeed);
  var targetResultPlaneMinute = Math.round(((targetDistance / planeSpeed) - targetResultPlaneHour) * 60);
  var targetResultPlane = `${targetResultPlaneHour} soat, ${targetResultPlaneMinute} minut`



  if (targetDistance > 0) {
    elPiyodaResult.textContent = targetResultPiyoda;
    elVelikResult.textContent = targetResultVelik;
    elCarResult.textContent = targetResultCar;
    elPlaneResult.textContent = targetResultPlane;
  } else if (isNaN(targetDistance)) {
    elPiyodaResult.textContent = '0';
    elVelikResult.textContent = '0';
    elCarResult.textContent = '0';
    elPlaneResult.textContent = '0';
    alert(`Raqam yozing brodar-aziz!`);

  } else {
    elPiyodaResult.textContent = '0';
    elVelikResult.textContent = '0';
    elCarResult.textContent = '0';
    elPlaneResult.textContent = '0';
    alert(`Musbat raqam kiriting birodar!`);
  }

});