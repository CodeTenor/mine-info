// Get the modal
var modal = document.getElementById("myModal");

var apiKey = "AIzaSyDTt2trMUQAMQ3Xw5qUjmo6MjiPRA3P7rc";

// Get the button that opens the modal
var btns = document.querySelectorAll("button[type=button]");  

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btns.forEach(btn => {
    btn.onclick = function() {
        var btnValue = btn;
        modal.style.display = "block";
        initMap();
      }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// google maps implementation
var map;
var service;
var infowindow;

// function initMap() {
//   var sydney = new google.maps.LatLng(-33.867, 151.195);

//   infowindow = new google.maps.InfoWindow();

//   map = new google.maps.Map(
//       document.getElementById('map'), {center: sydney, zoom: 15});

//   var request = {
//     query: 'Museum of Contemporary Art Australia',
//     fields: ['name', 'geometry'],
//   };

//   var service = new google.maps.places.PlacesService(map);

//   service.findPlaceFromQuery(request, function(results, status) {
//     if (status === google.maps.places.PlacesServiceStatus.OK) {
//       for (var i = 0; i < results.length; i++) {
//         createMarker(results[i]);
//       }
//       map.setCenter(results[0].geometry.location);
//     }
//   });
// }
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
      
      window.initMap = initMap;
}