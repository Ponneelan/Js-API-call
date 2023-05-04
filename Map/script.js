var mapOptions = {
    center: [ 13.060027592555944, 80.22105486620737],
    zoom: 11
 }
 var map = new L.map('mapid', mapOptions);

let at = 'pk.eyJ1IjoicG9ubmVlbGFuIiwiYSI6ImNsaDdoZTkzMzBnNm4zcW5za3FrZDM2eTQifQ.jXGUIbCywbLynh8A6GOZCw';

var layer = new L.TileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${at}`, {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: at,
});

map.addLayer(layer);