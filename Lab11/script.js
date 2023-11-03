

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
		'url': 'mapbox://juliakohn.7j8nzyxg'
	});

	map.addLayer({
		'id': 'restaurantLayer',
		'type': 'circle',
		'source': 'restaurantSource',
		'source-layer': '_Historical__Restaurant_Score-6ds6lg',
		'paint': {
			'circle-color': '#000f8c'
		}
	})

		map.on('mouseenter', 'restaurantLayer', (e) => {
			//console.log(e.features[0]{'[properties']['business_name']);
			var name = e.features[0]['properties']['business_name'];
		})


})