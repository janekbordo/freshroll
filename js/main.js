$(document).ready(function () {
    addScrolledClass();
    hideStoiska();
    hideRestaurant();
    myMap();

    var restaurant = document.querySelectorAll('.restaurant');
    var restaurantTitles = document.querySelectorAll('.restaurant-title');

    for(var i = 0; i < restaurant.length; i++){
        restaurant[i].style.display="none";
    }
    for(var j = 0; j < restaurantTitles.length; j++){
        restaurantTitles[j].style.display="none";
    }


});

$(window).scroll(function () {
    addScrolledClass();
})

function addScrolledClass() {
    var navHeight = $('#main-nav').outerHeight();
    
    if ($(window).scrollTop() >= navHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}

function myMap() {
    map = new google.maps.Map(document.getElementById('restaurant-map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });

    map2 = new google.maps.Map(document.getElementById('stoisko1-map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });

    map3 = new google.maps.Map(document.getElementById('stoisko2-map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
  }

function hideStoiska() {
    var stoiska = document.querySelectorAll('.stoisko');
    var stoiskaTitles = document.querySelectorAll('.stoisko-title');
    var restaurant = document.querySelectorAll('.restaurant');
    var restaurantTitles = document.querySelectorAll('.restaurant-title');
    var restaurantBtn = document.getElementById('restaurant-btn');
    var stoiskaBtn = document.getElementById('stoiska-btn');

    restaurantBtn.addEventListener('click', function() {

        for(var i = 0; i < stoiska.length; i++){
            stoiska[i].style.display="none";
        }
        for(var j = 0; j < stoiskaTitles.length; j++){
            stoiskaTitles[j].style.display="none";
        }
        for(var k = 0; k < restaurant.length; k++){
            restaurant[k].style.display="";
        }
        for(var l = 0; l < restaurantTitles.length; l++){
            restaurantTitles[l].style.display="";
        }

        stoiskaBtn.style.color = '#000';
        stoiskaBtn.style.fontWeight = 'normal';
        restaurantBtn.style.color = '#d80e0e';
        restaurantBtn.style.fontWeight = 'bold';
        
    })
    
}

function hideRestaurant() {
    var stoiska = document.querySelectorAll('.stoisko');
    var stoiskaTitles = document.querySelectorAll('.stoisko-title');
    var restaurant = document.querySelectorAll('.restaurant');
    var restaurantTitles = document.querySelectorAll('.restaurant-title');
    var stoiskaBtn = document.getElementById('stoiska-btn');
    var restaurantBtn = document.getElementById('restaurant-btn');

    stoiskaBtn.addEventListener('click', function() {
        for(var i = 0; i < stoiska.length; i++){
            stoiska[i].style.display="";
        }
        for(var j = 0; j < stoiskaTitles.length; j++){
            stoiskaTitles[j].style.display="";
        }
        for(var k = 0; k < restaurant.length; k++){
            restaurant[k].style.display="none";
        }
        for(var l = 0; l < restaurantTitles.length; l++){
            restaurantTitles[l].style.display="none";
        }

        restaurantBtn.style.color = '#000';
        restaurantBtn.style.fontWeight = 'normal';
        stoiskaBtn.style.color = '#d80e0e';
        stoiskaBtn.style.fontWeight = 'bold';
    })
    
}
