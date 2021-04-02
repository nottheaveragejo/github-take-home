module.exports = function(app) {
  let customers = require
  ('../controllers/products.js')

  //add customer
  app.post('/api/customers', customers.addProduct);
  //list all customers
  app.get('/api/customers', customers.listAllProducts)

}
