const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')
const nav = document.getElementById('nav-ul') 

function trigger(params) {
    hamburger.style.display='none'
    close.style.display='block'
}

hamburger.addEventListener('click',()=>{
    nav.classList.toggle('show')
})

function retrigger(params) {
    close.style.display='none'
    hamburger.style.display='block'
}

close.removeEventListener('click',()=>{
    nav.classList.toggle('show')
})


