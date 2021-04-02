module.exports = function(app) {
  let customers = require
  ('../controllers/products.js')

  //add customer
  app.post('/api/customers', customers.addProduct);
  //list all customers
  app.get('/api/customers', customers.listAllProducts)

  //add warehouse
  app.post('/api/warehouses', customers.addWareHouse);
  //list all warehouses
  app.get('/api/warehouses', customers.listAllWareHouses)

}
