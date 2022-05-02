const trggrs = document.getElementById('trggrs');

// move slide
function moveSlide(e) {
    let trggr = e.target.classList;
    
    if (trggr.contains('top')) {
        let a = e.target.classList[1];
        let b = document.getElementById(a);

        b.style.height = '500px';
    }
    if (trggr.contains('right')) {
        let a = e.target.classList[1];
        let b = document.getElementById(a);

        b.style.left = '0px';
    }
    if (trggr.contains('bottom')) {
        let a = e.target.classList[1];
        let b = document.getElementById(a);
        
        b.style.height = '500px';
        b.style.top = '0px';
    }
    if (trggr.contains('left')) {
        let a = e.target.classList[1];
        let b = document.getElementById(a);

        b.style.left = '0px';
    }

}

// reposition slide
function revertSlide(e) {
    let trggr = e.target.classList;

    if (trggr.contains('top')) {
        let a = e.target.classList[1];
        let b = document.getElementById(a);

        b.style.height = '0px';
    }
    if (trggr.contains('right')) {
        let a = e.target.classList[1];
        let b = document.getElementById(a);

        b.style.left = '500px';
    }
    if (trggr.contains('bottom')) {
        let a = e.target.classList[1];
        let b = document.getElementById(a);
        
        b.style.height = '0px';
        b.style.top = '500px';
    }
    if (trggr.contains('left')) {
        let a = e.target.classList[1];
        let b = document.getElementById(a);

        b.style.left = '-500px';
    }

}

// event listeners
trggrs.addEventListener('mouseover', moveSlide);
trggrs.addEventListener('mouseout', revertSlide);
