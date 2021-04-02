module.exports = function(app) {
  let controllers = require
  ('../controllers/products.js')

  //add customer
  app.post('/api/products', controllers.addProduct);
  //list all controllers
  app.get('/api/products', controllers.listAllProducts)

  //add warehouse
  app.post('/api/warehouses', controllers.addWareHouse);

  //get individual warehouse info by id
  app.get('/api/warehouses/:id', controllers.getOneWareHouse)

  //list all warehouses
  app.get('/api/warehouses', controllers.listAllWareHouses)

  //update stock
    app.put('/api/warehouses/:id/:productId', controllers.unstock);
}


