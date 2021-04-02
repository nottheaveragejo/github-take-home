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
  products["product" + newProduct.id] = newProduct;
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

//get info for specific warehouse
exports.getOneWareHouse= function(req, res) {
  let warehouse = warehouses["warehouse" + req.params.id];
  res.end( "Find a warehouse:\n" + JSON.stringify(warehouse, null, 12));
}

//list all warehouses
exports.listAllWareHouses = function(req, res) {
    res.end("All products: \n" + JSON.stringify(warehouses, null, 4));
};

//update stock quantity at a certain warehouse
exports.unStock = function(req, res) {
  let id = parseInt(req.params.id);
  let productId = req.params.productId
  let updatedStock =req.body
  console.log(req.params,req.body, "update")
  if(warehouses["warehouse" + id] != null &&
  warehouses["warehouse" + id]['products']["product" + productId] != null &&
  products["product" + productId] != null
   ){
    // update data
    let newstock =warehouses["warehouse" + id]['products']["product" + productId]['qty'] -
    updatedStock
    if(newstock <0){
      newstock = 0
    }
		res.end("Update Successfully! \n" + JSON.stringify(newstock, null, 4));
	}else{
		res.end("Don't Exist Customer:\n:" + JSON.stringify(newstock, null, 4));
	}
};
