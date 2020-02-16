// $(document).ready(function () {
//     let clicks = 0;
//     let x = new Array();
//     let o = new Array();
//     $('.tic').click(function () {
//         if (!$(this).hasClass('added')) {
//             if (clicks < 10) {
//                 if (clicks % 2 == 0) {
//                     $(this).css('background-image', 'url(asserts/x.png)');
//                     $(this).addClass('added');
//                     x.push($(this).attr('id'))
//                 } else {
//                     $(this).css('background-image', 'url(asserts/o.png)');
//                     $(this).addClass('added');
//                     o.push($(this).attr('id'))
//                 }
//                 clicks++;
//             }
//         }
//         if (x.includes("1") && x.includes("2") && x.includes("3")) {
//             alert("X wins")
//         } else if (x.includes("4") && x.includes("5") && x.includes("6")) {
//             alert("X wins")
//         } else if (x.includes("7") && x.includes("8") && x.includes("9")) {
//             alert("X wins")
//         } else if (x.includes("1") && x.includes("4") && x.includes("7")) {
//             alert("X wins")
//         } else if (x.includes("2") && x.includes("5") && x.includes("8")) {
//             alert("X wins")
//         } else if (x.includes("3") && x.includes("6") && x.includes("9")) {
//             alert("X wins")
//         } else if (x.includes("1") && x.includes("5") && x.includes("9")) {
//             alert("X wins")
//         } else if (x.includes("3") && x.includes("5") && x.includes("7")) {
//             alert("X wins")
//         }else if(clicks==9){
//             alert("draw")
//         }
//         if (o.includes("1") && o.includes("2") && o.includes("3")) {
//             alert("O wins")
//         } else if (o.includes("4") && o.includes("5") && o.includes("6")) {
//             alert("O wins")
//         } else if (o.includes("7") && o.includes("8") && o.includes("9")) {
//             alert("O wins")
//         } else if (o.includes("1") && o.includes("4") && o.includes("7")) {
//             alert("O wins")
//         } else if (o.includes("2") && o.includes("5") && o.includes("8")) {
//             alert("O wins")
//         } else if (o.includes("3") && o.includes("6") && o.includes("9")) {
//             alert("O wins")
//         } else if (o.includes("1") && o.includes("5") && o.includes("9")) {
//             alert("O wins")
//         } else if (o.includes("3") && o.includes("5") && o.includes("7")) {
//             alert("O wins")
//         }

//     })



// })

$(document).ready(function () {

    $('.fa-search').click(function () {
        let First = $(this).closest('tr').find('td').toArray()[0]
        let Last = $(this).closest('tr').find('td').toArray()[1]
        let Handle = $(this).closest('tr').find('td').toArray()[2]
        $('.moydal').addClass('yes')
        $('.moydal-in').append("<p> Name " + First.innerText + "</p>")
        $('.moydal-in').append("<p> Last " + Last.innerText + "</p>")
        $('.moydal-in').append("<p> Handle " + Handle.innerText + "</p>")
        $(window).click(function (event) {
            if ($(event.target).attr('class') == 'moydal yes') {
                $('.moydal').removeClass('yes')
                $('.moydal-in>p').remove()
            }
        })
    })

})