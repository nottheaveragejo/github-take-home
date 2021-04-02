// test data for products and ware houses

let products = {
  product1 : {
    id: 1,
    name: "nike",
    quantity:50
  },
  product2 : {
    id: 2,
    name: "givenchy",
    quantity:500
  },
  product3 : {
    id: 3,
    name: "chanel",
    quantity:5000
  },
}

let warehouses = {
  warehouse1 :{
    id : 1,
    storage: [
      products["product1"] ,
      products["product2"]
    ]
  },
  warehouse2 :{
    id : 2,
    storage: ["product2"]
  },
  warehouse3 :{
    id : 3,
    storage: products['product3']
  },

}
//add a new product
exports.addProduct = function(req, res) {
  let newProduct = req.body;
  if(products["product" + newProduct.id] == null){
  products["product" + newProduct.id] = newProduct;
  res.end("Post Successfully: \n" + JSON.stringify(newProduct, null, 4));
  }
};

//list all products
exports.listAllProducts = function(req, res) {
    console.log("All products" + JSON.stringify(products, null, 4));
    res.end("All products: \n" + JSON.stringify(products, null, 4));
};


//add a new warehouse
exports.addWareHouse = function(req, res) {
  let newWareHouse = req.body;
  if(warehouses["warehouse" + newWareHouse.id] == null){
  warehouses["warehouse" + newWareHouse.id] = newWareHouse;
	console.log("--->After Post, warehouses:\n" + JSON.stringify(warehouses, null, 4));
  res.end("Post Successfully: \n" + JSON.stringify(newWareHouse, null, 4));
  }
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
  warehouses["warehouse" + id]['storage'][products["product" + productId]] != null &&
  products["product" + productId]['quantity'] != 0
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
