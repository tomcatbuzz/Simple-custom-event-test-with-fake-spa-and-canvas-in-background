import { navigate } from './src/navigate.js';
import { canvas } from './src/canvas.js';

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const navEvent = new CustomEvent('navigation', {
            detail: {
                page: link.pathname
            },
            bubbles: true
        });
        document.dispatchEvent(navEvent);
    });
});

document.addEventListener('navigation', event => {
    const { page } = event.detail;
    navigate(page);
});

navigate(window.location.pathname);
canvas(document.querySelector('#webgl'));