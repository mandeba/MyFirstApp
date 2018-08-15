


function initMap() {
    var locationAus = {lat: -25.363, lng: 131.044};
    var location = {lat: 59.3240, lng: 18.0711};
    var locationHel = {lat: 60.1677, lng: 24.9293};
    var map = new google.maps.Map(document.getElementById("mapDiv"), {
        zoom: 4,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Stockholm'
    });
    var markerHel = new google.maps.Marker({
        position: locationHel,
        map: map,
        title: 'Helsinki'
    });

}

			//AIzaSyBGuuwiXcLmtTsKacjr-OOaLtCFVIdVMiY