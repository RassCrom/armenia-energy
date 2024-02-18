document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
        width : '100vw',
		height: '100vh',
        pagination: false,  // Hide pagination
        arrows: false,      // Hide arrows
        autoplay: true,     // Enable autoplay
        interval: 3000,     // Set the interval (in milliseconds) for changing slides
    } ).mount().play();
} );


var dataSet = [
    {name: "Armenia", children: [
      {name: "1991", children: [
        {name: "Generation", value: 8.615},
        {name: "Nuclear", value: 0},
        {name: "Fossil fuels", value: 5.602},
        {name: "Renewables", value: 3.013},
        {name: "Hydroelectricity", value: 3.013},
        {name: "Non-hydroelectric renewables", value: 3.013},
        {name: "Geothermal", value: 3.013},
        {name: "Solar, tide, wave, fuel cell", value: 3.013},
        {name: "Tide and wave", value: 3.013},
        {name: "Solar", value: 3.013},
        {name: "Wind", value: 3.013},
        {name: "Biomass and waste", value: 3.013},
        {name: "Hydroelectric pumped storage", value: 3.013},
        {name: "Consumption", value: 3.013},
        {name: "Imports", value: 3.013},
        {name: "Exports", value: 3.013},
        {name: "Distribution losses", value: 3.013},
      ]},
      {name: "2021", children: [	
        {name: "Generation (billion kWh)", value: 7.324386},
        {name: "Nuclear (billion kWh)", value: 1.85},
        {name: "Fossil fuels (billion kWh)", value: 3.181386},
        {name: "Renewables (billion kWh)", value: 2.293},
        {name: "Hydroelectricity (billion kWh)", value: 2.202} 
      ]}
    ]}
  ];

anychart.onDocumentReady(function () {

});

var chart = anychart.treeMap(dataSet, "as-tree");

chart.title("The Structure of Electricity Generation and Sales");
chart.container("container");
chart.background("#27252A");
// chart.header().background("#3E3D40");
chart.normal().fill('#B46FC2');
chart.hovered().fill('#44008B', 0.8);
chart.selected().fill('#0A0068', 0.8);
chart.selected().hatchFill("forward-diagonal", '#282147', 2, 20);
chart.labels().useHtml(true);
chart.labels().format(
  "<span style='font-size: 24px; color: #fff'>{%name}</span><br>{%value}"
);

chart.draw();

