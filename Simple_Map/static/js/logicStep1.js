// Add console.log to check to see if our code is working
console.log("working");
// ---------------------------------------------------------
// ---------------------------------------------------------


// ---------------------------------------------------------
// ---------------------------------------------------------

// Create the map object with a center and zoom level
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Alt to above code: Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [40.7, -94.5],
//     setView: [
//       37.6213, -122.3790
//     ],
//     zoom: 5
//   });

// // Create the map object with center, zoom level and default layer.
// let map = L.map('mapid', {
//   center: [30, 30],
//   zoom: 2,
//   layers: [streets]
// });
// ---------------------------------------------------------
// ---------------------------------------------------------



// ---------------------------------------------------------
// MAPPING SINGLE POINTS
// ---------------------------------------------------------
// Add a single marker to the map for Los Angeles, California.
// let marker = L.circleMarker([34.0522, -118.2437], {
//   color: 'black',
//   fillColor: '#ffffa1',
//   radius: 300
// }).addTo(map);
// ---------------------------------------------------------
// ---------------------------------------------------------



// ---------------------------------------------------------
// MAPPING MULTIPLE POINTS AND MAPPING LINES 
// ---------------------------------------------------------
// Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one maker for each city
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius: city.population/200000,
//     color: 'orange',
//     weight: 4
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// // Coordinates for each point to be used in the line.
// let line = [
//   [37.6213, -122.3790],
//   [30.2173, -97.6890],
//   [43.6777, -79.6248],
//   [40.6413, -73.7781]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "blue",
//   weight: 4,
//   opacity: .5,
// }).addTo(map);
// ---------------------------------------------------------
// ---------------------------------------------------------



// ---------------------------------------------------------
// MAPPING GEOJSON POINTS
// ---------------------------------------------------------

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"
//       },
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}
//           }
// ]};

// // Grabbing our GeoJSON data -- PointToLayer 
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.name + "</h2>" +
//     "<hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//   }
// }).addTo(map);

// // onEachFeature grab GeoJson data
// L.geoJson(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>" + "Airport code: "+ feature.properties.faa + "</h2>" +
//     "<hr><h3>" + "Airport name: " + feature.properties.name + "</h3>");
//   }
// }).addTo(map);
// ---------------------------------------------------------
// ---------------------------------------------------------


// ---------------------------------------------------------
// MAPPING DETAILS FOR HTML
// ---------------------------------------------------------
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

//  Create a base layer that holds both maps
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
// ---------------------------------------------------------
// ---------------------------------------------------------



// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map)



// ---------------------------------------------------------
// MAPPING GEOJSON POINTS WITH POPUPS 
// ---------------------------------------------------------
// // Accessing the airport GeoJSON URL
// let airportData = 'https://raw.githubusercontent.com/tylerengalla/Mapping_Earthquakes/main/majorAirports.json';

// // Grabbing our GeoJSON data
// d3.json(airportData).then(function(data){
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data
//   L.geoJson(data, {
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup("<h2>" + "Airport code: " + feature.properties.faa + "</h2>" + 
//       "<hr><h3>" + "Airport name: " + feature.properties.name + "</h3>");
//     }
//   }).addTo(map);
// });
// ---------------------------------------------------------
// ---------------------------------------------------------





// ---------------------------------------------------------
//  MAPPING GEOJSON LINESTRINGS 
// ---------------------------------------------------------
// Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = 'https://raw.githubusercontent.com/tylerengalla/Mapping_Earthquakes/main/torontoRoutes.json';

// // Create a style for the lines
// let myStyle = {
//   color: '#ffffa1',
//   weight: 2
// }
// // Grabbing out GeoJSON data
// d3.json(torontoData).then(function(data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieve data
//   L.geoJson(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h2>" + "Airline: " + feature.properties.airline + "</h2>" +
//       "<hr><h3>" + "Destination: " + feature.properties.dst + "</h3>");
//     }
//   }).addTo(map);
// });
// ---------------------------------------------------------
// ---------------------------------------------------------


// ---------------------------------------------------------
// MAPPING GEOJSOON POLYGONS
// ---------------------------------------------------------
// Accessing the Toronto neighborhoods GeoJSON URL
// let torontoHoods = 'https://raw.githubusercontent.com/tylerengalla/Mapping_Earthquakes/main/torontoNeighborhoods.json'

// // Create a style 
// let myStyle = {
//   color: 'yellow',
//   weight: 1
// }
// //  Grabbing out GeoJson Data
// d3.json(torontoHoods).then(function(data){
//   console.log(data);
//   L.geoJSON(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h2>" + "Neighborhood: " + feature.properties.AREA_NAME + "</h2>")
//     }
//   }).addTo(map);
// });
// ---------------------------------------------------------
// ---------------------------------------------------------


// ---------------------------------------------------------
//  ADDING EARTHQUAKE DATA 
// ---------------------------------------------------------
// Retrieve the earthquake data 
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJson layer with the retrieved data
  L.geoJson(data).addTo(map);
});
// ---------------------------------------------------------
// ---------------------------------------------------------



// day light api
    // 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}'
    // nighttime 
    // https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}