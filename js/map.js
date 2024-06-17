let center = [47.28192351761411,39.708109148256014];

function init() {
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 18
	});

let placemark = new ymaps.Placemark([47.28192351761411,39.708109148256014], {}, {







});





map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
 

  map.geoObjects.add(placemark);
}
ymaps.ready(init);