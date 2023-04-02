import { router, navigateTo } from './src/router.js'
import { canvas } from './src/canvas.js'
import Transition from './src/transition.js'
// import { transition } from './src/transition2.js'

canvas(document.querySelector('#webgl'));

window.addEventListener('popstate', () => {
    router()
})

document.addEventListener('DOMContentLoaded', () => {
    const transition = new Transition();
    const navLinks = document.querySelectorAll('[data-navigation]');
    navLinks.forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault()
            // new code
            const url = e.target.href;
            const currentPage = window.location.pathname;
            try {
                await transition.show(currentPage, url, onComplete, onProgress);
                await navigateTo(url)
                await transition.hide()
            } catch (error) {
                console.error(error)
                navigateTo('/404')
            }

            // original
            // navigateTo(e.target.href)
        })
    })

    router()
})

function onComplete() {
    console.log('Transition complete');
}
function onProgress() {
    console.log(`Transition progress: ${progress}`);
}