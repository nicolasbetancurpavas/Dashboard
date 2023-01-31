/* funciones para % */
const Descount = (cant, porc) => cant - (cant / 100 * porc)

const PorcentValue = (cant, porc) => cant / 100 * porc

const PORCENT = (max, porcent) => {
    let cuenta = porcent / max * 100
    console.log(`${cuenta}%`)
}

/* LOGIC DASHBOARD */

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const themeToggler = document.querySelector(".theme-toggler")

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})


