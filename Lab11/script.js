

mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWFrb2huIiwiYSI6ImNsbjF3OXoxMjAydHQyemtocGxscHNmZXYifQ.C99bUGi2aZupJ_bvjaFrRA'

const map = new mapboxgl.Map({
	container: 'julia',
	style: 'mapbox://styles/juliakohn/clod1ni8j00sh01p6eqhkdgcb',
	center: [-122.419, 37.774],
	zoom: 12,
	pitch: 30,
	bearing: 0
});

map.on('load',function() {
	//console.log("my name is julia");

	map.addSource('restaurantSource',{
		'type': 'vector',
		'url': 'mapbox://juliakohn.67lgcmqz'
	});

	map.addLayer({
		'id': 'restaurantLayer',
		'type': 'circle',
		'source': 'restaurantSource',
		'source-layer': 'Historical_Restaurant_Scores_-7zlxhz',
		'paint': {
			'circle-color':[

      'match',
    ['get', 'inspection_score'],
      '45', '#440154',
      '46', '#440154',
      '47', '#440154',
      '48', '#440154',
      '49', '#440154',
      '50', '#440154',
      '51', '#440154',
      '52', '#440154',
      '53', '#440154',
      '54', '#440154',
      '55', '#440154',
      '56', '#440154',
      '57', '#440154',
      '58', '#440154',
      '59', '#440154',
      '60', '#440154',
      '61', '#440154',
      '62', '#440154',
      '63', '#440154',
      '64', '#440154',
      '65', '#440154',
      '66', '#440154',
      '67', '#440154',
      '68', '#440154',
      '69', '#440154',
      '70', '#440154',
      '71', '#440154',
      '72', '#440154',
      '73', '#440154',
      '74', '#440154',
      '75', '#440154',
      '76', '#440154',
      '77', '#440154',
      '78', '#440154',
      '79', '#440154',
      '80', '#3b528b',
      '81', '#3b528b',
      '82', '#3b528b',
      '83', '#3b528b',
      '84', '#3b528b',
      '85', '#21908d',
      '86', '#21908d',
      '87', '#21908d',
      '88', '#21908d',
      '89', '#21908d',
      '90', '#5dc963',
      '91', '#5dc963',
      '92', '#5dc963',
      '93', '#5dc963',
      '94', '#5dc963',
      '95', '#fde725',
      '96', '#fde725',
      '97', '#fde725',
      '98', '#fde725',
      '99', '#fde725',
      '100', '#fde725',
      '#808080'
    ]
		}
	})

		map.on('mouseenter', 'restaurantLayer', (e) => {
			//console.log(e.features[0]{'[properties']['business_name']);
			var name = e.features[0]['properties']['business_name'];
			var textField = document.getElementById('restText');
		textField.innerHTML = name;
    })


})