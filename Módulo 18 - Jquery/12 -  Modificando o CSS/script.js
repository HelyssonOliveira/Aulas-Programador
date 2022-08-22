setTimeout (function(){
    $("h1").addClass("bg-blue")
}, 1000)

setTimeout(function(){
    $("h1").removeClass("bg-blue")
}, 3000)


setInterval(function(){
    $("h2").toggleClass("bg-blue")
}, 1000)


$("h3").css({
    "font-size": "50px",
    "background-color": "blue"
})

