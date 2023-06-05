const divDOM = document.querySelector('div');

const data = fetch('https://front-end-by-rimantas.github.io/44-grupe-portfolio/css/components/services.css')
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        for (const user of data) {
            console.log(user);
        }
    });

// let HTML = '';

// for (const item of data) {
//     HTML += ``;
// }

// divDOM.innerHTML = HTML;