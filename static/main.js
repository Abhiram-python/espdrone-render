var topv
var ojoy_oy
var fjoy_ox,fjoy_oy

var ojoy=document.getElementById("ojoy")
var fjoy=document.getElementById("fjoy")


let ojoy_pointerId = null;
let fjoy_pointerId = null;


document.addEventListener("pointermove", (ev) => {
    if (ev.pointerId === ojoy_pointerId) {
        if (ev.clientY - ojoy_oy + topv > 100) {
            ojoy.style.top = `${100}px`
        }
        else if (ev.clientY - ojoy_oy + topv < -100) {
            ojoy.style.top = `${-100}px`
        }
        else {
            ojoy.style.top = `${ev.clientY - ojoy_oy + topv}px`
        }

        console.log(ev.clientY - ojoy_oy)
    }

    else if (ev.pointerId === fjoy_pointerId) {

        if (ev.clientX - fjoy_ox > 70) {
            fjoy.style.left = `${70}px`
        }
        else if (ev.clientX - fjoy_ox < -70) {
            fjoy.style.left = `${-70}px`
        }
        else {
            fjoy.style.left = `${ev.clientX - fjoy_ox}px`
        }

        if (ev.clientY - fjoy_oy > 70) {
            fjoy.style.top = `${70}px`
        }
        else if (ev.clientY - fjoy_oy < -70) {
            fjoy.style.top = `${-70}px`
        }
        else {
            fjoy.style.top = `${ev.clientY - fjoy_oy}px`
        }
    }
})

ojoy.addEventListener("pointerdown", (ev) => {
    ojoy_pointerId = ev.pointerId;
    ojoy_oy = ev.clientY;
    topv = parseInt(window.getComputedStyle(ojoy).top, 10);
    ojoy.setPointerCapture(ev.pointerId);
})

fjoy.addEventListener("pointerdown", (ev) => {
    fjoy_pointerId = ev.pointerId;
    fjoy_ox = ev.clientX;
    fjoy_oy = ev.clientY;
    fjoy.style.transition = "0s";
    fjoy.setPointerCapture(ev.pointerId);
})

document.addEventListener("pointerup", (ev) => {
    if (ev.pointerId === ojoy_pointerId) {
        ojoy_pointerId = null;
    }

    if (ev.pointerId === fjoy_pointerId) {
        fjoy_pointerId = null;
        fjoy.style.transition = ".1s";
        fjoy.style.left = "0px";
        fjoy.style.top = "0px";
    }
})
