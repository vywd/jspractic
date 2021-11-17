const drinks = [
    {id: 1, title: "Біле", price: 20, img: 'https://obolon.ua/img/products/thumb/12048.png'},
    {id: 1, title: "Баварське", price: 30, img: 'https://obolon.ua/img/products/thumb/98530.jpg'},
    {id: 1, title: "Світле", price: 40, img: 'https://obolon.ua/img/products/thumb/83892.png'}
]

const toHTML = bottles => `
<div class="card" style="width: 18rem;">
                <img src="${bottles.img}" class="card-img-top" style="height: 300px;" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${bottles.title}</h5>
                  <a href="#" class="btn btn-primary">Псмотреть цену</a>
                  <a href="#" class="btn btn-danger">Удалить</a>
                </div>
              </div>
            </div>
`

function render() {
const html = drinks.map(toHTML).join('');          //const html = drinks.map(bottle => toHTML(bottle));
    document.querySelector('#bottles').innerHTML = html;
}

const modal = $.modal({
   Title: "Modal",
   closable: true, 
   content: `
   <p>Modal content</p>
   <p>Lorem ipsum dolor sit.</p>
   `,
   width: '200px',
   footerButtons: [
       {text: 'Ok', type: 'primary', handler() {
        modal.close()
       }},
       {text: 'Cencel', type: 'danger', handler() {
        modal.close()
    }},
   ]
})