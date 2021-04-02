// test data for products and ware houses

let products = {
  product1 : {
    id: 1,
    name: "nike",
  },
  product2 : {
    id: 2,
    name: "givenchy",
  },
  product3 : {
    id: 3,
    name: "chanel",
  },
}

let product1 = products["product1"]
let product2 = products["product2"]
let product3 = products["product3"]
let warehouses = {
  warehouse1 :{
    id : 1,
    storage: [
    {productname: product1 ,
    qty: 50},
    {productname: products["product2"] ,
    qty: 500}
    ]
  },
  warehouse2 :{
    id : 2,
    storage: [
      {productname: products["product1"] ,
      qty: 5000}
    ]
  },
  warehouse3 :{
    id : 3,
    storage: [
      {productname:products['product3'],
      qty: 3000}
    ]
  },

}
//add a new product
exports.addProduct = function(req, res) {
  let newProduct = req.body;
  for(let ob in products){
    if(ob['id'] == newProduct.id){
      console.log(`ERRR ADDING PRODUCT WITH SKU + ${newProduct.id}`  )
      return
    }
  }
  products["product" + newProduct.id] = newProduct;
  res.end("Post Successfully: \n" + JSON.stringify(newProduct, null, 4));
};

//list all products
exports.listAllProducts = function(req, res) {
    res.end("All products: \n" + JSON.stringify(products, null, 4));
};


//add a new warehouse
exports.addWareHouse = function(req, res) {
  let newWareHouse = req.body;
  if(warehouses["warehouse" + newWareHouse.id] == null){
  warehouses["warehouse" + newWareHouse.id] = newWareHouse;
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
  let productId = parseInt(req.params.productId)
  let updatedStock =req.body

  if(warehouses["warehouse" + id] != null &&
  products["product" + productId] != null
   ){
    // update data
    let newstock
    for(let item of warehouses["warehouse" + id]['storage']){
      if (item['productname']['id'] == productId){
        newstock =item['qty'] - updatedStock
      if(newstock <0){
        newstock = 0
      }
		res.end("Update Successfully! \n" + JSON.stringify(newstock, null, 4));
	}}
    }
    res.end("Don't Exist" + JSON.stringify(newstock, null, 4));
};
