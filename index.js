const ProductoDAO = require('./dataAccess/productoDAO');

async function main (){
    const producto = await ProductoDAO.crearProducto('Coca cola', 20.50, 50);
    console.log(producto.toJSON());
}

main();