const header = document.getElementById("header");

let lastScroll = 0;
let count_up = 0;
let count_down = 0;

window.addEventListener("scroll", function(){
    let offset = window.pageYOffset;

    if (offset == 0) {
        count_up = 0;
        count_down = 0;
    }

    if (offset > lastScroll) {
        count_down = count_down + 1;

        if (count_down > 3 || offset % 10 == 0) {
            header.classList.add('headerFade');
            count_down = 0;
            count_up = 0;
        }
        

    } else {
        count_up = count_up + 1;

        if (count_up > 3 || offset == 0) {
            header.classList.remove('headerFade');
            count_up = 0;
            count_down = 0;
        }
        
    }
    lastScroll = offset;
})