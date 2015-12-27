var gj, ws;

function main() {
    var div = document.getElementById('map');
    var map = L.map(div).setView([0, 0], 2);
    L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    gj = L.geoJson().addTo(map);

    ws = new WebSocket('ws://localhost:3021');
    ws.onopen = function() {
        console.log("Opened");
    };
    ws.onclose = function() {
        console.log("Closed");
    };
    ws.onmessage = function(event) {
        feature = JSON.parse(event.data);
        if (feature.type == "Feature") {
            gj.addData(feature);
        } else {
            console.error("Got something other than a geojson feature");
        };
    };
}

