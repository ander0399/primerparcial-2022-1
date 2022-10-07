async function populate() {

    const requestURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    const request = new Request(requestURL);
    // console.log('request: ',request);
    const response = await fetch(request);
    const coctails = await response.json();
    // console.log( coctails)

    viewCoctails(coctails);
}

function viewCoctails(obj) {
    const section = document.querySelector('section');
    const coctails = obj.drinks;
    // console.log(coctails)

    for (const coctail of coctails) {
        // console.log(coctail)
        const container = document.createElement('div');
        container.className = 'container';
        const img = document.createElement('img');
        const nombre = document.createElement('h3');
        const ingredientes = document.createElement('p');
        const alcohol = document.createElement('h3');
        const comprar = document.createElement('button');
        comprar.className='btn';

        img.src = coctail.strDrinkThumb;
        nombre.textContent = coctail.strDrink;
        ingredientes.textContent = coctail.strIngredient1;
        alcohol.textContent = coctail.strAlcoholic;
        comprar.textContent = 'Comprar';

        container.appendChild(img);
        container.appendChild(nombre);
        container.appendChild(ingredientes);
        container.appendChild(alcohol);
        container.appendChild(comprar);

        section.appendChild(container);
    }
}

populate();