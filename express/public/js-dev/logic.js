'use strict';

var jsHook = {
    GET_DATA: '.js-get-data'
};
var param = { "provider": "anonymous", "uid": "4a8cd039-0570-46b5-a2d1-22df3172bd36" };

$(jsHook.GET_DATA).on('click', getData);

function getData() {
    $.ajax({
        type: "GET",
        url: "https://nodeexpress-fc15e.firebaseio.com/",
        data: JSON.stringify(param)
    }).done(showData);
}

//info.html:1 Failed to load https://console.firebase.google.com/project/nodeexpress-fc15e/database/data/: Redirect from 'https://console.firebase.google.com/project/nodeexpress-fc15e/database/data/' to 'https://accounts.google.com/ServiceLogin?passive=1209600&osid=1&continue=https://console.firebase.google.com/project/nodeexpress-fc15e/database/data/&followup=https://console.firebase.google.com/project/nodeexpress-fc15e/database/data/' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.

function showData(data) {
    console.log(data);
}