const divDOM = document.querySelector('div');

const data = fetch('https://giedrerag.github.io/44-grupe-class-task/data/info.json')
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        for (const user of data) {
            console.log(user);
        }
    });
    
        // let HTML = '';
    
        // for (const info of data) {
        //     HTML += `<div class="service">
        //                 <i class="et-line icon-${info.icon}"></i>
        //                 <h3 class="service-title">${info.title}</h3>
        //                 <p class="service-description">${info.desc}</p>
        //             </div>`;
        // }
    
        // divDOM.innerHTML = HTML;
    
        // return true;

// let HTML = '';

//     HTML += `<div class="">
//     <i class="et-line icon-${info.icon}"></i>
//     <h3 class="service-title">${info.title}</h3>
//     <p class="service-description">${info.desc}</p>
// </div>`;
// }

// servicesDOM.innerHTML = HTML;

// return true;

// let HTML = '';

// for (const item of data) {
//     HTML += ``;
// }

// divDOM.innerHTML = HTML;