// public/scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Obtener la lista de productos desde el array `productsDB`
    const products = getProductos();

    // Referencia al contenedor donde se renderizarán los productos
    const productList = document.getElementById('product-list');

    if (!productList) {
        console.error("No se encontró un elemento con id='product-list' en el DOM.");
        return;
    }

    // Renderizar los productos
    products.forEach(product => {
        const listItem = document.createElement('div');
        listItem.classList.add('col-lg-3', 'col-sm-6', 'my-3');
        listItem.innerHTML = `
            <div class='col-12 bg-white text-center h-100 product-item'>
                <div class='row h-100'>
                    <div class='col-12 p-0 mb-3'>
                        <a href="#">
                            <img src="${product.urlImg}" alt="${product.name}" class="img-fluid">
                        </a>
                    </div>
                    <div class="col-12 mb-3">
                        <a href="#" class="product-name">${product.name}</a>
                    </div>
                    <div class="col-12 mb-3">
                        <span class="product-price-old">$${product.oldPrice}</span>
                        <br>
                        <span class="product-price">$${product.price}</span>
                    </div>
                </div>
            </div>
        `;
        productList.appendChild(listItem);
    });
});

// Base de datos simulada
const productsDB = [
    { 
      id: 1, 
      name: 'Cuaderno ABCD', 
      oldPrice: 2899, 
      price: 4499, 
      urlImg: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQxE2KBblcgWatwbbs9DxIAPbZ3vNNa7U9ucKcpeOTMY-NQdYB_LOWenp2IvzcrqANO_njrocDzRrZUh9K-A36ZNRn4SiMBOw'
    },
    {
      id: 2, 
      name: 'Lapices de colores',  
      oldPrice: 9999, 
      price: 14990, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_721565-MLU71431767270_092023-W.webp' 
    },
    { 
      id: 3, 
      name: 'Carpeta escolar Nª 3',  
      oldPrice: 1700, 
      price: 3200, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_2X_797424-MLA52219532873_102022-F.webp' 
    },
    { 
      id: 4, 
      name: 'Birome Bic',  
      oldPrice: 999, 
      price: 1890, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_824372-MLU70660703749_072023-O.webp' 
    },
    { 
      id: 5, 
      name: 'Hojas A4 Resma', 
      oldPrice: 2999, 
      price: 4498, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_784058-MLU71122733294_082023-O.webp'
    },
    {
      id: 6, 
      name: 'Calculadora cientifica',  
      oldPrice: 19999, 
      price: 23999, 
      urlImg: ' https://http2.mlstatic.com/D_NQ_NP_2X_897566-MLA50021364355_052022-F.webp'
    },
    { 
      id: 7, 
      name: 'Caja de carton tipo baulera',  
      oldPrice: 3700, 
      price: 4200, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_782473-MLU71982595103_092023-O.webp' 
    },
    { 
      id: 8, 
      name: 'Mochila unicornio arco iris',  
      oldPrice: 13000, 
      price: 16500, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_778519-MLU70011842278_062023-O.webp'
    },
    {
      id: 9, 
      name: 'Diccionario de ingles',  
      oldPrice: 22000, 
      price: 27559, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_802481-MLU72590204549_102023-O.webp'
    },
    { 
      id: 10, 
      name: 'Tijera fija escolar Pizzini',  
      oldPrice: 2500, 
      price: 3099, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_662375-MLA28826069831_112018-O.webp'
    },
    { 
      id: 11, 
      name: 'Cartuchera compàrtimiento',
      oldPrice: 6155, 
      price: 8700, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_720199-MLU72542014154_112023-O.webp'
    },
  ];

// Función para obtener los productos
const getProductos = () => productsDB;
