

document.addEventListener('scroll', function(){
    const scroll_pos_y = window.pageYOffset
    const nav = document.getElementById("nav")
    if (scroll_pos_y >= 100){
        console.log('SCROLL')
        nav.setAttribute("class", "small_nav")
    } else {
        nav.setAttribute("class", "")
    }
})


document.addEventListener('DOMContentLoaded', function(){
    const nav = document.getElementById("nav");
    nav.addEventListener('click', function(){
        if (nav.classList.contains("small_nav")){
            window.scrollTo(0, 0)
        }
    })
})