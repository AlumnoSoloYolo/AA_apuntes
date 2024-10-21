//1 - pintar lista de productos, html y css.

/* <article class="stock">
        <h2>Nombre del producto</h2>
        <p>Precio: 1€</p>
        <p>Categoria: lacteos</p>
        <hr>
    </article>  */

function pintarProductos(pListaProductos) {
    pListaProductos.forEach(producto => pintarUnProducto(producto));
};

function pintarUnProducto(pProducto) {
    document.write(`
     <article class="${(pProducto.stock) ? 'stock' : 'sinstock'}">
        <h2>${pProducto.name}</h2>
        <p>Precio: ${pProducto.price}€</p>
        <p>Categoria: ${pProducto.category}</p>
        <hr>
    </article>
    `)
};

// pintarProductos(products);

// 2 - filtrar productos que esten entre 1 y 3 euros (ojo capacidad de abstracción).

function filterByPrice(pList, pMinPrice, pMaxPrice) {
    let listaFiltrada = pList.filter(product => product.price >= pMinPrice && product.price <= pMaxPrice);

    return listaFiltrada;
};

// pintarProductos(filterByPrice(products, 1, 3))


//  3 - filtrar por categoria

function filterByCategory(pList, pCategory) {

    let listaFiltrada2 = pList.filter(product => { return product.category.toLowerCase() === pCategory.toLowerCase() }
    );

    return listaFiltrada2
};

// pintarProductos(filterByCategory(products, 'proteinas'));

//  4- filtrar por disposicion, si tengo o no tengo stock

function filterByStock(pList, pStock) {

    let listaFiltrada3 = pList.filter(product => product.stock === pStock);
    return listaFiltrada3;
};

// pintarProductos(filterByStock(products, false))


//   5 - filtrar productos entre 1 y 3 euros que tengan stock

pintarProductos(filterByStock(filterByPrice(products, 1, 3), false))