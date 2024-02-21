import LegendControl from 'mapboxgl-legend';
import 'mapboxgl-legend/dist/style.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicmFzc2Nyb20iLCJhIjoiY2wyNzlrcDY2MGk5cDNqcW5wZW9mZW5kciJ9.zdI6zJ4KbGx-V8mq1KoUCg';
const map = new mapboxgl.Map({
    container: 'map',
    // Replace YOUR_STYLE_URL with your style URL.
    style: 'mapbox://styles/rasscrom/clssj4t6u00aa01pk31m92ood',
    projection: 'globe',
});

const legend = new LegendControl();
map.addControl(legend, 'top-left');

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.ScaleControl());
map.addControl(new mapboxgl.FullscreenControl());

map.on('click', (event) => {
    // If the user clicked on one of your markers, get its information.
    const features = map.queryRenderedFeatures(event.point, {
        layers: ['armenia-power-hydro-agjnv3'] // replace with your layer name
    });
    if (!features.length) {
        return;
    }
    const feature = features[0]

    // Code from the next step will go here.
    const popup = new mapboxgl.Popup({ offset: [0, 0] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
        `Name: <h3 style='font-size:1.2rem;color:green; margin-bottom:5px;'>${feature.properties.name}</h3>
        <p>Oblast:<br> ${feature.properties['oblast']}</p>
        <p>Power:<br> ${feature.properties['power']}</p>`
    ).addTo(map);
});

map.on('mouseenter', ['armenia-power-hydro-agjnv3'], function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', ['armenia-power-hydro-agjnv3'], function () {
    map.getCanvas().style.cursor = '';
});

// layers = []