$(document).ready(function () {
    addScrolledClass();
    hideStoiska();
    hideRestaurant();
    myMap();
    checkRODO();

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

    var myLatLng = {lat: 52.227788, lng: 21.004985};
    map = new google.maps.Map(document.getElementById('restaurant-map'), {
        center: myLatLng,
        zoom: 16
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
      });

    marker.setMap(map);
    
    var myLatLng2 = {lat: 52.155812, lng: 21.034600};
    map2 = new google.maps.Map(document.getElementById('stoisko1-map'), {
        center: myLatLng2,
        zoom: 16
    });

    var marker2 = new google.maps.Marker({
        position: myLatLng2,
        map: map2
      });

      marker2.setMap(map2);
      

    var myLatLng3 = {lat: 52.171537, lng: 20.934674};
    map3 = new google.maps.Map(document.getElementById('stoisko2-map'), {
        center: myLatLng3,
        zoom: 16
    });

    var marker3 = new google.maps.Marker({
        position: myLatLng3,
        map: map3
      });

      marker3.setMap(map3);
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

        stoiskaBtn.style.color = '#fff';
        stoiskaBtn.style.fontWeight = 'normal';
        restaurantBtn.style.color = '#ee2c2c';
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

        restaurantBtn.style.color = '#fff';
        restaurantBtn.style.fontWeight = 'normal';
        stoiskaBtn.style.color = '#ee2c2c';
        stoiskaBtn.style.fontWeight = 'bold';
    })
}
    /**activate nav links */

$('.navbar-nav .nav-item .nav-link').click(function () {
    $('.navbar-nav .nav-item .nav-link').removeClass('activelink');
    $(this).addClass('activelink')
})

function checkRODO() {
    var sendBtn = document.querySelector('.btn.btn-custom');
    var allowCheck = document.querySelector('.rodo-check');

    allowCheck.addEventListener('click', function() {
        if (allowCheck.checked === true) {
            sendBtn.style.display = "inherit";
            sendBtn.style.marginRight = "auto";
            sendBtn.style.marginLeft = "auto";

        } else {
            sendBtn.style.display = "none";
        }
    })

    
}