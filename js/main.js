const servicesDOM = document.querySelector('.services');

let HTML = '';

const data = fetch('https://giedrerag.github.io/44-grupe-class-task/data/services.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (const services of data) {
            HTML += `<div class="service">
                        <i class="et-line icon-${services.icon}"></i>
                        <h3 class="service-title">${services.title}</h3>
                        <p class="service-description">${services.desc}</p>
                        </div>`;
            servicesDOM.innerHTML = HTML
        }
    });