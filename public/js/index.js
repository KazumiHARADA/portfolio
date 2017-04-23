/**
 * Created by kharada on 2017/04/23.
 */

//impress
var api = impress();
api.init();

$(function(){

    $(".one").click(function () {
        console.log("click");
    });

    $(".three").click(function () {
        api.goto(3);
    });
    $(".four").click(function () {
        api.goto(4);
    });
    $(".five").click(function () {
        api.goto(5);
    });



});

$(".two").click(function () {
    console.log("2");
    var impressAPI = impress( "impress" );
    impressAPI.next();
    // var target = $("#two");
    // console.log(target);
    // api.goto(target);
});