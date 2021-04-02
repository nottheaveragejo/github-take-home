// test data for products and ware houses

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

let warehouses = {
  warehouse1 :{
    id : 1,
    products: {
      product1 : {
        id: 1,
        name: "nike",
        qty: 100,
      },
      product2 : {
        id: 2,
        name: "givenchy",
        qty: 300
      },
    }
  },
  warehouse2 :{
    id : 2,
    products: {
      product1 : {
        id: 1,
        name: "nike",
        qty: 50,
      },
      product2 : {
        id: 2,
        name: "givenchy",
        qty: 10
      },
    }
  },
  warehouse3 :{
    id : 3,
    products: {
      product1 : {
        id: 1,
        name: "nike",
        qty: 10,
      },
    }
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


//add a new warehouse
exports.addWareHouse = function(req, res) {
  let newWareHouse = req.body;
  warehouses["warehouse" + newWareHouse.id] = newWareHouse;
	console.log("--->After Post, warehouses:\n" + JSON.stringify(warehouses, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newWareHouse, null, 4));
};

//list all warehouses
exports.listAllWareHouses = function(req, res) {
    console.log("All products" + JSON.stringify(warehouses, null, 4));
    res.end("All products: \n" + JSON.stringify(warehouses, null, 4));
};
