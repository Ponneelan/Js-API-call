mapboxgl.accessToken = 'Your API Key';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [80.22105486620737,13.060027592555944 ],
    zoom: 13,
    navigationControl: {
        showCompass: true,
        showZoom: true
    }
});

// Add a pinpoint at your location
var marker = new mapboxgl.Marker({color: 'red'})
    .setLngLat([80.22105486620737,13.060027592555944 ])
    .addTo(map);