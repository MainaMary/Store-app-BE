import userRouter from "./users";
import productRouter  from "./products";




const apiPrefix = "/api/v1"
const routes = (app)=>{
app.use(apiPrefix, userRouter, productRouter)
}




export default routes