module.exports = function(app) {
  let controllers = require
  ('../controllers/products.js')

  //add customer
  app.post('/api/controllers', controllers.addProduct);
  //list all controllers
  app.get('/api/controllers', controllers.listAllProducts)

  //add warehouse
  app.post('/api/warehouses', controllers.addWareHouse);

  //get individual warehouse info by id
  app.get('/api/warehouses/:id', controllers.getOneWareHouse)

  //list all warehouses
  app.get('/api/warehouses', controllers.listAllWareHouses)

}
