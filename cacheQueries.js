var request = require('sync-request');

var url = 'https://www.waterqualitydata.us/ogcservices/wfs/?request=GetFeature&service=wfs&version=2.0.0&typeNames=wqp_sites&SEARCHPARAMS=countrycode:US;statecode:US:36;countycode:US:36:059%7CUS:36:103;sampleMedia:Water;characteristicName:Nitrate;minresults:1&outputFormat=application/json';

var parameters = ['Ammonia', 'Ammonia and ammonium', 'Ammonia-nitrogen as N', 'Chlorophyll a', 'Dissolved oxygen (DO)', 'Inorganic nitrogen (nitrate and nitrite)', 'Inorganic nitrogen (nitrate and nitrite) as N', 'Kjeldahl nitrogen' , 'Nitrate', 'Nitrate + Nitrite', 'Nitrate as N', 'Nitrogen', 'Nitrogen, mixed forms (NH3), (NH4), organic, (NO2) and (NO3)', 'Total Nitrogen, mixed forms (NH3), (NH4), organic, (NO2) and (NO3)', 'Total Kjeldahl nitrogen']

var requestWQP = function(parameter) {

    var splitURL = url.split('Nitrate');
    var reqUrl = splitURL[0] + encodeURIComponent(parameter) + splitURL[1];

    var res = request('GET', reqUrl);

    var results = JSON.parse(res.getBody());
    console.log(results.features.length,'results found for:',parameter);
};

parameters.forEach(function (item) {
    console.log("Requestsing:",item);
    requestWQP(item);
});