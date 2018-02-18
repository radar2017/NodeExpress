'use strict';

var jsHook = {
    GET_DATA: '.js-get-data'
};

$(jsHook.GET_DATA).on('click', getData);

function getData() {
    $.ajax({
        type: "GET",
        url: "https://nodeexpress-fc15e.firebaseio.com/",
        dataType: "json"
    }).done(showData);
}

function showData(data) {
    console.log(data);
}