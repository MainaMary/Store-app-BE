import express from'express';
import ProductController from "./ProductController"


const productController = new ProductController()

const productRouter = express.Router()
productRouter.get("/products", productController.getTotalProducts);
productRouter.get("/products/:id" , productController.getProduct)
productRouter.post("/products",  productController.addNewProduct)
productRouter.put("/products/:id",  productController.updateProduct)
productRouter.delete("/products/:id",  productController.deleteProduct)

export default productRouter