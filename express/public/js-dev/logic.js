'use strict';

var jsHook = {
    SET_DATA: '.js-set-data'
};
//var param = { "provider": "anonymous", "uid": "4a8cd039-0570-46b5-a2d1-22df3172bd36" };

var database = firebase.database();
var name = '';

$(jsHook.SET_DATA).on('click', setData);

function setData() {
    name = $('#name-input').val().trim();

    database.ref().set({
        name: name
    });
};

database.ref().on("value", function(snap) {
    $('#display').html(snap.val().name);
});