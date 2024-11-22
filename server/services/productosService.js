const productsDB =  [
  { 
    id: 1, 
    name: 'Cuaderno ABCD', 
    oldPrice: 4890, 
    price: 2899, 
    urlImg: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQxE2KBblcgWatwbbs9DxIAPbZ3vNNa7U9ucKcpeOTMY-NQdYB_LOWenp2IvzcrqANO_njrocDzRrZUh9K-A36ZNRn4SiMBOw'
  },
  {
    id: 2, 
    name: 'Lapices de colores',  
    oldPrice: 14999, 
    price: 9999, 
    urlImg: 'https://http2.mlstatic.com/D_NQ_NP_721565-MLU71431767270_092023-W.webp' 
  },
  { 
    id: 3, 
    name: 'Carpeta escolar Nª 3',  
    oldPrice: 4500, 
    price: 3200, 
    urlImg: 'https://http2.mlstatic.com/D_NQ_NP_2X_797424-MLA52219532873_102022-F.webp' 
  },
  { 
    id: 4, 
    name: 'Birome Bic',  
    oldPrice: 1850, 
    price: 999, 
    urlImg: 'https://http2.mlstatic.com/D_NQ_NP_824372-MLU70660703749_072023-O.webp' 
  },
  { 
    id: 5, 
    name: 'Hojas A4 Resma', 
    oldPrice: 4950, 
    price: 2999, 
    urlImg: 'https://http2.mlstatic.com/D_NQ_NP_784058-MLU71122733294_082023-O.webp'
  },
  {
    id: 6, 
    name: 'Calculadora cientifica',  
    oldPrice: 23999, 
    price: 19999, 
    urlImg: ' https://http2.mlstatic.com/D_NQ_NP_2X_897566-MLA50021364355_052022-F.webp'
  },
  { 
    id: 7, 
    name: 'Caja de carton tipo baulera',  
    oldPrice: 4500, 
    price: 3700, 
    urlImg: 'https://www.flexipack.com.ar/Image/0/600_750-cajas-bauleras-negras.jpg' 
  },
  { 
    id: 8, 
    name: 'Mochila unicornio arco iris',  
    oldPrice: 16500, 
    price: 13000, 
    urlImg: 'https://http2.mlstatic.com/D_NQ_NP_778519-MLU70011842278_062023-O.webp'
  },
  {
    id: 9, 
    name: 'Diccionario de ingles',  
    oldPrice: 27500, 
    price: 22000, 
    urlImg: 'https://http2.mlstatic.com/D_NQ_NP_802481-MLU72590204549_102023-O.webp'
  },
  { 
    id: 10, 
    name: 'Tijera fija escolar Pizzini',  
    oldPrice: 3999, 
    price: 2500, 
    urlImg: 'https://http2.mlstatic.com/D_NQ_NP_662375-MLA28826069831_112018-O.webp'
  },
  { 
    id: 11, 
    name: 'Cartuchera compàrtimiento',
    oldPrice: 8700, 
    price: 6115, 
    urlImg: 'https://http2.mlstatic.com/D_NQ_NP_720199-MLU72542014154_112023-O.webp'
  },
  { 
    id: 12, 
    name: 'Resaltadores',
    oldPrice: 3000, 
    price: 2500, 
    urlImg: 'https://http2.mlstatic.com/D_NQ_NP_2X_616509-MLA54956912612_042023-F.webp'
  },
];
const remarcarPrecios = (porcentaje) => {
  const nuevosProductos = productsDB.map(
    prod => {
      prod.price = prod.price + (prod.price * (porcentaje / 100));
      return prod;
      });
  return nuevosProductos;
  };
    
  const descuentoPrecios = (porcentaje) => {
    const nuevosProductos = productsDB.map(
      prod => {
        prod.price = prod.price - (prod.price * (15 / 100));
        return prod;
        });
    return nuevosProductos;
    };

    const agregarTextoNuevo = (texto) => {
      const nuevosProductos = productsDB.map(
        prod => {
          prod.name = texto + prod.name;
          return prod;
          });
      return nuevosProductos;
      };
  
    const aumentoPrecios = (cantidadPesos) => {
      const nuevosProductos = productsDB.map(
        prod => {
          prod.price = prod.price + parseInt(cantidadPesos);
          return prod;
          });
      return nuevosProductos;
      };
const getProductos = () =>{
    return productsDB;
}

module.exports = {
    getProductos,
    remarcarPrecios,
    aumentoPrecios,
    descuentoPrecios,
    agregarTextoNuevo
  };