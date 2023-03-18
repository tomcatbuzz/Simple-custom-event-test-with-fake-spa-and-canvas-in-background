export function canvas(canvas) {
    const color = ["black", "blue", "red"]

    window.addEventListener("navigation", event => {
        const { page } = event.detail;
        if (page === "/index.html") {
            canvas.style.backgroundColor = color[0];
        } else if ( page === "/about.html") {
            canvas.style.backgroundColor = color[1];
        } else if ( page === "/contact.html") {
            canvas.style.backgroundColor = color[2];
        }
    });
}