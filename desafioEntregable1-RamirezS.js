// Esta clase se encarga de gestionar la venta de productos
class ProductManager {
    constructor() {
      // Inicializamos el array de eventos y la ganancia base en 0, y el contador de IDs en 0.
      this.products = [];
    
    }
  
    // Retorna el array de eventos.
    addProduct() {
      return this.product;
    }
  
    // Agrega un nuevo evento al array de productos, con los datos recibidos por parámetro.
    addProduct(title="Producto Prueba", description ="este es un producto prueba", price = 200, thumbnail = "sin imagen", code="abc123", stock) {
      // Aumentamos en 1 el contador de IDs para asignar un nuevo ID al producto.
      let check = false;
      this.products.forEach((product) =>
      {
       if(product.code === code) {
        check = true;
       }
    });
    if (check){
        return "El codigo de producto ya existe";


    } else {
        let id = 0;
        if(this.products.length === 0){
            id = 1;
        }else{
            id=
            this.products[this.products.length-1].id + 1;
        }

       let product = {
        id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock, // 
      };
      // Agregamos el producto al array de productos.
      this.products.push(product);
      return "El pruducto fue agregado con exito"
    }
  }
getProducts(){
    return this.products;
}
getProductsById(id){
    let idFind = -1;
    this.products.forEach((product,index) => {
    if (product.id == id){
        idFind = index;
    }
    });
    if (idFind !=-1) {
        return this.products[idFind];
    }else{
        return "Not found";
    }
}
}

