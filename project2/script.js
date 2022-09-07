const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


var current_active = 1;
next.addEventListener('click', () => {
    current_active++;
    if (current_active > circles.length) {
        current_active = circles.length;
    }
    update();
})

prev.addEventListener('click', () => {
    current_active--;
    if (current_active < 1) {
        current_active = 1;
    }
    update();
})

function update() {
    circles.forEach((circle, index) => {
            if (index < current_active) {
                circle.classList.add('active')
            } else {
                circle.classList.remove('active')
            }
        })
        //update  active class in circle
    var active_circle = document.querySelectorAll('.active');
    progress.style.width = active_circle.length / circles.length * 100 + '%';
    console.log(active_circle.length / circles.length);
    //update the progress bar
    //change the button anabled  and disabled state
    if (active_circle == 1)
        prev.disabled = true;
    else if (current_active == circles.length)
        next.disabled = true;
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}