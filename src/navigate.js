export function navigate(l) {
    fetch(`pages/${l}`)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const app = document.querySelector('slot[name="main"]');
            app.innerHTML = doc.querySelector('slot[name="main"]').innerHTML;

            const state = { page: l };
            const title = doc.querySelector('title').textContent;
            document.title = title;
            history.pushState(state, title, l);
            console.log(state, title, l);
        })
        .catch(error => console.log(error));
};
