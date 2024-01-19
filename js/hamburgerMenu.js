// Click hamburger menu -> navBar1 active
const navBar1 = document.querySelector('.navBar1')
document.querySelector('#hamburgerMenu').onclick = () => {
    event.preventDefault()
    navBar1.classList.toggle('active')
}

// Randrom click close navBar1
const hamburgerMenu = document.querySelector('#hamburgerMenu')
document.addEventListener('click', function(e) {
    if(!hamburgerMenu.contains(e.target) && !navBar1.contains(e.target)) {
        navBar1.classList.remove('active')
    }
})

// Click X -> remove navBar1
const x = document.querySelector('#x')
document.querySelector('#x').onclick = () => {
    event.preventDefault()
    navBar1.classList.remove('active')
}
