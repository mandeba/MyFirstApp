var adventureList = new Array();
var adventureLocation = new Array();
var map;

function initBucketlist() {


}

function createExpList() {


}

function populateAdventureList() {
    var adv0 = {
        id: 1,
        title: "Låktatjåkka",
        type: "Hiking",
        location_lat: 68.3985,
        location_lng: 18.4607,
        ext_link: "https://sv.wikipedia.org/wiki/L%C3%A5ktatj%C3%A5kka",
        difficulty: 2,
        accessability: 5,
        length: 20, // length in km
        duration: "1-2 days",
        child_friendly: "yes",
        description: ""
    }
    var adv1 = {
        id: 2,
        title: "Abisko-Kårsavagge-Låktatjokka-Björkliden",
        type: "Hiking",
        location_lat: 68.3346,
        location_lng: 18.5009,
        ext_link: "https://sv.wikipedia.org/wiki/L%C3%A5ktatj%C3%A5kka",
        difficulty: 3,
        accessability: 5,
        length: 50, // length in km
        duration: "4-7 days",
        child_friendly: "yes",
        description: ""
    }
    var adv2 = {
        id: 3,
        title: "Gröna bandet",
        type: "hiking",
        location_lat: 69.0596,
        location_lng: 20.5487,
        ext_link: "https://www.vitagronabandet.se/sv-SE",
        difficulty: 5,
        accessability: 3,
        length: 1300, // length in km
        duration: 60, // aproximate duration in days
        child_friendly: "no",
        description: "Gröna bandet"
    }
    adventureList = [adv0,adv1,adv2];

    var marker;
    for(var i=0; i < adventureList.length; i++) {
        /*adventureLocation.push(new Location({
            lat: ,
            lng:     
        }));*/
        marker = new google.maps.Marker({
            position: {
                lat: adventureList[i].location_lat,
                lng: adventureList[i].location_lng
            },
            map: map,
            title: adventureList[i].title
        });
        console.log("marker created: "+ marker);
    }
    
    

    /*
    var exp3 = {
        id: 4,
        title: "",
        type: "",
        location_lat: ,
        location_lng: ,
        ext_link: ,
        difficulty: ,
        accessability: ,
        duration: ,
        child_friendly: ,
        description: ""
    }*/
    /*
    var exp0 = {
        id: 0,
        title: "",
        type: "",
        location_lat: ,
        location_lng: ,
        ext_link: ,
        difficulty: ,
        accessability: ,
        duration: ,
        child_friendly: ,
        description: ""
    }

    */
}

function initMap() {
    var locationAus = {lat: -25.363, lng: 131.044};
    var location = {lat: 59.3240, lng: 18.0711};
    var locationHel = {lat: 60.1677, lng: 24.9293};
    map = new google.maps.Map(document.getElementById("mapDiv"), {
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

    populateAdventureList();
}

			//AIzaSyBGuuwiXcLmtTsKacjr-OOaLtCFVIdVMiY