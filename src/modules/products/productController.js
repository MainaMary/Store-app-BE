import Products from "../../models/products"
class ProductController{
   addNewProduct(req, res){
      const {productName, category, productStatus} = req.body
      const product = new Products(productName, category, productStatus)
      const addedProd= product.addProduct()
      return res.status(200).send({
         products: addedProd
      })

   }
   getTotalProducts(req, res){
      const product = new Products();
      const allProducts = product.getAllProducts()
      return res.status(200).send({
         products : allProducts
      })
   }
   getProduct(req, res){
      const {id} = req.params
      const product = new Products()

      const currentProduct = product.getSingleProduct(id)

      return res.status(200).send({
         products: currentProduct
      })
   }

   updateProduct(req, res){
      const {id} = req.params
      const product = new Products()
      const productUpdate = product.updateSingleProduct(id, req.body)
      return res.status(200).send({
         products: productUpdate
      })




   } 

   deleteProduct(req, res){
      const {id} = req.params
      const product = new Products()
      const productDelete = product.deleteSingleProduct(id)
      return res.status(200).send({
         products: productDelete
      })


   }
   
}
export default ProductController