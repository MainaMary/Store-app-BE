 const totalProducts = []
class Products{
    constructor(productName=null, category =null, productStatus=null){
        this.productName = productName
        this.category= category
        this.productStatus= productStatus
    }
    addProduct(){
        let id = totalProducts.length ? totalProducts[totalProducts.length - 1].id + 1 : 1
        totalProducts.push [{
            id,
            productName: this.productName,
            category: this.category,
            productStatus: this.productStatus
        }]
        return{
            id,
            productName: this.productName,
            category: this.category,
            productStatus: this.productStatus
        }
    }

    getAllproducts(){
  return totalProducts
    }

    getSinglePrduct(id){
        const product = totalProducts.filter(element => element.id === parseInt(id))
        return product
        
    }
    
    updateSingleProduct(id, requestBody){

        totalProducts.map(product =>{
            if(product.id === parseInt(id)){
                const {productName, category, productStatus} = requestBody
                product.productName = productName
                product.category = category
                product.productStatus = productStatus

                return product
            }
          

        })


    }
    deleteSingleProduct(id){
        const index = totalProducts.findIndex( element => element.id === parseInt(id))
        const product = totalProducts.splice(index, 1)
        return product
    }

}

export default Products