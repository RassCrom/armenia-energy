mapboxgl.accessToken = 'pk.eyJ1IjoicmFzc2Nyb20iLCJhIjoiY2wyNzlrcDY2MGk5cDNqcW5wZW9mZW5kciJ9.zdI6zJ4KbGx-V8mq1KoUCg';
const map = new mapboxgl.Map({
    container: 'map',
    // Replace YOUR_STYLE_URL with your style URL.
    style: 'mapbox://styles/rasscrom/clssj4t6u00aa01pk31m92ood',
    projection: 'globe',
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.ScaleControl());

map.on('click', (event) => {
    // If the user clicked on one of your markers, get its information.
    const features = map.queryRenderedFeatures(event.point, {
        layers: ['armenia-power-hydro-agjnv3', 'armenia-power-wind-d3jqq0', 'armenia-power-solar-1uhjc5', 'armenia-power-nuclear-a6w1gi', 'armenia-power-gas-bgt9dd'] // replace with your layer name
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

map.on('mouseenter', ['armenia-power-hydro-agjnv3', 'armenia-power-wind-d3jqq0', 'armenia-power-solar-1uhjc5', 'armenia-power-nuclear-a6w1gi', 'armenia-power-gas-bgt9dd'], function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', ['armenia-power-hydro-agjnv3', 'armenia-power-wind-d3jqq0', 'armenia-power-solar-1uhjc5', 'armenia-power-nuclear-a6w1gi', 'armenia-power-gas-bgt9dd'], function () {
    map.getCanvas().style.cursor = '';
});


// map 2
const map2 = new mapboxgl.Map({
    container: 'map2',
    // Replace YOUR_STYLE_URL with your style URL.
    style: 'mapbox://styles/rasscrom/clsd5c99z00xu01ql0z5dfa8v',
    projection: 'globe',
});

map2.addControl(new mapboxgl.NavigationControl());
map2.addControl(new mapboxgl.ScaleControl());

map2.on('click', (event) => {
    // If the user clicked on one of your markers, get its information.
    const features = map2.queryRenderedFeatures(event.point, {
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
    ).addTo(map2);
});

map2.on('mouseenter', ['armenia-power-hydro-agjnv3'], function () {
    map2.getCanvas().style.cursor = 'pointer';
});

map2.on('mouseleave', ['armenia-power-hydro-agjnv3'], function () {
    map2.getCanvas().style.cursor = '';
});


// map 3
const map3 = new mapboxgl.Map({
    container: 'map3',
    // Replace YOUR_STYLE_URL with your style URL.
    style: 'mapbox://styles/rasscrom/clssk0iqk004b01p9eijd3r7d',
    projection: 'globe',
});

map3.addControl(new mapboxgl.NavigationControl());
map3.addControl(new mapboxgl.ScaleControl());

map3.on('click', (event) => {
    // If the user clicked on one of your markers, get its information.
    const features = map3.queryRenderedFeatures(event.point, {
        layers: ['armenia-power-wind-d3jqq0'] // replace with your layer name
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
    ).addTo(map3);
});

map3.on('mouseenter', ['armenia-power-wind-d3jqq0'], function () {
    map3.getCanvas().style.cursor = 'pointer';
});

map3.on('mouseleave', ['armenia-power-wind-d3jqq0'], function () {
    map3.getCanvas().style.cursor = '';
});



// map 3
const map4 = new mapboxgl.Map({
    container: 'map4',
    // Replace YOUR_STYLE_URL with your style URL.
    style: 'mapbox://styles/rasscrom/clsskjnfk00zp01pf1smd0zrn',
    projection: 'globe',
});

map4.addControl(new mapboxgl.NavigationControl());
map4.addControl(new mapboxgl.ScaleControl());

map4.on('click', (event) => {
    // If the user clicked on one of your markers, get its information.
    const features = map4.queryRenderedFeatures(event.point, {
        layers: ['armenia-power-solar-1uhjc5'] // replace with your layer name
    });
    if (!features.length) {
        return;
    }
    const feature = features[0]

    // Code from the next step will go here.
    const popup = new mapboxgl.Popup({ offset: [0, 0] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
        `<p>Oblast:<br> ${feature.properties['oblast']}</p>`
    ).addTo(map4);
});

map4.on('mouseenter', ['armenia-power-solar-1uhjc5'], function () {
    map4.getCanvas().style.cursor = 'pointer';
});

map4.on('mouseleave', ['armenia-power-solar-1uhjc5'], function () {
    map4.getCanvas().style.cursor = '';
});