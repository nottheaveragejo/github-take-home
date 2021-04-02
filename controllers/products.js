// test data for products

let products = {
  product1 : {
    id: 1,
    name: "nike"
  },
  product2 : {
    id: 2,
    name: "givenchy"
  },
  product3 : {
    id: 3,
    name: "chanel"
  },
}

//add a new product
exports.addProduct = function(req, res) {
  let newProduct = req.body;
  //update the data set with the newly create product
    products["product" + newProduct.id] = newProduct;
	console.log("--->After Post, products:\n" + JSON.stringify(products, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newProduct, null, 4));
};

//list all products
exports.listAllProducts = function(req, res) {
    console.log("All products" + JSON.stringify(products, null, 4));
    res.end("All products: \n" + JSON.stringify(products, null, 4));
};
