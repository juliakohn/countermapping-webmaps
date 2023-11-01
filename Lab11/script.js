

mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWFrb2huIiwiYSI6ImNsbjF3OXoxMjAydHQyemtocGxscHNmZXYifQ.C99bUGi2aZupJ_bvjaFrRA'

const map = new mapboxgl.Map({
	container: 'julia'
	style: 'mmapbox://styles/juliakohn/clod1ni8j00sh01p6eqhkdgcb'
	center: [-122.4194, 37.7749]
	zoom: 12
	pitch: 30
	bearing: 0
})

map.on('load', function() {
	map.addSource('restaurantSource',{
		'type': 'vector',
		'url': ''
	});

	map.addLayer({
		'id': 'restaurantLayer',
		'type': 'circle',
		'source': 'restaurantSource',
		'source-layer': 'Restaurant_Scores_-_LIVES_Sta-3hd45t',
		'paint': {
			'circle-color': '#063f8c'
		}
	})

}