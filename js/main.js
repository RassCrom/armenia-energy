document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
        width : '100vw',
		height: '100vh',
        pagination: false,  // Hide pagination
        arrows: false,      // Hide arrows
        autoplay: true,     // Enable autoplay
        interval: 3000,     // Set the interval (in milliseconds) for changing slides
    } ).mount();
} );

var dataSet = [
  {children: [
      {'name': '1991', 'children': [{'name': 'Generation', 'value': 8.615},{'name': 'Nuclear', 'value': 0.0},{'name': 'Fossil fuels', 'value': 5.602},{'name': 'Renewables', 'value': 3.013},{'name': 'Hydroelectricity', 'value': 3.013},{'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 6.358}, {'name': 'Imports', 'value': 0.325}, {'name': 'Exports', 'value': 0.052}, {'name': 'Distribution losses', 'value': 2.53}]}, {'name': '1992', 'children': [{'name': 'Generation', 'value': 6.131}, {'name': 'Nuclear', 'value': 0.0}, {'name': 'Fossil fuels', 'value': 1.882}, {'name': 'Renewables', 'value': 4.249}, {'name': 'Hydroelectricity', 'value': 4.249}, {'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 3.724}, {'name': 'Imports', 'value': 0.114}, {'name': 'Exports', 'value': 0.131}, {'name': 'Distribution losses', 'value': 2.39}]}, {'name': '1993', 'children': [{'name': 'Generation', 'value': 5.494}, {'name': 'Nuclear', 'value': 0.0}, {'name': 'Fossil fuels', 'value': 2.015}, {'name': 'Renewables', 'value': 3.479}, {'name': 'Hydroelectricity', 'value': 3.479}, {'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 3.273}, {'name': 'Imports', 'value': 0.02}, {'name': 'Exports', 'value': 0.0}, {'name': 'Distribution losses', 'value': 2.241}]}, {'name': '1994', 'children': [{'name': 'Generation', 'value': 5.038}, {'name': 'Nuclear', 'value': 0.0}, {'name': 'Fossil fuels', 'value': 3.138}, {'name': 'Renewables', 'value': 1.9}, {'name': 'Hydroelectricity', 'value': 1.9}, {'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 2.858}, {'name': 'Imports', 'value': 0.015}, {'name': 'Exports', 'value': 0.0}, {'name': 'Distribution losses', 'value': 2.195}]}, {'name': '1995', 'children': [{'name': 'Generation', 'value': 5.835}, {'name': 'Nuclear', 'value': 2.1}, {'name': 'Fossil fuels', 'value': 2.179}, {'name': 'Renewables', 'value': 1.556}, {'name': 'Hydroelectricity', 'value': 1.556}, {'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 3.486}, {'name': 'Imports', 'value': 0.0}, {'name': 'Exports', 'value': 0.0}, {'name': 'Distribution losses', 'value': 2.349}]}, {'name': '1996', 'children': [{'name': 'Generation', 'value': 5.656}, {'name': 'Nuclear', 'value': 1.43}, {'name': 'Fossil fuels', 'value': 2.85}, {'name': 'Renewables', 'value': 1.376}, {'name': 'Hydroelectricity', 'value': 1.376}, {'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 4.281}, {'name': 'Imports', 'value': 0.0}, {'name': 'Exports', 'value': 0.124}, {'name': 'Distribution losses', 'value': 1.251}]}, {'name': '1997', 'children': [{'name': 'Generation', 'value': 5.822}, {'name': 'Nuclear', 'value': 1.42}, {'name': 'Fossil fuels', 'value': 2.88}, {'name': 'Renewables', 'value': 1.522}, {'name': 'Hydroelectricity', 'value': 1.522}, {'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 3.671}, {'name': 'Imports', 'value': 0.0}, {'name': 'Exports', 'value': 0.387}, {'name': 'Distribution losses', 'value': 1.764}]}, {'name': '1998', 'children': [{'name': 'Generation', 'value': 5.561}, {'name': 'Nuclear', 'value': 2.08}, {'name': 'Fossil fuels', 'value': 2.293}, {'name': 'Renewables', 'value': 1.188}, {'name': 'Hydroelectricity', 'value': 1.188}, {'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 3.88}, {'name': 'Imports', 'value': 0.46}, {'name': 'Exports', 'value': 0.704}, {'name': 'Distribution losses', 'value': 1.437}]}, {'name': '1999', 'children': [{'name': 'Generation', 'value': 5.618}, {'name': 'Nuclear', 'value': 1.84}, {'name': 'Fossil fuels', 'value': 2.53}, {'name': 'Renewables', 'value': 1.248}, {'name': 'Hydroelectricity', 'value': 1.248}, {'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 3.691}, {'name': 'Imports', 'value': 0.4}, {'name': 'Exports', 'value': 0.815}, {'name': 'Distribution losses', 'value': 1.512}]}, {'name': '2000', 'children': [{'name': 'Generation', 'value': 5.568}, {'name': 'Nuclear', 'value': 1.987}, {'name': 'Fossil fuels', 'value': 2.623}, {'name': 'Renewables', 'value': 0.958}, {'name': 'Hydroelectricity', 'value': 0.958}, {'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 3.695}, {'name': 'Imports', 'value': 0.33}, {'name': 'Exports', 'value': 0.701}, {'name': 'Distribution losses', 'value': 1.502}]}, {'name': '2001', 'children': [{'name': 'Generation', 'value': 5.215}, {'name': 'Nuclear', 'value': 2.09}, {'name': 'Fossil fuels', 'value': 1.484}, {'name': 'Renewables', 'value': 1.641}, {'name': 'Hydroelectricity', 'value': 1.641}, {'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 3.441}, {'name': 'Imports', 'value': 0.3}, {'name': 'Exports', 'value': 0.66}, {'name': 'Distribution losses', 'value': 1.414}]}, {'name': '2002', 'children': [{'name': 'Generation', 'value': 5.212}, {'name': 'Nuclear', 'value': 1.82}, {'name': 'Fossil fuels', 'value': 1.43}, {'name': 'Renewables', 'value': 1.962}, {'name': 'Hydroelectricity', 'value': 1.962}, {'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 3.696}, {'name': 'Imports', 'value': 0.307}, {'name': 'Exports', 'value': 0.583}, {'name': 'Distribution losses', 'value': 1.24}]}, {'name': '2003', 'children': [{'name': 'Generation', 'value': 5.904}, {'name': 'Nuclear', 'value': 2.205}, {'name': 'Fossil fuels', 'value': 1.721}, {'name': 'Renewables', 'value': 1.978}, {'name': 'Hydroelectricity', 'value': 1.978}, {'name': 'Non-hydroelectric renewables', 'value': 0.0}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.0}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 4.196}, {'name': 'Imports', 'value': 0.26}, {'name': 'Exports', 'value': 1.012}, {'name': 'Distribution losses', 'value': 0.956}]}, {'name': '2004', 'children': [{'name': 'Generation', 'value': 5.978}, {'name': 'Nuclear', 'value': 2.504}, {'name': 'Fossil fuels', 'value': 1.718}, {'name': 'Renewables', 'value': 1.756}, {'name': 'Hydroelectricity', 'value': 1.755}, {'name': 'Non-hydroelectric renewables', 'value': 0.001}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.001}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 4.164}, {'name': 'Imports', 'value': 0.338}, {'name': 'Exports', 'value': 1.151}, {'name': 'Distribution losses', 'value': 1.001}]}, {'name': '2005', 'children': [{'name': 'Generation', 'value': 5.617}, {'name': 'Nuclear', 'value': 2.422}, {'name': 'Fossil fuels', 'value': 1.387}, {'name': 'Renewables', 'value': 1.808}, {'name': 'Hydroelectricity', 'value': 1.807}, {'name': 'Non-hydroelectric renewables', 'value': 0.001}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.001}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 4.439}, {'name': 'Imports', 'value': 0.355}, {'name': 'Exports', 'value': 0.755}, {'name': 'Distribution losses', 'value': 0.779}]}, {'name': '2006', 'children': [{'name': 'Generation', 'value': 5.584}, {'name': 'Nuclear', 'value': 2.348}, {'name': 'Fossil fuels', 'value': 1.4}, {'name': 'Renewables', 'value': 1.837}, {'name': 'Hydroelectricity', 'value': 1.834}, {'name': 'Non-hydroelectric renewables', 'value': 0.003}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.003}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 4.776}, {'name': 'Imports', 'value': 0.419}, {'name': 'Exports', 'value': 0.451}, {'name': 'Distribution losses', 'value': 0.775}]}, {'name': '2007', 'children': [{'name': 'Generation', 'value': 5.466}, {'name': 'Nuclear', 'value': 2.266}, {'name': 'Fossil fuels', 'value': 1.419}, {'name': 'Renewables', 'value': 1.781}, {'name': 'Hydroelectricity', 'value': 1.779}, {'name': 'Non-hydroelectric renewables', 'value': 0.002}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.002}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 4.557}, {'name': 'Imports', 'value': 0.343}, {'name': 'Exports', 'value': 0.36}, {'name': 'Distribution losses', 'value': 0.892}]}, {'name': '2008', 'children': [{'name': 'Generation', 'value': 5.378}, {'name': 'Nuclear', 'value': 2.29}, {'name': 'Fossil fuels', 'value': 1.085}, {'name': 'Renewables', 'value': 2.003}, {'name': 'Hydroelectricity', 'value': 1.999}, {'name': 'Non-hydroelectric renewables', 'value': 0.004}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.004}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 4.49}, {'name': 'Imports', 'value': 0.291}, {'name': 'Exports', 'value': 0.336}, {'name': 'Distribution losses', 'value': 0.843}]}, {'name': '2009', 'children': [{'name': 'Generation', 'value': 6.176}, {'name': 'Nuclear', 'value': 2.287}, {'name': 'Fossil fuels', 'value': 1.352}, {'name': 'Renewables', 'value': 2.537}, {'name': 'Hydroelectricity', 'value': 2.53}, {'name': 'Non-hydroelectric renewables', 'value': 0.007}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.007}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 4.631}, {'name': 'Imports', 'value': 0.246}, {'name': 'Exports', 'value': 1.061}, {'name': 'Distribution losses', 'value': 0.73}]}, {'name': '2010', 'children': [{'name': 'Generation', 'value': 7.071}, {'name': 'Nuclear', 'value': 2.357}, {'name': 'Fossil fuels', 'value': 2.247}, {'name': 'Renewables', 'value': 2.467}, {'name': 'Hydroelectricity', 'value': 2.464}, {'name': 'Non-hydroelectric renewables', 'value': 0.003}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.003}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 4.989}, {'name': 'Imports', 'value': 0.205}, {'name': 'Exports', 'value': 1.383}, {'name': 'Distribution losses', 'value': 0.904}]}, {'name': '2011', 'children': [{'name': 'Generation', 'value': 7.622}, {'name': 'Nuclear', 'value': 2.124}, {'name': 'Fossil fuels', 'value': 3.195}, {'name': 'Renewables', 'value': 2.303}, {'name': 'Hydroelectricity', 'value': 2.299}, {'name': 'Non-hydroelectric renewables', 'value': 0.004}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.004}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 5.043}, {'name': 'Imports', 'value': 0.098}, {'name': 'Exports', 'value': 1.696}, {'name': 'Distribution losses', 'value': 0.981}]}, {'name': '2012', 'children': [{'name': 'Generation', 'value': 7.306}, {'name': 'Nuclear', 'value': 2.168}, {'name': 'Fossil fuels', 'value': 2.983}, {'name': 'Renewables', 'value': 2.155}, {'name': 'Hydroelectricity', 'value': 2.151}, {'name': 'Non-hydroelectric renewables', 'value': 0.004}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.004}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 5.192}, {'name': 'Imports', 'value': 0.148}, {'name': 'Exports', 'value': 1.313}, {'name': 'Distribution losses', 'value': 0.949}]}, {'name': '2013', 'children': [{'name': 'Generation', 'value': 7.334}, {'name': 'Nuclear', 'value': 2.266}, {'name': 'Fossil fuels', 'value': 3.092}, {'name': 'Renewables', 'value': 1.976}, {'name': 'Hydroelectricity', 'value': 1.972}, {'name': 'Non-hydroelectric renewables', 'value': 0.004}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.004}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 5.297}, {'name': 'Imports', 'value': 0.206}, {'name': 'Exports', 'value': 1.314}, {'name': 'Distribution losses', 'value': 0.929}]}, {'name': '2014', 'children': [{'name': 'Generation', 'value': 7.391}, {'name': 'Nuclear', 'value': 2.571}, {'name': 'Fossil fuels', 'value': 2.633}, {'name': 'Renewables', 'value': 2.187}, {'name': 'Hydroelectricity', 'value': 2.184}, {'name': 'Non-hydroelectric renewables', 'value': 0.003}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.0}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.0}, {'name': 'Wind', 'value': 0.003}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 5.329}, {'name': 'Imports', 'value': 0.174}, {'name': 'Exports', 'value': 1.424}, {'name': 'Distribution losses', 'value': 0.812}]}, {'name': '2015', 'children': [{'name': 'Generation', 'value': 6.951}, {'name': 'Nuclear', 'value': 2.195}, {'name': 'Fossil fuels', 'value': 2.426}, {'name': 'Renewables', 'value': 2.33}, {'name': 'Hydroelectricity', 'value': 2.327}, {'name': 'Non-hydroelectric renewables', 'value': 0.003}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.001}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.001}, {'name': 'Wind', 'value': 0.002}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 5.291}, {'name': 'Imports', 'value': 0.275}, {'name': 'Exports', 'value': 1.229}, {'name': 'Distribution losses', 'value': 0.706}]}, {'name': '2016', 'children': [{'name': 'Generation', 'value': 7.362}, {'name': 'Nuclear', 'value': 2.411}, {'name': 'Fossil fuels', 'value': 2.7}, {'name': 'Renewables', 'value': 2.251}, {'name': 'Hydroelectricity', 'value': 2.246}, {'name': 'Non-hydroelectric renewables', 'value': 0.005}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.003}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.003}, {'name': 'Wind', 'value': 0.002}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 5.573}, {'name': 'Imports', 'value': 0.319}, {'name': 'Exports', 'value': 1.44}, {'name': 'Distribution losses', 'value': 0.668}]}, {'name': '2017', 'children': [{'name': 'Generation', 'value': 7.387}, {'name': 'Nuclear', 'value': 1.898}, {'name': 'Fossil fuels', 'value': 3.173}, {'name': 'Renewables', 'value': 2.316}, {'name': 'Hydroelectricity', 'value': 2.295}, {'name': 'Non-hydroelectric renewables', 'value': 0.021}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.019}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.019}, {'name': 'Wind', 'value': 0.002}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 5.353}, {'name': 'Imports', 'value': 0.204}, {'name': 'Exports', 'value': 1.627}, {'name': 'Distribution losses', 'value': 0.611}]}, {'name': '2018', 'children': [{'name': 'Generation', 'value': 7.304}, {'name': 'Nuclear', 'value': 2.029}, {'name': 'Fossil fuels', 'value': 2.864}, {'name': 'Renewables', 'value': 2.411}, {'name': 'Hydroelectricity', 'value': 2.347}, {'name': 'Non-hydroelectric renewables', 'value': 0.064}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.061}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.061}, {'name': 'Wind', 'value': 0.003}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 5.798}, {'name': 'Imports', 'value': 0.293}, {'name': 'Exports', 'value': 1.251}, {'name': 'Distribution losses', 'value': 0.548}]}, {'name': '2019', 'children': [{'name': 'Generation', 'value': 7.445}, {'name': 'Nuclear', 'value': 2.552}, {'name': 'Fossil fuels', 'value': 2.976}, {'name': 'Renewables', 'value': 1.917}, {'name': 'Hydroelectricity', 'value': 1.778}, {'name': 'Non-hydroelectric renewables', 'value': 0.139}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.137}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.137}, {'name': 'Wind', 'value': 0.002}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 5.867}, {'name': 'Imports', 'value': 0.32}, {'name': 'Exports', 'value': 1.333}, {'name': 'Distribution losses', 'value': 0.565}]}, {'name': '2020', 'children': [{'name': 'Generation', 'value': 7.324}, {'name': 'Nuclear', 'value': 1.85}, {'name': 'Fossil fuels', 'value': 3.181}, {'name': 'Renewables', 'value': 2.293}, {'name': 'Hydroelectricity', 'value': 2.202}, {'name': 'Non-hydroelectric renewables', 'value': 0.091}, {'name': 'Geothermal', 'value': 0.0}, {'name': 'Solar, tide, wave, fuel cell', 'value': 0.09}, {'name': 'Tide and wave', 'value': 0.0}, {'name': 'Solar', 'value': 0.09}, {'name': 'Wind', 'value': 0.001}, {'name': 'Biomass and waste', 'value': 0.0}, {'name': 'Hydroelectric pumped storage', 'value': 0.0}, {'name': 'Consumption', 'value': 6.132}, {'name': 'Imports', 'value': 0.368}, {'name': 'Exports', 'value': 0.995}, {'name': 'Distribution losses', 'value': 0.565}]}
  ]}
  ];

anychart.onDocumentReady(function () {});

var chart = anychart.treeMap(dataSet, "as-tree");
chart.title('Armenia')
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
