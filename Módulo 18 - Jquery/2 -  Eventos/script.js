/*  Lição 1
$(".title").click(() => {
    console.log("click")
})
$(".title").mouseenter(() => {
    console.log("mouse enter")
})
$(".title").mouseleave(() => {
    console.log("mouse leave")
})
$(".title").dblclick(() => {
    console.log("double click")
}) 
*/

/*  Lição 2

$(document).mouseleave(() => {
    $(".sair").show()
})
$(document).mouseenter(() => {
    $(".sair").hide()
})
*/

//   Lição 3
$(".title").click((e) => {
    console.log(e.target)
})
