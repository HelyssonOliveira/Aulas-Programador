// Lição 1

// setTimeout(() => {
//     $(".title").hide()
// }, 1000)
// setTimeout(() => {
//     $(".title").show()
// }, 2300)


/* Lição 2 */

$.noConflict()
setTimeout(() => {
    jQuery(".title").hide()
}, 1000)

// Lição 3

let jq = jQuery // ou -> let jq = $.noConflict()
setTimeout(() => {
    jq(".title").show()
}, 2300) 