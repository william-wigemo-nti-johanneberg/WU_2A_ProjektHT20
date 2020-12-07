

document.addEventListener('scroll', function(e){
    const scroll_pos_y = window.pageYOffset
    const nav = document.getElementById("nav")
    if (scroll_pos_y >= 100){
        console.log('SCROLL')
        nav.setAttribute("class", "small_nav")
    } else {
        nav.setAttribute("class", "")
    }
})