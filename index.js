import { router, navigateTo } from './src/router.js'
import { canvas } from './src/canvas.js'

canvas(document.querySelector('#webgl'));

window.addEventListener('popstate', () => {
    router()
})

document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('[data-navigation]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()

            navigateTo(e.target.href)
        })
    })

    router()
})